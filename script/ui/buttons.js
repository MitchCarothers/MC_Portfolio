export class Button {
    element;
    onClick;
    constructor(element, onClick) {
        this.element = element;
        this.onClick = onClick;
        this.element.addEventListener("click", this.onClick);
    }
}