import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose"
import Brand, { BrandDocument } from "../models/brand.model"

//Create a new brand
export function createBrand(input: DocumentDefinition<BrandDocument>) {
  return Brand.create(input)
}

//Update brand information
export function updateBrand(
  query: FilterQuery<BrandDocument>,
  update: UpdateQuery<BrandDocument>,
  options: QueryOptions
) {
  return Brand.findOneAndUpdate(query, update, options)
}

//Delete a brand
export function deleteBrand(query: FilterQuery<BrandDocument>) {
  return Brand.deleteOne(query)
}
