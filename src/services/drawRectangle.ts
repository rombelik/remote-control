import robot from 'robotjs';

const drawRectangle = (x:number, y:number, width:number, length:number) => {
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