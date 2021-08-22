import dotenv from "dotenv"
import express from "express"
import routes from "./routes"
import log from "./utils/logger"

dotenv.config({ path: __dirname + "/../.env" })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (!process.env.PORT) process.exit(1)

const port = parseInt(process.env.PORT as string, 10)
const host = process.env.HOST as string

function server() {
  app.listen(port, host, () => {
    log.info(`Server is running at http://${host}:${port}`)

    routes(app)
  })
}

export default server
