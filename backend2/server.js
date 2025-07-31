const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", imageRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
