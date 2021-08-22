import mongoose from "mongoose"
import log from "./logger"

async function connect() {
  try {
    const dbUri = process.env.DB_URI as string

    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    log.info("Database connected")
  } catch (err) {
    log.error(err)
  }
}

export default connect
