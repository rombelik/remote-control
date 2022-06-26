import Jimp from 'jimp';
import {httpServer} from './src/http_server/index.js';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';
import {handler} from "./src/services/handler.js";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
})



wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        const {x1, y1} = handler(data);
        ws.send(`mouse_position ${x1},${y1}`)
    });
});

wss.on('close', () => {
    console.log('connection is closed')
})
