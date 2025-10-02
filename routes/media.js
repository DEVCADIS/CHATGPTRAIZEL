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

// ===== Assurer que les dossiers existent =====
fs.mkdirSync(UPLOAD_DIR, { recursive: true });
fs.mkdirSync(THUMB_DIR, { recursive: true });

// ===== Multer storage =====
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
    cb(null, allowed.includes(file.mimetype));
  }
});

// ===== Helpers =====
async function processFile(file) {
  let width = null, height = null;
  let thumbUrl = null;

  if (file.mimetype.startsWith('image/')) {
    try {
      const metadata = await sharp(file.path).metadata();
      width = metadata.width;
      height = metadata.height;

      // créer miniature
      const thumbPath = path.join(THUMB_DIR, file.filename);
      await sharp(file.path).resize({ width: 400 }).withMetadata().toFile(thumbPath);
      thumbUrl = `${BASE_URL}/thumbs/${file.filename}`;
    } catch (err) {
      console.warn('Erreur création miniature:', err.message);
    }
  }

  const info = {
    filename: file.filename,
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size,
    width,
    height
  };

  const stmt = db.prepare(`INSERT INTO media(filename, originalname, mimetype, size, width, height) VALUES (@filename, @originalname, @mimetype, @size, @width, @height)`);
  const result = stmt.run(info);

  return {
    id: result.lastInsertRowid,
    ...info,
    url: `${BASE_URL}/uploads/${file.filename}`,
    thumb: thumbUrl
  };
}

// ===== Routes =====

// Upload fichiers (max 8)
router.post('/upload', upload.array('files', 8), async (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'Aucun fichier reçu' });

  try {
    const inserted = [];
    for (const file of req.files) {
      const fileData = await processFile(file);
      inserted.push(fileData);
    }
    res.json({ success: true, inserted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Lister tous les fichiers
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

// Récupérer un fichier par ID
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
