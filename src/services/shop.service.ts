import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose"
import Shop, { ShopDocument } from "../models/shop.model"

//Create new shop information
export function createShop(input: DocumentDefinition<ShopDocument>) {
  return Shop.create(input)
}

//Get all shops
export function getShops() {
  return Shop.find()
}

//Find a single shop information
export function findShop(
  query: FilterQuery<ShopDocument>,
  options: QueryOptions = { lean: true }
) {
  return Shop.findOne(query, {}, options)
}

//Update shop information
export function updateShop(
  query: FilterQuery<ShopDocument>,
  update: UpdateQuery<ShopDocument>,
  options: QueryOptions
) {
  return Shop.findOneAndUpdate(query, update, options)
}

//Delete shop information
export function deleteShop(query: FilterQuery<ShopDocument>) {
  return Shop.deleteOne(query)
}
