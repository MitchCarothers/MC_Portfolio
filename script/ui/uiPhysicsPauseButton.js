import { togglePause, isPaused } from "/script/physics/physicsPause.js";
import { togglePauseOverlay } from "/script/ui/uiPausedOverlay.js";

let button;
export function physicsPauseButton() {
    button = document.getElementById("pause");
    button.addEventListener("click", togglePauseButton);
};

let buttonUnpausedStyle = {url: `url('/images/pause.png')`, size: "40%"};
let buttonPausedStyle = {url: `url('/images/play.png')`, size: "55%"};
function togglePauseButton() {
    togglePause();
    toggleIcon();
    togglePauseOverlay();
};

function toggleIcon() {
    if (!isPaused) {
        button.style.backgroundImage = buttonUnpausedStyle.url;
        button.style.backgroundSize = buttonUnpausedStyle.size;
    } else if (isPaused) {
        button.style.backgroundImage = buttonPausedStyle.url;
        button.style.backgroundSize = buttonPausedStyle.size;
    };
};