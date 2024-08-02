const prisma = require('../config/db');
const fs = require('fs');
const path = require('path');

exports.getImages = async(req, res) => {
    try {
        const images = await prisma.image.findMany({
            include: {
                user: true,
            },
        });
        res.json(images);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.uploadImage = async(req, res) => {
    const { file, body: { userId } } = req;
    if (!file) {
        return res.status(400).send('No file uploaded');
    }

    try {
        const image = await prisma.image.create({
            data: {
                filename: file.originalname,
                path: file.path,
                userId: parseInt(userId),
            },
        });
        res.json(image);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};