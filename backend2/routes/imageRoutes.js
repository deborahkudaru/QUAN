const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

// POST /images
router.post("/", async (req, res) => {
  const { url, category } = req.body;

  if (!url || !category) {
    return res.status(400).json({ error: "URL and category are required" });
  }

  try {
    const newImage = new Image({ url, category });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Failed to save image to database" });
  }
});

// GET /images
router.get("/", async (req, res) => {
  const { category } = req.query;

  try {
    const query = category ? { category } : {};
    const images = await Image.find(query).sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// DELETE image by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
