const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  inVisible: Boolean,
});

module.exports = productSchema;
