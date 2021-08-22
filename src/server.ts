import dotenv from "dotenv"
import express from "express"
import shopRoutes from "./routes/shop.routes"
import productRoutes from "./routes/product.routes"
import employeeRoutes from "./routes/employee.routes"
import brandRoutes from "./routes/brand.routes"
import home from "./routes/home.routes"
import log from "./utils/logger"

dotenv.config({ path: __dirname + "/../.env" })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use("/", home)
app.use("/api/shops", shopRoutes)
app.use("/api/products", productRoutes)
app.use("/api/employees", employeeRoutes)
app.use("/api/brands", brandRoutes)

if (!process.env.PORT) process.exit(1)

const port = parseInt(process.env.PORT as string, 10)
const host = process.env.HOST as string

function server() {
  app.listen(port, host, () => {
    log.info(`Server is running at http://${host}:${port}`)
  })
}

export default server
