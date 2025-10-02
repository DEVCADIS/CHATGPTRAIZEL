const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mediaRoutes = require('./routes/media');
const { UPLOAD_DIR, THUMB_DIR } = require('./config');

const app = express();

// Security
app.use(helmet());
app.use(cors({ origin: '*' })); // en prod restreindre l'origine
app.use(express.json());

// Rate limit (basique)
const limiter = rateLimit({ windowMs: 60*1000, max: 120 });
app.use(limiter);

// Ensure directories exist
fs.mkdirSync(UPLOAD_DIR, { recursive: true });
fs.mkdirSync(THUMB_DIR, { recursive: true });

// Static serving
app.use('/uploads', express.static(UPLOAD_DIR, { maxAge: '1d' }));
app.use('/thumbs', express.static(THUMB_DIR, { maxAge: '1d' }));

// API
app.use('/api/media', mediaRoutes);

// Route test
app.get('/', (req, res) => res.send('✅ API is running on Railway 🚀'));

// Health check
app.get('/health', (req,res)=> res.json({ ok: true }));

// Lancer serveur sur le bon PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
