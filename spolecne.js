const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show');

    // Změna ikonky tlačítka podle stavu menu
    const ikonka = menuTlacitko.querySelector('i');
    if (menuPolozky.classList.contains('show')) {
        // Menu je rozbalené, změň ikonku na křížek
        ikonka.classList.remove('fa-bars');
        ikonka.classList.add('fa-xmark');
    } else {
        // Menu je sbalené, změň ikonku na hamburger
        ikonka.classList.remove('fa-xmark');
        ikonka.classList.add('fa-bars');
    }
});