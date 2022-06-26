import robot from 'robotjs';

const drawSquare = (x:number, y:number, width:number) => {
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(x + width, y);
    robot.moveMouseSmooth(x + width, y + width);
    robot.moveMouseSmooth(x, y + width);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle("up", "left");
}

export {
    drawSquare
}