import robot from "robotjs";
import {drawCircle} from './drawCircle';
import {drawRectangle} from "./drawRectangle";
import {drawSquare} from "./drawSquare";
import {moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight} from "./moveMouse"
import {RawData} from "ws";

const handler = (data:RawData):{ x: number; y: number; } => {
    const [command, width, length] = data.toString().split(' ');
    const { x, y } = robot.getMousePos();
    switch(command) {
        case 'mouse_up':
            moveMouseUp(x, y, Number(width))
            break
        case 'mouse_down':
            moveMouseDown(x, y, Number(width))
            break
        case 'mouse_left':
            moveMouseLeft(x, y, Number(width))
            break
        case 'mouse_right':
            moveMouseRight(x, y, Number(width))
            break
        case 'mouse_position':
            console.log('mouse_position')
            break
        case 'draw_circle':
            drawCircle(x, y, Number(width));
            break
        case 'draw_rectangle':
            drawRectangle(x, y, Number(width), Number(length));
            break
        case 'draw_square':
            drawSquare(x, y, Number(width));
            break
        case 'prnt_scrn':
            console.log('prnt_scrn')
            break
        default:
            console.log('default')
            break

    }
    return {x, y}
}

export {
    handler
}