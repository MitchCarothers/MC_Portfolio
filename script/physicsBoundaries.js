import { windowWidth, engine, render } from "./physicsEngine.js";
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

let ground, leftWall, rightWall, ceiling;
export function getBounds() {
    return [ground, leftWall, rightWall, ceiling];
};
export function updateBoundaries() {
    let winWidth = windowWidth();
    let winHeight = render.options.height;
    let boundary = 60;
    ground = Bodies.rectangle((winWidth / 2), (winHeight + (boundary / 2)), winWidth, boundary, { isStatic: true }),
    leftWall = Bodies.rectangle(-(boundary / 2), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    rightWall = Bodies.rectangle((winWidth + (boundary / 2)), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    ceiling = Bodies.rectangle((winWidth / 2), -(boundary / 2), winWidth, boundary, { isStatic: true });
    Composite.add(engine.world, getBounds());
}

// dynamic canvas sizing
window.addEventListener("resize", () => {
    render.canvas.width = windowWidth();
    Composite.remove(engine.world, getBounds());
    updateBoundaries()
});