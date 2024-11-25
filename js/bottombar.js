function add_bottombar() {
    const ajuster = document.createElement('div');
    ajuster.style = "flex-grow: 1"

    const element = document.createElement('div');
    element.className = "bottombar"
    element.innerHTML = `
        <h3>© Copyright: 2024 Void.</h3>
        <span class="copyright">
            <strong>Droits réservés… ou pas ?</strong> Ce site est tellement vide que même les cookies n’ont
            rien à grignoter. Mais bon, si vous trouvez quelque chose d’intéressant, faites comme chez vous.
            Juste, n’oubliez pas de fermer la porte en sortant.
        </span>
        <div class="link">
            <a href="./politique.html">Politique de confidentialité</a>
            <a href="./rgpd.html">RGPD</a>
            <a href="./Cookies.html">Cookie</a>
            <a href="./contact.html">Contact et liens</a>
            <a href="./apropos.html">A propos</a>
            <a href="./concept.html">Concept</a>
            <a href="./pages.html">Pages</a>
            <a href="../end.html">Finir la visite ?</a>
        </div>
    `;

    (document.getElementById('content')).appendChild(ajuster); //pour que la bottombar soit en bas
    (document.getElementById('content')).appendChild(element);
}