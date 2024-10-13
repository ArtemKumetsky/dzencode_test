import express, { response } from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"
import router from "./src/routes/index.js"
import mongoose from "mongoose"

const MongoConnectionString =
  "mongodb+srv://kumetsky2014:oR6l4dJPqsInFJTT@dzencodetestdb.yheqt.mongodb.net/dzencodeTestDB?retryWrites=true&w=majority&appName=dzencodeTestDB"

const app = express()

app.use(
  cors({
    origin: "*",
  }),
)
mongoose.connect(MongoConnectionString).then(() => {
  console.log("MongoDB successfully connected!")
})

app.use(router())

const server = createServer(app)
const io = new Server(server, {
  cors: {
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
