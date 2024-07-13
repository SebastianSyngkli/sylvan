const Items = require('../models/items');
const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/jop");

router.use(express.json());

router.post("/",  async (req, res) => {
    const { costs, roomname, category, time, image, roomspecification, maxbed,maxguest,child,adult,wedding,party } = req.body;

    try {
        let uploadRes = null;

        if (image) {
            uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "online-shop"
            });
        }

        if (uploadRes) {
            const newItem = new Items({
                costs,
                roomname,
                category,
                time,
                roomspecification,
                maxbed,
                maxguest,
                child,
                adult,
                wedding,
                party,
                image: uploadRes.secure_url
            });

            const savedItem = await newItem.save();
            res.status(200).send(savedItem);
        } else {
            throw new Error("Image upload failed or no image provided.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const readResults = await Items.find();
        res.status(200).send(readResults);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { costs, roomname, category, time, image, roomspecification, maxbed,maxguest,child,adult,wedding,party } = req.body;

    try {
        let uploadRes = null;

        if (image) {
            uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "online-shop"
            });
        }

        const updatedFields = {
            costs,
            roomname,
            category,
            time,
            roomspecification,
            maxbed,
            maxguest,
            child,
            adult,
            wedding,
            party
        };

        if (uploadRes) {
            updatedFields.image = uploadRes.secure_url;
        }

        const updateResults = await Items.findByIdAndUpdate(id, updatedFields, { new: true });
        if (updateResults) {
            res.status(200).send(updateResults);
        } else {
            res.status(404).send({ message: "Item not found" });
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/:id',  async (req, res) => {
    const id = req.params.id;

    try {
        const deleteResult = await Items.findByIdAndDelete(id);
        if (deleteResult) {
            res.status(200).send({ message: "Item deleted successfully" });
        } else {
            res.status(404).send({ message: "Item not found" });
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;
