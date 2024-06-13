import { engine } from "/script/physics/physicsEngine.js";
import { updateBoundaries } from "/script/physics/physicsBoundaries.js";
import { mouseConstraint } from "/script/physics/physicsMouse.js";
let Composite = Matter.Composite;

export function physicsTrashButton() {
    let button = document.getElementById("trash");
    button.addEventListener("click", clearWorld);
};

function clearWorld() {
    Composite.clear(engine.world, false);
    Composite.add(engine.world, mouseConstraint);
    updateBoundaries();
};