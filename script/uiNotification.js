import { newElement, newTextNode } from "./elementAssembly.js";

const container = document.getElementById("notif_container");
// Text is required in function call. X, y, and parent, are optional.
// Default x/y will position the notification in the top right (with fixed position).
// Default parent will be notif_container.
export function newNotification(text, x, y, parent) {
    let notif = createNotificationElements(text);
    if (x && y) { setPosition(notif, x, y) };
    if (parent) { uniqueParent(parent, notif) };
    animateNotification(notif);
    notifWhenClosed(notif);
    return notif;
};

// The position is being changed from fixed to absolute
// to allow for the notification to be visually attached to an element
function uniqueParent(parent, notif) {
    parent.appendChild(notif);
    notif.style.position = "absolute";
};

function createNotificationElements(text) {
    let notif = newElement("div", "notif", container);
    newTextNode(text, notif);
    newElement("div", "notif_close", notif);
    return notif;
};

function animateNotification(notif) {
    notif.style.opacity = 0;
    setTimeout(() => {notif.style.opacity = "100%";}, 100);
    setTimeout(() => {decayNotification(notif)}, 8000);
};

function setPosition(notif, x, y) {
    notif.style.top = y;
    notif.style.right = x;
};

function notifWhenClosed(button) {
    button.addEventListener("click", () => {
        decayNotification(button, .15);
    });
};

function decayNotification(notif, speed) {
    if (speed || speed === 0) {notif.style.transition = `opacity ${speed}s`;}
    notif.style.opacity = 0;
    setTimeout(() => {removeNotification}, 1000);
    function removeNotification() {
        notif.remove();
    };
};