export function addProjectButtonAnimations() {
    let projectButtons = {
        portfolio: document.getElementById("projects_portfolio"),
        modals: document.getElementById("projects_modals")
    };

    for (let element in projectButtons) {
        projectButtons[element].addEventListener("mouseover", () => {
            let label = projectButtons[element].getElementsByClassName("projects_portfolio_label")[0]
            label.style.clipPath = "inset(0px 0px 0% 0px)"
        })
        projectButtons[element].addEventListener("mouseleave", () => {
            let label = projectButtons[element].getElementsByClassName("projects_portfolio_label")[0]
            label.style.clipPath = "inset(0px 0px 100% 0px)"
        })
    }
};