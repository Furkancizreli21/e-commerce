const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Routes
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

// MongoDB bağlantısı
(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected ✅");
  } catch (err) {
    console.error("Database error ❌", err);
  }
})();

// Server başlat
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
