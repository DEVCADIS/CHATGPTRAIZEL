const path = require('path');
module.exports = {
  UPLOAD_DIR: path.join(__dirname, 'uploads'),
  THUMB_DIR: path.join(__dirname, 'thumbs'),
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
  PORT: process.env.PORT || 4000,
  BASE_URL: process.env.BASE_URL || 'http://localhost:4000'
};
