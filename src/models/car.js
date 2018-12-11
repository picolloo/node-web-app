const mongoose = require("module");

const cardSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: Number,

});
