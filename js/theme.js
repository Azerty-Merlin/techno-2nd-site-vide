const storage = sessionStorage;

// Fonction pour appliquer le thème basé sur le storage
function applyTheme() {
    const savedTheme = storage.getItem('theme');
    const themeIcon = document.getElementById('toggle_theme_icon');

    if (savedTheme === 'dark-theme') {
        document.body.id = 'dark-theme';
        themeIcon.setAttribute('d', 'M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4');

    } else if (savedTheme === "light-theme") {
        document.body.id = 'light-theme';
        themeIcon.setAttribute('d', 'M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6');

    }
}

// Fonction pour basculer entre les thèmes
function toggle_theme() {
    const savedTheme = storage.getItem('theme');

    if (savedTheme === 'dark-theme') {
        storage.setItem('theme', 'light-theme');

    } else if (savedTheme === "light-theme") {
        storage.setItem('theme', 'dark-theme');
    } else {
        storage.setItem('theme', 'light-theme');
    }
    applyTheme();
}