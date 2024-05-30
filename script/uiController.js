import { addProfileImage } from "./uiProfilePicture.js";
import { addPhysicsStartScreen } from "./uiPhysicsStartScreen.js";
import { addResumeButtons } from "./uiButtonResume.js";
import { addAboutMeButton } from "./uiButtonAboutMe.js";
import { addProjectButtons } from "./uiButtonProjects.js";
import { addContactMeButton } from "./uiButtonContact.js";
import { addSpawnButtons } from "./uiPhysicsSpawnButtons.js";
import { addPhysicsTrashButton } from "./uiPhysicsTrash.js";
import { addPhysicsPauseButton } from "./uiPhysicsPauseButton.js";

export function addUIFunctionality() {
    addProfileImage();
    addPhysicsStartScreen();
    addResumeButtons();
    addAboutMeButton();
    addProjectButtons();
    addContactMeButton();
    addSpawnButtons();
    addPhysicsTrashButton();
    addPhysicsPauseButton();
};