const menuToggler = document.getElementById("menu-toggler");
const navMenu = document.querySelector("header .nav-menu");

let isMenuHidden = true;
let maxWindowWidth = 767;

window.addEventListener('load', () => {
    toggleMenu(window.innerWidth <= maxWindowWidth);
});

/* dispose menu if window is extra small after resizing */
window.addEventListener('resize', () => {
    toggleMenu(window.innerWidth <= maxWindowWidth);

});

/* toggle menu display */
menuToggler.addEventListener('change', () => {
    isMenuHidden = !isMenuHidden;    
    toggleMenu(isMenuHidden);
});


/* Open and dispose menu  */
const toggleMenu = (isHidden) => {

    isMenuHidden = isHidden;
    if (isHidden) {
        disposeMenu();
    } else {
        showMenu();
    }
}


const disposeMenu = () => navMenu.classList.add('dispose');
const showMenu = () => navMenu.classList.remove('dispose');

