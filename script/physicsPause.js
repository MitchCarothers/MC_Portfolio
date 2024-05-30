import { engine } from "/script/physicsEngine.js";
import { getBounds } from "/script/physicsBoundaries.js";

export let isPaused = false;
export function togglePause() {
    if (isPaused) {
        unpause();
    } else if (!isPaused) {
        pause();
    };
};

function pause() {
    let bodies = engine.world.bodies;
    for (let body in bodies) {
        // check if the body is a boundary
        if (!getBounds().includes(bodies[body])) {
            bodies[body].isStatic = true;
        };
    };
    isPaused = true;
};

function unpause() {
    let bodies = engine.world.bodies;
    for (let body in bodies) {
        // Check if the body is a boundary
        if (!getBounds().includes(bodies[body])) {
            bodies[body].isStatic = false;
        };
    };
    isPaused = false;
};