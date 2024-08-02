const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addPembeli = async(req, res) => {
    const { nama, alamat, email, telepon } = req.body;
    try {
        const newPembeli = await prisma.pembeli.create({
            data: {
                nama,
                alamat,
                email,
                telepon,
            },
        });
        res.status(201).json(newPembeli);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addPembeli,
};