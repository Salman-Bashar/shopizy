import dotenv from "dotenv"
import mongoose from "mongoose"
import log from "./logger"

dotenv.config({ path: __dirname + "/../../.env" })

function connect() {
  const dbUri = process.env.DB_URI as string

  return mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      log.info("Database connected")
    })
    .catch((error) => {
      log.error("Cannot connect to database", error)
      process.exit(1)
    })
}

export default connect
