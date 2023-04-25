// Contains the logic for the navigation menu on small screens

// Get references to the navigation icon and menu elements
const navIcon = document.querySelector('.nav_menu_icon');
const navMenu = document.querySelector('.nav_list');

// This function toggles the 'nav_open' class on the menu element
function toggleNav() {
  navMenu.classList.toggle('nav_open');
}

// Add the 'click' event listener to the navigation icon, with the toggleNav function as the callback
navIcon.addEventListener('click', toggleNav);
