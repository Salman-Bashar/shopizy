import mongoose from "mongoose"
import { EmployeeDocument } from "./employee.model"
import { ProductDocument } from "./product.model"

export interface ShopDocument extends mongoose.Document {
  name: string
  shopId: string
  location: string
  contactNo: string
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
  },
  location: {
    road: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
  },
  contactNo: {
    type: String,
    required: true,
  },
})

const Shop = mongoose.model<ShopDocument>("Shop", ShopSchema)

export default Shop
