import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose"
import Product, { ProductDocument } from "../models/product.model"

//Create a new product
export function createProduct(input: DocumentDefinition<ProductDocument>) {
  return Product.create(input)
}

//Get all products
export function getProducts() {
  return Product.find()
}

//Find a single product information
export function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return Product.findOne(query, {}, options)
}

//Update product information
export function updateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return Product.findOneAndUpdate(query, update, options)
}

//Delete a product
export function deleteProduct(query: FilterQuery<ProductDocument>) {
  return Product.deleteOne(query)
}
