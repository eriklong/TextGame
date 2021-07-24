export function addText(text) {
    let textElement = document.createElement("p");
    textElement.textContent = text;
    document.body.appendChild(textElement);
}
