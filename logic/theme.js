// Contains the logic for switching between light and dark theme

// This section sets up references to the necessary DOM elements
// for the theme switcher and initializes some variables.

const themeSwitcher = document.querySelector('.theme_switcher'); // 1. Reference to the theme switcher element
const selectedTheme = localStorage.getItem('theme'); // 4. Get the current theme from local storage (if it exists)

document.body.classList.add(selectedTheme); // 5. Add the selected theme as a class to the body element
themeSwitcher.innerHTML = document.body.classList.contains('theme_dark') // Update the text of the theme switcher button based on the current theme
  ? 'Light Theme 🌞'
  : 'Dark Theme 🌙';

// 3. This function toggles the current theme
function toggleTheme() {
  // Log a message to the console to indicate that the function has been called
  document.body.classList.toggle('theme_dark'); // Toggle the 'theme_dark' class on the body element
  localStorage.setItem(
    // Save the new theme to local storage
    'theme',
    document.body.classList.contains('theme_dark')
      ? 'theme_dark'
      : 'theme_light'
  );
  themeSwitcher.innerHTML = document.body.classList.contains('theme_dark') // Update the text of the theme switcher button based on the new theme
    ? 'Light Theme 🌞'
    : 'Dark Theme 🌙';
}

// 2. Add an event listener to the theme switcher button to call the toggleTheme function when clicked
themeSwitcher.addEventListener('click', toggleTheme);
