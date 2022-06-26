import robot from 'robotjs';

const drawRectangle = (x, y, width, length) => {
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(x + length , y);
    robot.moveMouseSmooth(x + length , y + width);
    robot.moveMouseSmooth(x, y + width );
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle("up", "left");
}

export {
    drawRectangle
}