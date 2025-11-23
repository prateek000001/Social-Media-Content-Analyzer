const express = require('express');
const router = express.Router();
const upload = require('../utils/fileUpload');
const { handleExtraction } = require('../controllers/extractController');

router.post('/', upload.single('file'), handleExtraction);

module.exports = router;
