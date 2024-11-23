function add_topbar(option) {
    // Vérifier si l'option est un objet valide
    if (!option || typeof option !== 'object') {
        console.error("L'argument 'option' doit être un objet valide.");
        return;
    }

    // Sélectionner le conteneur
    const container = document.getElementById('main');
    if (!container) {
        console.error("Aucun élément avec l'ID 'main' n'a été trouvé.");
        return;
    }

    // Créer un nouvel élément
    const newElement = document.createElement('div');
    newElement.className = 'topbar';

    // Générer le contenu dynamique de la barre
    newElement.innerHTML = `
        <a href="./home.html">
            <div class="topbar_title">
                <img src="../img/black-hole.png" class="topbar_title_img" alt="topbar_title_img">
                Void
            </div>
        </a>
        ${option.home ? '<a href="./home.html"><div class="topbar_item">Home</div></a>' : ''}
        ${option.vide ? '<div class="topbar_item" onclick="show_popup(\'popup_vide\')">Du vide ?</div>' : ''}
        ${option.chose ? '<div class="topbar_item" onclick="show_popup(\'popup_chose\')">Quelque chose ?</div>' : ''}
        <div class="topbar_item_right">
            <button class="settings-button" onclick="toggle_theme()">
                <svg class="settings-icon">
                    <path id="toggle_theme_icon"
                        d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4">
                    </path>
                </svg>
            </button>
        </div>
    `;

    // Insérer le nouvel élément au début du conteneur
    if (container.firstChild) {
        container.insertBefore(newElement, container.firstChild);
    } else {
        container.appendChild(newElement);
    }
}
