const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    productId: { type: String, required: true },
    username: { type: String, required: true },
    reviewName: { type: String, required: true },
    review: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;