const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp');
const mime = require('mime-types');
const Database = require('better-sqlite3');
const { UPLOAD_DIR, THUMB_DIR, MAX_FILE_SIZE, BASE_URL } = require('../config');

const dbPath = path.join(__dirname, '..', 'db.sqlite');
const migrations = fs.readFileSync(path.join(__dirname, '..', 'migrations.sql'), 'utf8');
const db = new Database(dbPath);
db.exec(migrations);

const router = express.Router();

// Ensure directories exist
fs.mkdirSync(UPLOAD_DIR, { recursive: true });
fs.mkdirSync(THUMB_DIR, { recursive: true });

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = mime.extension(file.mimetype) || '';
    const name = `${Date.now()}-${Math.random().toString(36).slice(2,9)}.${ext}`;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Type de fichier non supporté'), false);
  }
});

// POST /api/media/upload
router.post('/upload', upload.array('files', 8), async (req, res) => {
  try {
    const stmt = db.prepare(`INSERT INTO media(filename, originalname, mimetype, size, width, height) VALUES (@filename, @originalname, @mimetype, @size, @width, @height)`);
    const inserted = [];
    for (const f of req.files) {
      let width = null, height = null;
      if (f.mimetype.startsWith('image/')) {
        try {
          const metadata = await sharp(f.path).metadata();
          width = metadata.width;
          height = metadata.height;
          // create thumbnail
          const thumbPath = path.join(THUMB_DIR, f.filename);
          await sharp(f.path).resize({ width: 400 }).withMetadata().toFile(thumbPath);
        } catch (e) {
          console.warn('sharp error', e);
        }
      }
      const info = { filename: f.filename, originalname: f.originalname, mimetype: f.mimetype, size: f.size, width, height };
      const result = stmt.run(info);
      inserted.push({ id: result.lastInsertRowid, ...info, url: `${BASE_URL}/uploads/${f.filename}` });
    }
    res.json({ success: true, inserted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/media  (list)
router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM media ORDER BY created_at DESC').all();
  const mapped = rows.map(r => ({
    id: r.id,
    filename: r.filename,
    originalname: r.originalname,
    mimetype: r.mimetype,
    size: r.size,
    width: r.width,
    height: r.height,
    created_at: r.created_at,
    url: `${BASE_URL}/uploads/${r.filename}`,
    thumb: r.mimetype.startsWith('image/') ? `${BASE_URL}/thumbs/${r.filename}` : null
  }));
  res.json(mapped);
});

// GET /api/media/:id  (single)
router.get('/:id', (req,res) => {
  const row = db.prepare('SELECT * FROM media WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json({
    ...row,
    url: `${BASE_URL}/uploads/${row.filename}`,
    thumb: row.mimetype.startsWith('image/') ? `${BASE_URL}/thumbs/${row.filename}` : null
  });
});

module.exports = router;
