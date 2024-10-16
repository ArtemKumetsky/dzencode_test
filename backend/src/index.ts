import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import cors from "cors"
import router from "./routes"
import mongoose from "mongoose"

const MongoConnectionString: string =
  "mongodb+srv://kumetsky2014:oR6l4dJPqsInFJTT@dzencodetestdb.yheqt.mongodb.net/dzencodeTestDB?retryWrites=true&w=majority&appName=dzencodeTestDB"

const app = express()

app.use(
  cors({
    origin: "*",
  }),
)

mongoose
  .connect(MongoConnectionString)
  .then(() => {
    console.log("MongoDB successfully connected!")
  })
  .catch((error: Error) => {
    console.error("MongoDB connection error:", error)
  })

app.use(router())

const index = createServer(app)
const io = new Server(index, {
  cors: {
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
})

let activeSessions: number = 0

io.on("connection", (socket: Socket) => {
  activeSessions++
  io.emit("sessionCount", activeSessions)

  socket.on("disconnect", () => {
    activeSessions--
    io.emit("sessionCount", activeSessions)
  })
})

index.listen(3000, () => {
  console.log("Server started on port 3000")
})
