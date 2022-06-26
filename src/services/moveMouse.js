import robot from 'robotjs';

const moveMouseUp = (x, y, width) => {
    robot.moveMouse(x , y - width);
}
const moveMouseDown = (x, y, width) => {
    robot.moveMouse(x, y + width);
}
const moveMouseLeft = (x, y, width) => {
    robot.moveMouse(x - width, y);
}
const moveMouseRight = (x, y, width) => {
    robot.moveMouse(x + width, y);
}

export {
    moveMouseUp,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight
}