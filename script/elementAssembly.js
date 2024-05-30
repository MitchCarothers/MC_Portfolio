export function newElement (element, eClass, target) {
    let newElement = document.createElement(element);
    newElement.setAttribute("class", eClass);
    if (target) { target.appendChild(newElement) };
    return newElement;
};
export function newTextNode (text, target) {
    let newText = document.createTextNode(text);
    if (target) { target.appendChild(newText) };
    return newText;
};