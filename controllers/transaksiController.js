const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const checkout = async(req, res) => {
    const { id_pembeli, total_harga, items } = req.body;
    try {
        const newTransaksi = await prisma.transaksi.create({
            data: {
                id_pembeli,
                total_harga,
                DetailTransaksi: {
                    create: items.map((item) => ({
                        id_produk: item.id_produk,
                        jumlah: item.jumlah,
                        harga_produk: item.harga_produk,
                    })),
                },
            },
        });

        // Kurangi stok produk yang dibeli
        for (const item of items) {
            await prisma.produk.update({
                where: { id: item.id_produk },
                data: { stok: { decrement: item.jumlah } },
            });
        }

        res.status(201).json(newTransaksi);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    checkout,
};