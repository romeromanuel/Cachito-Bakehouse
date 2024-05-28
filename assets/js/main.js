/*========== SHOW MENU & HIDE MENU ==========*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle');

/* Show menu */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* Hide menu */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*========== ACTIVATE & REMOVE MENU ==========*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => link.addEventListener('click', linkAction));

function linkAction() {
    // Active link
    navLinks.forEach(link => link.classList.remove('nav__link-active'));
    this.classList.add('nav__link-active');

    // Remove menu mobile
    navMenu.classList.remove('show-menu');

}

/*===== SHADOW HEADER ======*/
window.addEventListener('scroll', shadowHeader);

function shadowHeader() {
    const header = document.getElementById('header');

    // When the scroll is heigher 50 viewport height, add the "shadow-header" class to the <header> tag
    //nav.classList.toggle('scroll-header', this.scrollY >= 200);
    if (this.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
}

/*===== SCROLL HEADER ======*/
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const nav = document.getElementById('header');

    // When the scroll is heigher 200 viewport height, add the "scroll-header" class to the <header> tag
    //nav.classList.toggle('scroll-header', this.scrollY >= 200);
    if (this.scrollY >= 100) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}