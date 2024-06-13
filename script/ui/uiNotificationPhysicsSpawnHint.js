import { notification } from "/script/ui/uiNotification.js";
import { hasUserSpawnedObject } from "/script/ui/uiPhysicsSpawnButtons.js";

let physicsStart;
let notificationDelay = 5000;
export function notificationSpawnHint() {
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
    let message = "Click one of the skills to spawn additional objects!";
    let target = document.getElementById("physics");
    let styleTop = "25%";
    let styleRight = "2%";
    let hintNotification = new notification(message, target, styleTop, styleRight);
    hintNotification.generate();
};