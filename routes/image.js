const express = require('express');
const multer = require('multer');
const { getImages, uploadImage } = require('../controllers/imageController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage: storage });

router.get('/images', getImages);
router.post('/images/upload', upload.single('image'), uploadImage);

module.exports = router;