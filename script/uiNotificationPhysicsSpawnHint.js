import { newNotification } from "./uiNotification.js";
import { hasUserSpawnedObject } from "./uiPhysicsSpawnButtons.js";

let physicsStart;
let notificationDelay = 5000;
export function addNotificationSpawnHint() {
    physicsStart = document.getElementById("physics_start");
    physicsStart.addEventListener("click", setNotificationTimer);
};

function setNotificationTimer() {
    setTimeout(() => {
        if (!hasUserSpawnedObject) {
            hintNotification();
        };
    }, notificationDelay);
};
function hintNotification() {
    let notifX = "2%";
    let notifY = "25%";
    let message = "Click one of the skills to spawn additional objects!";
    newNotification(message, notifX, notifY, document.getElementById("physics"));
};