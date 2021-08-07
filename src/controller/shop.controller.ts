import { Request, Response } from "express"
import { get } from "lodash"
import {
  createShop,
  getShops,
  findShop,
  updateShop,
  deleteShop,
} from "../service/shop.service"

//Create a new shop
export async function createShopHandler(req: Request, res: Response) {
  const body = req.body

  const shop = await createShop({ ...body })

  return res.send(shop)
}

//Get all shops
export async function getShopsHandler(req: Request, res: Response) {
  const shops = await getShops()

  return res.send(shops)
}

//Get shop information
export async function getShopHandler(req: Request, res: Response) {
  const shopId = get(req, "params.shopId")

  const shop = await findShop({ shopId })

  if (!shop) return res.sendStatus(404)

  return res.send(shop)
}

//Update shop information
export async function updateShopHandler(req: Request, res: Response) {
  const shopId = get(req, "params.shopId")
  const update = req.body

  const shop = await findShop({ shopId })

  if (!shop) return res.sendStatus(200)

  const updatedShop = await updateShop({ shopId }, update, { new: true })

  return res.send(updatedShop)
}

//Delete a shop information
export async function deleteShopHandler(req: Request, res: Response) {
  const shopId = get(req, "params.shopId")

  const shop = await findShop({ shopId })

  if (!shop) return res.sendStatus(404)

  await deleteShop({ shopId })

  return res.sendStatus(200)
}
