class modal {
    baseElement;
    parentElement;
    closeButton;
    constructor(parentID) {
        this.parentID = parentID;
    }
    createBase() {
        this.baseElement = document.createElement("div");
        this.parentElement = document.getElementById(this.parentID);
        this.parentElement.appendChild(this.baseElement);
        this.baseElement.setAttribute("class", "modal_base");
        this.baseElement.addEventListener("click", (event) => {
            if (event.target === this.baseElement) {
                this.hide()
            }
        });
    }
    createCloseButton(targetParent) {
        this.closeButton = document.createElement("div");
        this.closeButton.setAttribute("class", "modal_close");
        targetParent.appendChild(this.closeButton);
        let icon = document.createElement("div");
        icon.setAttribute("class", "modal_close_icon");
        this.closeButton.appendChild(icon);
        this.closeButton.addEventListener("click", () => { this.hide() });
    }
    hide() {
        this.baseElement.setAttribute("class", "hidden");
    }
    show() {
        this.baseElement.setAttribute("class", "modal_base")
    }
}

export class iframeModal extends modal {
    baseElement;
    frameContainer;
    frame;
    frameSrc;
    constructor(parentID, containerClass, modalClass, frameSrc) {
        super();
        this.parentID = parentID;
        this.containerClass = containerClass;
        this.modalClass = modalClass;
        this.frameSrc = frameSrc;
    }
    create() {
        this.createBase();
        this.createFrameContainer();
        this.createFrame();
        this.createCloseButton(this.frameContainer);
        this.hide();
    }
    createFrameContainer() {
        this.frameContainer = document.createElement("div");
        this.baseElement.appendChild(this.frameContainer);
        this.frameContainer.setAttribute("class", this.containerClass);
    }
    createFrame() {
        this.frame = document.createElement("iframe");
        this.frameContainer.appendChild(this.frame);
        this.frame.setAttribute("class", this.modalClass);
        this.frame.setAttribute("src", this.frameSrc);
    }
    createSecondaryButton(buttonClass, buttonIconClass, clickAction) {
        let button = document.createElement("div");
        let buttonIcon = document.createElement("div");
        this.frameContainer.appendChild(button);
        button.appendChild(buttonIcon);
        button.setAttribute("class", buttonClass);
        button.setAttribute("onClick", clickAction);
        buttonIcon.setAttribute("class", buttonIconClass);
    }
}