import { iframeModal } from "./modals.js";

export function addResumeButtons() {
    let resumeFile = "images/Resume - Mitchell Carothers.pdf";
    let modal = new iframeModal("modal_container", "frame_container", "frame", "/iframes/resume.html");
    modal.create();
    modal.createSecondaryButton("modal_download", "modal_download_icon", `window.open('${resumeFile}')`);

    let buttons = [
        document.getElementById("nav_resume"),
        document.getElementById("my_resume")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", buttonClicked);
    };

    function buttonClicked() {
        modal.show();
    };
};