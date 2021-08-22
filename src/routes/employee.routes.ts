import { Router } from "express"
import {
  createEmployeeHandler,
  getEmployeesHandler,
  getEmployeeHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
} from "../controllers/employee.controller"

const router = Router()

router.get("/", getEmployeesHandler)
router.post("/", createEmployeeHandler)
router.get("/:employeeId", getEmployeeHandler)
router.put("/:employeeId", updateEmployeeHandler)
router.delete("/:employeeId", deleteEmployeeHandler)

export default router
