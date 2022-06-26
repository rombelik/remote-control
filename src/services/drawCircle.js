import robot from 'robotjs';

const drawCircle = (x, y, radius) => {
    robot.mouseToggle("down", "left");
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        // Convert polar coordinates to cartesian
        const a = x + (radius * Math.cos(i));
        const b = y + (radius * Math.sin(i));
        robot.dragMouse(a, b);
    }
    robot.mouseToggle("up", "left");
}

export {
    drawCircle
}