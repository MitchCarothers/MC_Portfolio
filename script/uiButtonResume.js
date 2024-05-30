import { newModal, addModalButton } from "./uiModal.js";

export function addResumeButtons() {
    let buttons = [
        document.getElementById("nav_resume"),
        document.getElementById("my_resume")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", resumeModal);
    };

    function resumeModal() {
        let iframeSource = '/iframes/resume.html';
        let resumeFile = '/images/Resume - Mitchell Carothers.pdf';
        let modal = newModal("iframe");
        modal.iframe.setAttribute("src", iframeSource);
        let download = addModalButton("download", modal.iframeContainer);
        download.setAttribute("onClick", `window.open('${resumeFile}')`);
    };
};