import { runEngine } from "/script/physics/physicsEngine.js";
import { initialSpawn } from "/script/physics/physicsSpawn.js";
import { updateBoundaries } from "/script/physics/physicsBoundaries.js";
import { addMouseConstraint } from "/script/physics/physicsMouse.js";
import { initializeSim } from "/script/physics/physicsInitialize.js";

export function runPhysics() {
    runEngine();
    initialSpawn();
    updateBoundaries();
    addMouseConstraint();
    initializeSim();
};