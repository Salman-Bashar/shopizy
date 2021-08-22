import { Router } from "express"
import {
  createShopHandler,
  getShopsHandler,
  getShopHandler,
  updateShopHandler,
  deleteShopHandler,
} from "../controllers/shop.controller"

const router = Router()

router.get("/", getShopsHandler)
router.post("/", createShopHandler)
router.get("/:shopId", getShopHandler)
router.put("/:shopId", updateShopHandler)
router.delete("/:shopId", deleteShopHandler)

export default router
