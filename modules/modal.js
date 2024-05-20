"use strict";
import { newElement } from "./elementAssembly.js";

const modalContainer = document.getElementById("modal_container");

// Generates full modal with empty space to add content
export function newModal () {
    let modalBase = newElement("div", "modal_base", modalContainer);
    let modal = newElement("div", "modal", modalBase);
    let modalClose = newElement("div", "modal_close", modal)
    let modalContent = newElement("div", "modal_content", modal)
    modalWhenClosed(modalBase, modalClose);
    return {modal, modalContent, modalBase};
}

// Only generates the modal background with close button
// so that custom modal content can be inserted
export function newModalBase () {
    let modalBase = newElement("div", "modal_base", modalContainer);
    let modalClose = newElement("div", "modal_close", modalBase)
    modalWhenClosed(modalBase, modalClose);
    return { modalBase, modalClose };
}

function modalWhenClosed(modalBase, modalClose) {
    const modalRemoved = new Event("modalRemoved");
    modalBase.addEventListener("click", (event) => {
        if (event.target !== modalBase) {return};
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
    modalClose.addEventListener("click", () => {
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
}