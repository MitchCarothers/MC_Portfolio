export class Modal {
    base;
    baseClass = "modal_base";
    constructor(base) {
        this.base = base;
        this.closeEventHandler();
    }
    closeEventHandler() {
        let closeBtn = this.base.getElementsByClassName("modal_close")[0];
        closeBtn.addEventListener("click", () => { this.hide() });
        this.base.addEventListener("click", (event) => {
            if (event.target == this.base) {
                this.hide()
            }
        });
    }
    show() {
        this.base.setAttribute("class", this.baseClass);
    }
    hide() {
        this.base.setAttribute("class", "hidden");
    }
}