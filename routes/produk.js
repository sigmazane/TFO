const express = require('express');
const { addProduk } = require('../controllers/produkController');

const router = express.Router();

// Endpoint untuk menambahkan produk baru
router.post('/', addProduk);

module.exports = router;