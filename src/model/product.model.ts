import mongoose from "mongoose"
import { BrandDocument } from "./brand.model"

export interface ProductDocument extends mongoose.Document {
  name: string
  brand: BrandDocument["_id"]
  category: string
  buyPrice: number
  sellPrice: number
  stock: number
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
})

const Product = mongoose.model<ProductDocument>("Product", ProductSchema)

export default Product
