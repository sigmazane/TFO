require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const produkRoutes = require('./routes/produk');
const transaksiRoutes = require('./routes/transaksi');
const pembeliRoutes = require('./routes/pembeli');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`Method: ${req.method} ${req.path}`);
    next();
});

// Static file serving for uploaded images
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});