"use strict";
import { newModal } from "./modules/modal.js";
import { newNotification } from "./modules/notification.js"
import { newElement, newTextNode } from "./modules/elementAssembly.js"

profileImage();
resumeButtons();
setTimeout(canvas, 100);

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

function resumeButtons() {
    let buttons = [
        document.getElementById("nav_resume"),
        document.getElementById("my_resume")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", resumeModal)
    }

    function resumeModal () {
        let modalObj = newModal();
        let modal = modalObj.modal;
        let modalContent = modalObj.modalContent;
        let modalBase = modalObj.modalBase;
        let container = newElement("div", "frame_container", modalContent)
        let iframe = newElement("iframe", "frame", container);
        iframe.setAttribute("src", "./resume.html");
    //    let resume = newElement("div", "resume", modalContent);

        // Download Button Setup
    //    let downloadBtn = newElement("div", "resume_download", modal);
    //    downloadBtn.setAttribute("onClick", 
    //    "window.open('/downloadable/Resume - Mitchell Carothers.pdf')");

        // I found this more simple and effective than media queries
        // Performance is likely slightly worse though
    //    let scaling = .8;
    //    function setHeight () {
    //        resume.style.height = `${(window.innerWidth * scaling)}px`;
    //    }
    //    setHeight();
    //    window.addEventListener("resize", setHeight);
    //    modalBase.addEventListener("modalRemoved", () => {
    //        window.removeEventListener("resize", setHeight);
    //    })
    }

    //function resumeModal () {
    //    const modalContainer = document.getElementById("modal_container");
    //    let container = newElement("div", "modal_frame_container", modalContainer)
    //    let iframe = newElement("iframe", "modal_frame", container);
    //    iframe.setAttribute("src", "./resume.html");
    //}
}

function canvas() {
    const canvas = document.getElementById("physCanvas");

    canvas.addEventListener("click", notification);
    function notification () {
        canvas.removeEventListener("click", notification);
        newNotification("Click a skill under 'My Skills' to spawn additional objects.")
    }
}