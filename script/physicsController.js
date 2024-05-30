import { runEngine } from "./physicsEngine.js";
import { initialSpawn } from "./physicsSpawn.js";
import { updateBoundaries } from "./physicsBoundaries.js";
import { addMouseConstraint } from "./physicsMouse.js";
import { initializeSim } from "./physicsInitialize.js";

export function runPhysics() {
    runEngine();
    initialSpawn();
    updateBoundaries();
    addMouseConstraint();
    initializeSim();
};