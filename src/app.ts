import express from "express"
import config from "config"
import log from "./logger"
import connect from "./db/connect"

const app = express()

const port = config.get("port") as number
const host = config.get("host") as string

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, host, () => {
  log.info(`Server is running at http://${host}:${port}`)

  log.info("Connecting to database...")
  connect()
})
