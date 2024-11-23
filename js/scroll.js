function scrollToTop() {
    const contentDivs = document.getElementById('content');

    contentDivs.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement en douceur
    });
}

function add_scroll_button() {
    const element = document.createElement('button');

    element.onclick = scrollToTop;
    element.classList = "settings-button bottom"

    element.innerHTML = `
        <svg class="settings-icon">
            <path d="M12 4l-8 8h5v6h6v-6h5z"></path>
        </svg>
    `;

    (document.getElementById('content')).appendChild(element);
}