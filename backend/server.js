const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const registrationRoutes = require("./routes/registrationRoutes");
const eventRoutes = require("./routes/eventRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", registrationRoutes);
app.use("/api", eventRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend Server Running Successfully!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});