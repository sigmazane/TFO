const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addAdmin = async(req, res) => {
    const { nama, username, password } = req.body;
    try {
        const newAdmin = await prisma.admin.create({
            data: {
                nama,
                username,
                password, // Anda harus menyimpan password yang di-hash di aplikasi sebenarnya
            },
        });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addAdmin,
};