import { engine } from "/script/physicsEngine.js";
import { updateBoundaries } from "./physicsBoundaries.js";
import { mouseConstraint } from "./physicsMouse.js";
let Composite = Matter.Composite;

export function addPhysicsTrashButton() {
    let button = document.getElementById("trash");
    button.addEventListener("click", clearWorld);
};

function clearWorld() {
    Composite.clear(engine.world, false);
    Composite.add(engine.world, mouseConstraint);
    updateBoundaries();
};