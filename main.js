"use strict";

import { newModal } from "./modules/modal.js";
import { newNotification } from "./modules/notification.js"

profileImage();
setTimeout(canvas, 100);
resumeButtons()

function resumeButtons() {
    let buttons = [
        document.getElementById("nav_resume"),
        document.getElementById("my_resume")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", resumeModal)
    }

    function resumeModal () {
        let modal = newModal();
        let modalContent = modal.modalContent;
        let modalBase = modal.modalBase;
        let resume = document.createElement("div");
        resume.setAttribute("class", "resume");
        modalContent.appendChild(resume);
        
        // I found this more simple and effective than media queries
        // Performance is likely slightly worse though
        let scaling = .95;
        function setHeight () {
            resume.style.height = `${(window.innerWidth * scaling)}px`;
        }
        setHeight();
        window.addEventListener("resize", setHeight);
        modalBase.addEventListener("modalRemoved", () => {
            window.removeEventListener("resize", setHeight);
        })
    }
}

function profileImage () {
    const profile_note = document.getElementById("profile_note");
    const profile_image = document.getElementById("profile_image");

    profile_image.addEventListener("mouseenter", () => {
        profile_note.style.opacity = "100%";
    })

    profile_image.addEventListener("mouseleave", () => {
        profile_note.style.opacity = "0%";
    })
}

function canvas() {
    const canvas = document.getElementById("physCanvas");

    canvas.addEventListener("click", notification);
    function notification () {
        canvas.removeEventListener("click", notification);
        newNotification("Click a skill under 'My Skills' to spawn additional objects.")
    }
}