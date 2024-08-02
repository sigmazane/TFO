const express = require('express');
const { addPembeli } = require('../controllers/pembeliController');

const router = express.Router();

// Endpoint untuk menambahkan pembeli baru
router.post('/', addPembeli);

module.exports = router;