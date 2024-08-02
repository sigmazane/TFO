const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addProduk = async(req, res) => {
    const { nama, deskripsi, harga, stok } = req.body;
    try {
        const newProduct = await prisma.produk.create({
            data: {
                nama,
                deskripsi,
                harga,
                stok,
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addProduk,
};