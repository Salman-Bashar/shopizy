import { Router } from "express"
import {
  createBrandHandler,
  updateBrandHandler,
  deleteBrandHandler,
} from "../controllers/brand.controller"

const router = Router()

router.post("/", createBrandHandler)
router.put("/:name", updateBrandHandler)
router.delete("/:name", deleteBrandHandler)

export default router
