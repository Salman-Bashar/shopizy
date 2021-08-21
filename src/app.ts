import dotenv from "dotenv"
import express, { Request, Response } from "express"
import log from "./utils/logger"
import routes from "./routes"
import connect from "./utils/db"

dotenv.config({ path: __dirname + "/../.env" })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (!process.env.PORT) process.exit(1)

const port = parseInt(process.env.PORT as string, 10)
const host = process.env.HOST as string

app.listen(port, host, () => {
  log.info(`Server is running at http://${host}:${port}`)

  log.info("Connecting to database...")
  connect()

  routes(app)
})
