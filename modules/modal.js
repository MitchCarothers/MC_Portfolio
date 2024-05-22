"use strict";
import { newElement } from "./elementAssembly.js";

const modalContainer = document.getElementById("modal_container");

// Generates full modal with empty space to add content
export function newModal() {
    let base = newElement("div", "modal_base", modalContainer);
    let modal = newElement("div", "modal", base);
    let close = newElement("div", "modal_close", modal)
    let content = newElement("div", "modal_content", modal)
    modalWhenClosed(base, close);
    return { modal, content, base };
}

// Generates modal with iFrame as content
export function newiFrameModal(src) {
    let base = newElement("div", "modal_base", modalContainer);
    let iframeContainer = newElement("div", "frame_container border_shadow", base);
    let iframe = newElement("iframe", "frame", iframeContainer);
    iframe.setAttribute("src", src);
    animateModal(base, iframeContainer, iframe);
    let close = newElement("div", "modal_close", iframeContainer);
    newElement("div", "modal_close_icon", close);
    modalWhenClosed(base, close);
    return { base, close, iframeContainer, iframe };
}

function animateModal(base, modal) {
    let modalTargetTop = modal.style.top;
    let modalTargetBottom = modal.style.bottom;
    base.style.opacity = "0%";
    modal.style.opacity = "0%";
    modal.style.top = "20%";
    modal.style.bottom = "20%";
    setTimeout(() => {
        base.style.opacity = "100%";
        modal.style.opacity = "100%";
        modal.style.top = modalTargetTop;
        modal.style.bottom = modalTargetBottom;
    }, 1);
}

function modalWhenClosed(modalBase, modalClose) {
    const modalRemoved = new Event("modalRemoved");
    modalBase.addEventListener("click", (event) => {
        if (event.target !== modalBase) {return};
        removeModal(modalBase);
    })
    modalClose.addEventListener("click", () => {
        removeModal(modalBase);
    })
    function removeModal(modalBase) {
        modalBase.style.opacity = "0%";
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    }
}