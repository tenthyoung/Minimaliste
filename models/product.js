const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: String, required: true, unique: true },
  product_name: { type: String, required: true },
  price: { type: String, required: true },
  images: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
