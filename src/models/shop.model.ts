import mongoose from "mongoose"
import { EmployeeDocument } from "./employee.model"
import { ProductDocument } from "./product.model"

export interface ShopDocument extends mongoose.Document {
  name: string
  location: string
}

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shopId: {
    type: String,
    required: true,
    unique: true,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
})

const Shop = mongoose.model<ShopDocument>("Shop", ShopSchema)

export default Shop
