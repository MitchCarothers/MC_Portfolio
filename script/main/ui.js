import { interactiveProfilePic } from "/script/ui/uiProfilePicture.js";
import { physicsStartScreen } from "/script/ui/uiPhysicsStartScreen.js";
import { spawnButtons } from "/script/ui/uiPhysicsSpawnButtons.js";
import { physicsTrashButton } from "/script/ui/uiPhysicsTrash.js";
import { physicsPauseButton } from "/script/ui/uiPhysicsPauseButton.js";
import { notificationSpawnHint } from "/script/ui/uiNotificationPhysicsSpawnHint.js";
import { animations } from "/script/ui/animations.js";

export function addUIFunctionality() {
    interactiveProfilePic();
    physicsStartScreen();
    spawnButtons();
    physicsTrashButton();
    physicsPauseButton();
    notificationSpawnHint();
    uiFactory();
    animations();
};

import { Modal } from "/script/ui/modals.js";
import { Button } from "/script/ui/buttons.js";

function uiFactory() {
    let resumeModal = new Modal(document.getElementById("modal_resume"))
    new Button(document.getElementById("nav_resume"), () => { resumeModal.show() });
    new Button(document.getElementById("my_resume"), () => { resumeModal.show() });
    new Button(document.getElementById("resume_download"), () => {
        window.open('/images/Resume - Mitchell Carothers.pdf');
    });

    let aboutmeModal = new Modal(document.getElementById("modal_aboutme"));
    new Button(document.getElementById("nav_aboutme"), () => { aboutmeModal.show() });

    let projectsModal = new Modal(document.getElementById("modal_projects"));
    new Button(document.getElementById("nav_projects"), () => { projectsModal.show() });
    new Button(document.getElementById("page_projects"), () => { projectsModal.show() });

    let contactmeModal = new Modal(document.getElementById("modal_contactme"));
    new Button(document.getElementById("nav_contactme"), () => { contactmeModal.show() });
};