const menuToggler = document.getElementById("btn-menu");
const navMenu = document.querySelector("header .nav-menu");

menuToggler.addEventListener('change', evt => {
    const openMenu = evt.target.checked;
    
    if (openMenu) {
        navMenu.classList.remove('dispose');        
    } else {
        navMenu.classList.add('dispose');        
    }
});