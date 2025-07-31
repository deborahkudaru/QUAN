const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

// POST /images
router.post("/", async (req, res) => {
  try {
    const { url } = req.body;
    const newImage = new Image({ url });
    await newImage.save();
    res.status(201).json({ message: "Image saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save image." });
  }
});

// GET /images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images." });
  }
});

module.exports = router;
