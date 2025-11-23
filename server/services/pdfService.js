const fs = require('fs');
const pdfParse = require('pdf-parse');
const Tesseract = require('tesseract.js');

exports.extractPdfText = async (filePath) => {
  // Try direct PDF text extraction
  const buffer = fs.readFileSync(filePath);
  const parsed = await pdfParse(buffer);
  const plainText = parsed?.text?.trim() || '';

  if (plainText.length > 30) {
    return {
      status: "ok",
      method: "pdf-text",
      text: plainText
    };
  }

  // Fallback: read text visually
  const ocrResult = await Tesseract.recognize(filePath, 'eng');
  return {
    status: "ok",
    method: "pdf-image-read",
    text: ocrResult.data.text
  };
};
