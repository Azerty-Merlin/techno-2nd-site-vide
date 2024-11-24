function show_popup(className) {
    const popups = document.querySelectorAll('.' + className + "_content");
    const backgrounds = document.querySelectorAll('.' + className + "_background");

    popups.forEach(popup => {
        popup.style.left = '20vw';
    });

    backgrounds.forEach(background => {
        background.style.display = 'block';
    });
}

function hide_popup(className) {
    const popups = document.querySelectorAll('.' + className + "_content");
    const backgrounds = document.querySelectorAll('.' + className + "_background");

    popups.forEach(popup => {
        popup.style.left = '-100vw';
    });

    backgrounds.forEach(background => {
        background.style.display = 'none';
    });
}

function add_popup_vide() {
    // Sélectionner le conteneur
    const container = document.getElementById('main');

    if (!container) {
        console.error("Aucun élément avec l'ID 'main' n'a été trouvé.");
        return;
    }

    // Créer un nouvel élément
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <!-- popup vide -->
        <div class="popup_background popup_vide_background" onclick="hide_popup('popup_vide')"></div>
        <div class="popup_content popup_vide_content" style="color: white;">
            <img class="popup_background_img" src="../img/vide.webp" alt="vide">
            <div class="popup_crose" onclick="hide_popup('popup_vide')">
                <svg style="fill: currentcolor;">
                    <g>
                        <path
                            d="M47.949,50.625c-0.64,0-1.28-0.244-1.768-0.732L14.635,18.346c-0.977-0.976-0.977-2.559,0-3.535    c0.976-0.977,2.56-0.977,3.535,0l31.546,31.547c0.977,0.976,0.977,2.559,0,3.535C49.229,50.381,48.589,50.625,47.949,50.625z">
                        </path>
                        <path
                            d="M16.051,50.273c-0.64,0-1.28-0.244-1.768-0.732c-0.977-0.976-0.977-2.559,0-3.535l31.898-31.898    c0.976-0.977,2.56-0.977,3.535,0c0.977,0.976,0.977,2.559,0,3.535L17.818,49.541C17.331,50.029,16.69,50.273,16.051,50.273z">
                        </path>
                    </g>
                </svg>
            </div>
            <h1 class="popup_title">Vide</h1>
            <a class="button-dark" href="./main_vide.html">
                Voir du vide ?
            </a>
        </div>
    <!-- fin du popup vide -->
    `;

    // Insérer le nouvel élément avant le premier enfant
    if (container.firstChild) {
        container.insertBefore(newElement, container.firstChild);
    } else {
        container.appendChild(newElement); // Si le conteneur est vide
    }
}

function add_popup_chose() {
    // Sélectionner le conteneur
    const container = document.getElementById('main');

    if (!container) {
        console.error("Aucun élément avec l'ID 'main' n'a été trouvé.");
        return;
    }

    // Créer un nouvel élément
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <!-- popup quelque chose -->
        <div class="popup_background popup_chose_background" onclick="hide_popup('popup_chose')"></div>
        <div class="popup_content popup_chose_content" style="color: black;">
            <img class="popup_background_img" src="../img/chose.jpg" alt="chose">
            <div class="popup_crose" onclick="hide_popup('popup_chose')">
                <svg style="fill: currentcolor;">
                    <g>
                        <path
                            d="M47.949,50.625c-0.64,0-1.28-0.244-1.768-0.732L14.635,18.346c-0.977-0.976-0.977-2.559,0-3.535    c0.976-0.977,2.56-0.977,3.535,0l31.546,31.547c0.977,0.976,0.977,2.559,0,3.535C49.229,50.381,48.589,50.625,47.949,50.625z">
                        </path>
                        <path
                            d="M16.051,50.273c-0.64,0-1.28-0.244-1.768-0.732c-0.977-0.976-0.977-2.559,0-3.535l31.898-31.898    c0.976-0.977,2.56-0.977,3.535,0c0.977,0.976,0.977,2.559,0,3.535L17.818,49.541C17.331,50.029,16.69,50.273,16.051,50.273z">
                        </path>
                    </g>
                </svg>
            </div>
            <h1 class="popup_title">Quelque chose.</h1>
            <a href="./main_quelque_chose.html" class="button-dark">
                Voir quelque chose ?
            </a>
        </div>
    <!-- fin du quelque chose -->
    `;

    // Insérer le nouvel élément avant le premier enfant
    if (container.firstChild) {
        container.insertBefore(newElement, container.firstChild);
    } else {
        container.appendChild(newElement); // Si le conteneur est vide
    }
}