const modalContainer = document.getElementById("modal_container");

export function newModal () {
    let modalBase = document.createElement("div");
    modalBase.setAttribute("class", "modal_base");
    modalBase.setAttribute("id", "modal_base");
    modalContainer.appendChild(modalBase);
    
    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "modal");
    modalBase.appendChild(modal);

    let modalClose = document.createElement("div");
    modalClose.setAttribute("class", "modal_close");
    modalClose.setAttribute("id", "modal_close");
    modal.appendChild(modalClose);

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal_content");
    modal.appendChild(modalContent);

    modalWhenClosed(modalBase, modalClose);
    return {modal, modalContent, modalBase};
}

function modalWhenClosed(modalBase, modalClose) {
    const modalRemoved = new Event("modalRemoved");
    modalClose.addEventListener("click", () => {
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
    modalBase.addEventListener("click", () => {
        modalBase.dispatchEvent(modalRemoved);
        modalBase.remove();
    })
}