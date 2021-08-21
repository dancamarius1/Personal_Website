
// const hamburger = document.querySelector(".hamburger-navbar");
const navMenu = document.querySelector(".nav-menu");



const hamburger = document.querySelector(".hamburger-navbar");
if(hamburger){
    hamburger.addEventListener("click",mobileMenu);
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
