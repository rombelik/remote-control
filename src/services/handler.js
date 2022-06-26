import robot from "robotjs";
import {drawCircle} from './drawCircle.js';
import {drawRectangle} from "./drawRectangle.js";
import {drawSquare} from "./drawSquare.js";


const handler = (data) => {
    console.log('data----------->', data.toString())
    const [command, width, length] = data.toString().split(' ');
    const { x, y } = robot.getMousePos();
    let x1 = x; let y1 = y;
    switch(command) {
        case 'mouse_up':
            y1 = y - Number(width);
            robot.moveMouse(x1, y1);
            console.log('mouse_up')
            break
        case 'mouse_down':
            y1 = y + Number(width);
            robot.moveMouse(x1, y1);
            console.log('mouse_down')
            break
        case 'mouse_left':
            x1 = x - Number(width);
            robot.moveMouse(x1, y1);
            console.log('mouse_left')
            break
        case 'mouse_right':
            x1 = x + Number(width);
            robot.moveMouse(x1, y1);
            console.log('mouse_right')
            break
        case 'mouse_position':
            console.log('mouse_position')
            break
        case 'draw_circle':
            drawCircle(x1, y1, Number(width));
            console.log('draw_circle')
            break
        case 'draw_rectangle':
            drawRectangle(x1, y1, Number(width), Number(length));
            console.log('draw_rectangle')
            break
        case 'draw_square':
            drawSquare(x1, y1, Number(width));
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

export {
    handler
}