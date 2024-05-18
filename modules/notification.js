"use strict";
import { newElement, newTextNode } from "./elementAssembly.js";

const container = document.getElementById("notif_container");

export function newNotification (text) {
    let notif = newElement("div", "notif", container)
    newTextNode(text, notif);
    notif.style.opacity = 0;
    newElement("div", "notif_close", notif)
    setTimeout(() => {notif.style.opacity = "100%";}, 1)
    
    notifWhenClose(notif)
    setTimeout(() => {decayNotification(notif)}, 8000);
}

function notifWhenClose (notif) {
    const notifClose = notif

    notifClose.addEventListener("click", () => {
        decayNotification(notif, .15);
    });
}

function decayNotification (notif, speed) {
    if (speed || speed === 0) {notif.style.transition = `opacity ${speed}s`;}
    notif.style.opacity = 0;
    setTimeout(() => {notif.remove()}, 1000);
}