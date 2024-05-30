import { newElement } from "./elementAssembly.js";

export function newModal(type) {
    let returnValue;
    switch (type) {
        case "iframe":
            returnValue = createiFrameModal();
            break;
        case "informational":
            // will add later if needed
            break;
    };
    return returnValue;
};

const modalContainer = document.getElementById("modal_container");
function createiFrameModal() {
    let modalBase = newElement("div", "modal_base", modalContainer);
    let iframeContainer = newElement("div", "frame_container", modalBase);
    let iframe = newElement("iframe", "frame", iframeContainer);
    let closeButton = addModalButton("close", iframeContainer);
    modalCloseFunctionality(modalBase, closeButton);
    return { modalBase, iframeContainer, iframe };
};

export function addModalButton(type, target) {
    let returnValue;
    switch (type) {
        case "close":
            returnValue = addCloseButton(target);
            break;
        case "download":
            returnValue = addDownloadButton(target);
            break;
    };
    return returnValue;
};

function addCloseButton(target) {
    let closeButton = newElement("div", "modal_close", target);
    newElement("div", "modal_close_icon", closeButton);
    return closeButton;
};

function addDownloadButton(target) {
    let downloadButton = newElement("div", "modal_download", target);
    newElement("div", "modal_download_icon", downloadButton);
    return downloadButton;
};

function modalCloseFunctionality(modalBase, closeButton) {
    modalBase.addEventListener("click", (event) => {
        if (event.target !== modalBase) {return};
        removeModal(modalBase);
    });
    closeButton.addEventListener("click", () => {
        removeModal(modalBase);
    });
    function removeModal(target) {
        target.remove();
    };
};