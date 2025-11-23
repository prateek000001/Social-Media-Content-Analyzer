const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadFolder = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/[^\w.-]/g, '_');
    cb(null, Date.now() + '-' + cleanName);
  }
});

const allowed = ['.pdf', '.png', '.jpg', '.jpeg'];

module.exports = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    allowed.includes(ext)
      ? cb(null, true)
      : cb(new Error("File type not allowed"));
  }
});
