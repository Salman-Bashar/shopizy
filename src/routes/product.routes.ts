import { Router } from "express"
import {
  createProductHandler,
  getProductsHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "../controllers/product.controller"

const router = Router()

router.get("/", getProductsHandler)
router.post("/", createProductHandler)
router.get("/:name", getProductHandler)
router.put("/:name", updateProductHandler)
router.delete("/:name", deleteProductHandler)

export default router
