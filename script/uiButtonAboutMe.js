import { newModal } from "/script/uiModal.js";

export function addAboutMeButton() {
    let aboutMeButton = document.getElementById("nav_aboutme");
    aboutMeButton.addEventListener("click", createModal);
    function createModal() {
        let iframeSource = "/iframes/aboutme.html";
        let modal = newModal("iframe");
        modal.iframe.setAttribute("src", iframeSource);
    };
};