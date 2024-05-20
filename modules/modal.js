"use strict";
import { newElement } from "./elementAssembly.js";

const modalContainer = document.getElementById("modal_container");

// Generates full modal with empty space to add content
export function newModal () {
    let base = newElement("div", "modal_base", modalContainer);
    let modal = newElement("div", "modal", base);
    let close = newElement("div", "modal_close", modal)
    let content = newElement("div", "modal_content", modal)
    modalWhenClosed(base, close);
    return { modal, content, base };
}

// Generates modal with iFrame as content
export function newiFrameModal () {
    let base = newElement("div", "modal_base", modalContainer);
    let iframeContainer = newElement("div", "frame_container border_shadow", base);
    let iframe = newElement("iframe", "frame", iframeContainer);
    let close = newElement("div", "modal_close", iframeContainer);
    modalWhenClosed(base, close);
    return { base, close, iframeContainer, iframe };
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