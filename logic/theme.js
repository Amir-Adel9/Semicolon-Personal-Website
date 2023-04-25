// Contains the logic for switching between light and dark theme

const themeSwitcher = document.querySelector('.theme_switcher');
const selectedTheme = localStorage.getItem('theme');

document.body.classList.add(selectedTheme);
themeSwitcher.innerHTML = document.body.classList.contains('theme_dark')
  ? 'Light Theme 🌞'
  : 'Dark Theme 🌙';

function toggleTheme() {
  console.log('toggleTheme');
  document.body.classList.toggle('theme_dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('theme_dark')
      ? 'theme_dark'
      : 'theme_light'
  );
  themeSwitcher.innerHTML = document.body.classList.contains('theme_dark')
    ? 'Light Theme 🌞'
    : 'Dark Theme 🌙';
}

themeSwitcher.addEventListener('click', toggleTheme);
