import { iframeModal } from "./modals.js";

export function addContactMeButton() {
    let modal = new iframeModal("modal_container", "frame_container", "frame", "/iframes/aboutme.html");
    modal.create();
    let aboutMeButton = document.getElementById("nav_contactme");
    aboutMeButton.addEventListener("click", buttonClicked);
    function buttonClicked() {
        modal.show();
    };
};