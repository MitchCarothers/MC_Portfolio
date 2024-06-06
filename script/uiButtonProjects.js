import { iframeModal } from "./modals.js";

export function addProjectButtons() {
    let modal = new iframeModal("modal_container", "frame_container", "frame", "/iframes/projects.html");
    modal.create();

    let buttons = [
        document.getElementById("nav_projects"),
        document.getElementById("page_projects")
    ];

    for (let button in buttons) {
        buttons[button].addEventListener("click", clickedButton);
    };

    function clickedButton() {
        modal.show();
    };
};