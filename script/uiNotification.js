import { newElement, newTextNode } from "./elementAssembly.js";

export class notification {
    container = document.getElementById("notif_container");
    element;
    parent;
    text;
    styleTop;
    styleRight;
    constructor(text, parent, styleTop, styleRight) {
        this.text = text;
        this.parent = parent;
        this.styleTop = styleTop;
        this.styleRight = styleRight;
    };
    generate() {
        this.createElements();
        if (this.styleTop && this.styleRight) { this.determinePositioning() };
        this.animateNotificationEntrance();
        this.decayTimer();
        this.createCloseEvents();
    };
    createElements() {
        this.element = newElement("div", "notif", this.determineParent());
        newElement("div", "notif_close", this.element);
        newTextNode(this.text, this.element);
    };
    determineParent() {
        let targetParent;
        this.parent ? targetParent = this.parent : targetParent = this.container;
        return targetParent;
    };
    determinePositioning() {
        this.element.style.position = "absolute";
        this.element.style.top = this.styleTop;
        this.element.style.right = this.styleRight;
    };
    animateNotificationEntrance() {
        this.element.style.opacity = 0;
        setTimeout( () => { this.element.style.opacity = "100%" }, 100);
    };
    decayTimer() {
        let timeout = 8000;
        setTimeout( () => { this.deleteNotification(true) }, timeout)
    }
    deleteNotification(isAnimated) {
        if (isAnimated === true) {
            let transitionTime = 1000;
            this.element.style.opacity = 0;
            setTimeout(() => { this.element.remove() }, transitionTime);
        } else { this.element.remove() };
    };
    createCloseEvents() {
        this.element.addEventListener("click", () => { this.deleteNotification() })
    };
};