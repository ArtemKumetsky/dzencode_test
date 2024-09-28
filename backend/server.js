import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"
import router from "./src/routes/index.js"

const app = express()

app.use(
  cors({
    origin: "*",
  }),
)
app.use(router())

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "https://dzencodetest-60b29.web.app/" ?? "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
})

let activeSessions = 0

io.on("connection", (socket) => {
  activeSessions++
  io.emit("sessionCount", activeSessions)

  socket.on("disconnect", () => {
    activeSessions--
    io.emit("sessionCount", activeSessions)
  })
})

server.listen(3000, () => {
  console.log("Server started on port 3000")
})
