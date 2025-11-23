const fs = require('fs');

module.exports = (filePath) => {
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    console.error("Cleanup error:", err);
  }
};
