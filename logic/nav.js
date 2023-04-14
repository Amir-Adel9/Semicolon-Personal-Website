const navIcon = document.querySelector('.nav_menu_icon');
const navMenu = document.querySelector('.nav_list');

function toggleNav() {
  navMenu.classList.toggle('nav_open');
}

navIcon.addEventListener('click', toggleNav);
