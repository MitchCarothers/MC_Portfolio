"use strict";
import { newiFrameModal } from "./modules/modal.js";
import { newNotification } from "./modules/notification.js"
import { newElement } from "./modules/elementAssembly.js"
import { runRender, stopRender } from "./physics.js";

profileImage();
resumeButtons();
aboutmeButton();
setTimeout(canvas, 100);

function profileImage() {
    const profile_note = document.getElementById("profile_note");
    const profile_image = document.getElementById("profile_image");

    profile_image.addEventListener("mouseenter", () => {
        profile_note.style.opacity = "100%";
    })

    profile_image.addEventListener("mouseleave", () => {
        profile_note.style.opacity = "0%";
    })
}

function resumeButtons() {
    let buttons = [
        document.getElementById("nav_resume"),
        document.getElementById("my_resume")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", resumeModal);
    }

    function resumeModal() {
        let modal = newiFrameModal("./resume.html");
        let download = newElement("div", "resume_download", modal.iframeContainer);
        download.setAttribute("onClick", 
        "window.open('/downloadable/Resume - Mitchell Carothers.pdf')");
        newElement("div", "resume_download_icon", download)

    }
}

function aboutmeButton() {
    let button = document.getElementById("nav_aboutme");
    button.addEventListener("click", aboutmeModal);
    function aboutmeModal() {
        newiFrameModal("./aboutme.html");
    }
}

function canvas() {
    const canvas = document.getElementById("physCanvas");

    canvas.addEventListener("click", notification);
    function notification () {
        runRender();
        canvas.style.filter = "brightness(1)";
        canvas.removeEventListener("click", notification);
        newNotification("Click a skill under 'My Skills' to spawn additional objects.")
    }
}