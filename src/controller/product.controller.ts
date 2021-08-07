import { Request, Response } from "express"
import { get } from "lodash"
import {
  createProduct,
  getProducts,
  findProduct,
  updateProduct,
  deleteProduct,
} from "../service/product.service"

//Create a new product
export async function createProductHandler(req: Request, res: Response) {
  const body = req.body

  const product = await createProduct({ ...body })

  return res.send(200)
}

//Get all products
export async function getProductsHandler(req: Request, res: Response) {
  const products = await getProducts()

  return res.send(products)
}

//Get a single product information
export async function getProductHandler(req: Request, res: Response) {
  const productId = get(req, "params.name")
  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  return res.send(product)
}

//Update product information
export async function updateProductHandler(req: Request, res: Response) {
  const productId = get(req, "params.name")
  const update = req.body

  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  const updatedProduct = await updateProduct({ productId }, update, {
    new: true,
  })

  return res.send(updatedProduct)
}

//Delete a product
export async function deleteProductHandler(req: Request, res: Response) {
  const productId = get(req, "params.name")

  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  await deleteProduct({ productId })

  return res.sendStatus(200)
}
