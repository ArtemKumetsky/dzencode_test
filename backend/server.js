"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
// @ts-ignore
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./src/routes/index"));
// @ts-ignore
const mongoose_1 = __importDefault(require("mongoose"));
const MongoConnectionString = "mongodb+srv://kumetsky2014:oR6l4dJPqsInFJTT@dzencodetestdb.yheqt.mongodb.net/dzencodeTestDB?retryWrites=true&w=majority&appName=dzencodeTestDB";
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
mongoose_1.default
    .connect(MongoConnectionString)
    .then(() => {
    console.log("MongoDB successfully connected!");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
app.use((0, index_1.default)());
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    },
});
let activeSessions = 0;
io.on("connection", (socket) => {
    activeSessions++;
    io.emit("sessionCount", activeSessions);
    socket.on("disconnect", () => {
        activeSessions--;
        io.emit("sessionCount", activeSessions);
    });
});
server.listen(3000, () => {
    console.log("Server started on port 3000");
});
