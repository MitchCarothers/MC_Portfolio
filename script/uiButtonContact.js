import { newModal } from "/script/uiModal.js";

export function addContactMeButton() {
    let aboutMeButton = document.getElementById("nav_contactme");
    aboutMeButton.addEventListener("click", createModal);
    function createModal() {
        let iframeSource = "/iframes/contactme.html";
        let modal = newModal("iframe");
        modal.iframe.setAttribute("src", iframeSource);
    };
};