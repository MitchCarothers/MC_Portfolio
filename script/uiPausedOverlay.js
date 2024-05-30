import { isPaused } from "/script/physicsPause.js";
import { render } from "/script/physicsEngine.js";

export function togglePauseOverlay() {
    let filter = "sepia(20%) contrast(110%)"
    if (isPaused) {
        render.canvas.style.filter = filter;
    } else if (!isPaused) {
        render.canvas.style.filter = "";
    };
};