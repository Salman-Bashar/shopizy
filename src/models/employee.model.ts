import mongoose from "mongoose"
import { ShopDocument } from "./shop.model"

export interface EmployeeDocument extends mongoose.Document {
  name: string
  employeeID: string
  position: string
  address: string
  contactNo: string
  salary: number
  assignedShop: ShopDocument["_id"]
}

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  address: {
    house: {
      type: String,
      required: true,
    },
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
  salary: {
    type: Number,
    required: true,
  },
  assignedShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
})

const Employee = mongoose.model<EmployeeDocument>("Employee", EmployeeSchema)

export default Employee
