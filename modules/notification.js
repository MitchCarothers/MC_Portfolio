export function newNotification (text) {
    const container = document.getElementById("notif_container");
    let notif = document.createElement("div");
    notif.setAttribute("class", "notif");
    notif.setAttribute("id", "notif");
    notif.style.opacity = 0;
    container.appendChild(notif);
    notif.appendChild(document.createTextNode(text));

    let notif_close = document.createElement("div");
    notif_close.setAttribute("class", "notif_close");
    notif_close.setAttribute("id", "notif_close");
    notif.appendChild(notif_close);

    setTimeout(() => {notif.style.opacity = "100%";}, 1)
    initNotification(notif)
    setTimeout(() => {decayNotification(notif)}, 8000);
}

function initNotification (notif) {
    const notif_close = notif

    notif_close.addEventListener("click", () => {
        decayNotification(notif, .15);
    });
}

function decayNotification (notif, speed) {
    if (speed || speed === 0) {notif.style.transition = `opacity ${speed}s`;}
    notif.style.opacity = 0;
    setTimeout(() => {notif.remove()}, 1000);
}