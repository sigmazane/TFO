const express = require('express');
const imageRoutes = require('./image');
const userRoutes = require('./user');

const router = express.Router();

router.use(imageRoutes);
router.use(userRoutes);

module.exports = router;