import robot from 'robotjs';

const drawCircle = (x:number, y:number, radius:number) => {
    robot.mouseToggle("down", "left");
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const a = x + (radius * Math.cos(i));
        const b = y + (radius * Math.sin(i));
        robot.dragMouse(a, b);
    }
    robot.mouseToggle("up", "left");
}

export {
    drawCircle
}