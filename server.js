import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import cors from 'cors';

const app = express();

// Додаємо middleware CORS
app.use(cors({
    origin: 'http://localhost:5173' // Дозволяємо доступ із твого клієнтського домену
}));

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',  // Дозволяємо з'єднання для клієнта
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});

let activeSessions = 0;

io.on('connection', (socket) => {
    activeSessions++;
    io.emit('sessionCount', activeSessions);

    socket.on('disconnect', () => {
        activeSessions--;
        io.emit('sessionCount', activeSessions);
    });
});

server.listen(3000, () => {
    console.log('Сервер запущено на порті 3000');
});
