import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    price: Number,
    code: String,
    image: String,
    box_count: Number,
    residual: Number,
    category: String,
    category_rout: String,
});

export const Product = mongoose.model('product', productSchema);
