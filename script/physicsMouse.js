import { render, engine } from './physicsEngine.js';
import { isPaused } from './physicsPause.js';
import { getBounds } from '/script/physicsBoundaries.js';
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Composite = Matter.Composite;
let Events = Matter.Events;

export let mouse;
export let mouseConstraint;
export function addMouseConstraint() {
    mouseConstraint = MouseConstraint.create(engine, createMouseConstraint());
    Composite.add(engine.world, mouseConstraint);
    createLeaveCanvasEvent();
    enablePausedObjectInteraction();
};

function createMouseConstraint() {
    mouse = Mouse.create(render.canvas);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    let mStiffness = 0.02;
    let mAngularStiffness = 0.5;
    let mAngularDamping = 1;
    let mDamping = .1;
    let mLength = 0;
    let mIsVisible = false;
    const mouseParams = {
        mouse: mouse,
        constraint: {
            stiffness: mStiffness,
            angularStiffness: mAngularStiffness,
            angularDamping: mAngularDamping,
            damping: mDamping,
            length: mLength,
            render: {
                visible: mIsVisible,
            }
        }
    };
    return mouseParams;
};

function createLeaveCanvasEvent() {
    render.canvas.addEventListener("mouseleave", () => {
        const event = new Event("mouseup");
        mouseConstraint.mouse.element.dispatchEvent(event);
    });
};

function enablePausedObjectInteraction() {
    Events.on(mouseConstraint, "startdrag", (event) => {
        if (!getBounds().includes(event.body) && isPaused === true) {
            event.body.isStatic = false;
            ensureAllObjects(event.body);
        };
    });
    Events.on(mouseConstraint, "enddrag", (event) => {
        if (!getBounds().includes(event.body) && isPaused === true) {
            event.body.isStatic = true;
        };
    });
    function ensureAllObjects(unpausedObj) {
        // workaround for bug caused by overlapping objects which allowed the user to unpause multiple objects while the sim was still paused
        for (let body in engine.world.bodies) {
            let target = engine.world.bodies[body];
            if (target != unpausedObj) {
                target.isStatic = true;
            };
        };
    };
};