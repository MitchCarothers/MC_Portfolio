export function animations() {
    projectButtonAnimations();
}

function projectButtonAnimations() {
    let projectButtons = {
        portfolio: document.getElementsByClassName("portfolio")[0],
        modals: document.getElementsByClassName("modals")[0]
    };

    for (let element in projectButtons) {
        let label = projectButtons[element].getElementsByClassName("panel_label")[0]
        projectButtons[element].addEventListener("mouseover", () => {
            label.style.clipPath = "inset(0px 0px 0% 0px)"
        })
        projectButtons[element].addEventListener("mouseleave", () => {
            
            label.style.clipPath = "inset(0px 0px 100% 0px)"
        })
    }
};