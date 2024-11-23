function add_phone() {
    const element = document.createElement('div');

    element.className = "phone"
    element.style = "color: black"
    element.innerHTML = `
        <h1>Veuillez regarder mon site sur un écran plus grand</h1>
    `;

    document.body.appendChild(element);
}