import robot from 'robotjs';

const moveMouseUp = (x:number, y:number, width:number) => {
    robot.moveMouse(x , y - width);
}
const moveMouseDown = (x:number, y:number, width:number) => {
    robot.moveMouse(x, y + width);
}
const moveMouseLeft = (x:number, y:number, width:number) => {
    robot.moveMouse(x - width, y);
}
const moveMouseRight = (x:number, y:number, width:number) => {
    robot.moveMouse(x + width, y);
}

export {
    moveMouseUp,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight
}