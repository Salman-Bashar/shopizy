import mongoose from "mongoose"

export interface BrandDocument extends mongoose.Document {
  name: string
  contactPerson: string
  contactNo: string
}

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
})

const Brand = mongoose.model<BrandDocument>("Brand", BrandSchema)

export default Brand
