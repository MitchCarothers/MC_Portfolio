import { newModal } from "./uiModal.js";

export function addProjectButtons() {
    let buttons = [
        document.getElementById("nav_projects"),
        document.getElementById("page_projects")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", projectsModal);
    };

    function projectsModal() {
        let iframeSource = '/iframes/projects.html';
        let modal = newModal("iframe");
        modal.iframe.setAttribute("src", iframeSource);
    };
};