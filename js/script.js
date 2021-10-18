// Toggles drop down menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-bar-links')[0];

toggleButton.addEventListener('click', () => {  navbarLinks.classList.toggle('active')
});

// Turns the icon to a X
const navbar = document.querySelector('.navbar');

const menuIcon = document.querySelector('.toggle-button');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
});