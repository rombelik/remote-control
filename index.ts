import {httpServer} from './src/http_server';
import { WebSocketServer } from 'ws';
import {handler} from "./src/services/handler";

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
})



wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        const result:{ x: number; y: number; } = handler(data);
        // const {a, y1:number} = handler(data);
        // const result = handler(data)
        const a = result['x']
        const b = result['y']
        ws.send(`mouse_position ${a},${b}`)
    });
});

wss.on('close', () => {
    console.log('connection is closed')
})
