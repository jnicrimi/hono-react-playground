import { serve } from "@hono/node-server"
import { createApp } from "./shared/di/container"

const app = createApp()

const server = serve(app)

process.on("SIGINT", () => {
  server.close()
  process.exit(0)
})
process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
})
