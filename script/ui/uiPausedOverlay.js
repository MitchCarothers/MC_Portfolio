import { isPaused } from "/script/physics/physicsPause.js";
import { render } from "/script/physics/physicsEngine.js";

export function togglePauseOverlay() {
    let filter = "sepia(20%) contrast(110%)"
    if (isPaused) {
        render.canvas.style.filter = filter;
    } else if (!isPaused) {
        render.canvas.style.filter = "";
    };
};