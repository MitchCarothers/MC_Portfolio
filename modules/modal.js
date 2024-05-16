"use strict";
import { newElement } from "./elementAssembly.js";

const modalContainer = document.getElementById("modal_container");

export function newModal () {
    let modalBase = newElement("div", "modal_base", modalContainer);
    let modal = newElement("div", "modal", modalBase);
    let modalClose = newElement("div", "modal_close", modal)
    let modalContent = newElement("div", "modal_content", modal)
    modalWhenClosed(modalBase, modalClose);
    return {modal, modalContent, modalBase};
}

function modalWhenClosed(modalBase, modalClose) {
    const modalRemoved = new Event("modalRemoved");
    modalClose.addEventListener("click", () => {
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
    modalBase.addEventListener("click", (event) => {
        if (event.target !== modalBase) {return};
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
}