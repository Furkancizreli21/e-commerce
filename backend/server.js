const express = require("express");
const router = express.Router();
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

router.get("/admin", (req, res) => {
  res.render();
})(async () => {
  try {
    await mongoose.connect("mongodb+srv://furkancizreli:furki338.@cluster0.vore5l2.mongodb.net/e-commerceDB");
    console.log("Database connected");
  } catch (err) {
    console.log("Database error");
  }
})();

app.listen(3000, () => {
  console.log("Server running");
});
