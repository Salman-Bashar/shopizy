import { Request, Response } from "express"
import { get } from "lodash"
import {
  createBrand,
  updateBrand,
  deleteBrand,
} from "../services/brand.service"

//Create a new brand
export async function createBrandHandler(req: Request, res: Response) {
  const body = req.body

  const brand = await createBrand({ ...body })

  return res.send(body)
}

//Update Brand Information
export async function updateBrandHandler(req: Request, res: Response) {
  const brandId = get(req, "params.name")
  const update = req.body

  const updatedBrand = await updateBrand({ brandId }, update, { new: true })

  return res.send(updatedBrand)
}

//Delete brand information
export async function deleteBrandHandler(req: Request, res: Response) {
  const brandId = get(req, "pramas.name")

  await deleteBrand({ brandId })

  return res.sendStatus(200)
}
