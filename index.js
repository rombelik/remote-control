import Jimp from 'jimp';
import {httpServer} from './src/http_server/index.js';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
})

const handler = (data) => {
    const [command, coordinate1, coordinate2] = data.toString().split(' ');
    const { x, y } = robot.getMousePos();
    let x1 = x; let y1 = y;
    switch(command) {
        case 'mouse_up':
            y1 = y - Number(coordinate1);
            robot.dragMouse(x1, y1);
            console.log('mouse_up')
            break
        case 'mouse_down':
            y1 = y + Number(coordinate1);
            robot.dragMouse(x1, y1);
            console.log('mouse_down')
            break
        case 'mouse_left':
            x1 = x - Number(coordinate1);
            robot.dragMouse(x1, y1);
            console.log('mouse_left')
            break
        case 'mouse_right':
            x1 = x + Number(coordinate1);
            robot.dragMouse(x1, y1);
            console.log('mouse_right')
            break
        case 'mouse_position':
            console.log('mouse_position')
            break
        case 'draw_circle':
            console.log('draw_circle')
            break
        case 'draw_rectangle':
            console.log('draw_rectangle')
            break
        case 'draw_square':
            console.log('draw_square')
            break
        case 'prnt_scrn':
            console.log('prnt_scrn')
            break
        default:
            console.log('default')
            break

    }
    console.log('x1', x1)
    console.log('y1', y1)
    return {x1, y1}
}

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        const {x1, y1} = handler(data);
        // const userCommand = data.toString();
        // console.log('userCommand', userCommand)
        // const { x, y } = robot.getMousePos()
        // robot.dragMouse(x+100, y+100)
        // console.log('x', x)
        // console.log('y', y)
        ws.send(`mouse_position ${x1},${y1}`)
    });
});

wss.on('close', () => {
    console.log('connection is closed')
})
