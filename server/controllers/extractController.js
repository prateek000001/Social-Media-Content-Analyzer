const path = require('path');
const cleanup = require('../utils/cleanup');
const { extractPdfText } = require('../services/pdfService');
const { extractImageText } = require('../services/imageService');

exports.handleExtraction = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();

    let result;

    if (ext === '.pdf') {
      result = await extractPdfText(filePath);
    } else {
      result = await extractImageText(filePath);
    }

    cleanup(filePath);
    res.json(result);

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
