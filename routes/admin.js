const express = require('express');
const { addAdmin } = require('../controllers/adminController');

const router = express.Router();

// Endpoint untuk menambahkan admin baru
router.post('/', addAdmin);

module.exports = router;