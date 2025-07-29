function toggleMenu() {  
    const menu = document.getElementById('mobile-menu-list');  
    menu.classList.toggle('nav__sm-menu--active');  
    if (menu.classList.contains('nav__sm-menu--active')) {  
        menu.style.display = 'block';  
    } else {  
        menu.style.display = 'none';  
    }  
}  

window.onresize = function() {  
    const widthInEm = window.innerWidth / 16; 
    const mobileMenu = document.getElementById('mobile-menu-list');  
    const mainMenu = document.getElementById('main-menu');  
    if (widthInEm > 50.5) {  
        mobileMenu.style.display = 'none';   
        mobileMenu.classList.remove('nav__sm-menu--active');  
    } else {  
        mainMenu.style.display = 'none'; 
    }  
};  
