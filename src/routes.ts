import { Express, Request, Response } from "express"
import {
  createShopHandler,
  getShopsHandler,
  getShopHandler,
  updateShopHandler,
  deleteShopHandler,
} from "./controller/shop.controller"
import {
  createProductHandler,
  getProductsHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "./controller/product.controller"
import {
  createEmployeeHandler,
  getEmployeesHandler,
  getEmployeeHandler,
  updateEmployeeHandler,
  deleteEmployeeHandler,
} from "./controller/employee.controller"
import {
  createBrandHandler,
  updateBrandHandler,
  deleteBrandHandler,
} from "./controller/brand.controller"

export default function (app: Express) {
  //Landing Page Route
  app.get("/", (req: Request, res: Response) => res.sendStatus(200))

  //Shop Routes
  app.get("/api/shops", getShopsHandler)
  app.post("/api/shops", createShopHandler)
  app.get("/api/shops/:shopId", getShopHandler)
  app.put("/api/shops/:shopId", updateShopHandler)
  app.delete("/api/shops/:shopId", deleteShopHandler)

  //Product Routes
  app.get("/api/products", getProductsHandler)
  app.post("/api/products", createProductHandler)
  app.get("/api/products/:name", getProductHandler)
  app.put("/api/products/:name", updateProductHandler)
  app.delete("/api/products/:name", deleteProductHandler)

  //Employee Routes
  app.get("/api/employees", getEmployeesHandler)
  app.post("/api/employees", createEmployeeHandler)
  app.get("/api/employees/:employeeId", getEmployeeHandler)
  app.put("/api/employees/:employeeId", updateEmployeeHandler)
  app.delete("/api/employees/:employeeId", deleteEmployeeHandler)

  //Brand Routes
  app.post("/api/brands", createBrandHandler)
  app.put("/api/brands/:name", updateBrandHandler)
  app.delete("/api/brands/:name", deleteBrandHandler)
}
