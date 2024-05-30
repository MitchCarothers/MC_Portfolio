"use strict";
import { newiFrameModal } from "./modules/modal.js";
import { newNotification } from "./modules/notification.js"
import { newElement } from "./modules/elementAssembly.js"
import { toggleRunner, pauseControl } from "./physics.js";

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
    const container = document.getElementById("physics_container");
    let start = document.getElementById("physics_start");
    let pause = document.getElementById("pause");
    let pauseStyle1 = 'center/40% url("/images/pause.png") white no-repeat';
    let pauseStyle2 = 'center/40% url("/images/play.png") white no-repeat';

    start.addEventListener("click", startSim);
    function startSim() {
        toggleRunner();
        start.remove();
        container.style.opacity = "100%";
        setTimeout(() => {
            newNotification("Click a skill to spawn additional objects")
        }, 1000);
    }

    pause.addEventListener("click", pauseSim);
    function pauseSim() {
        pauseControl.togglePause();
        if (pause.style.background = pauseStyle1) {
            pause.style.background = pauseStyle2;
        } else if (pause.style.background = pauseStyle2) {
            pause.style.background = pauseStyle1;
        }
    }
}