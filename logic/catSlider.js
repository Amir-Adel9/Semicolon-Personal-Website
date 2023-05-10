// Contains the logic for the Cat Slider

// This section sets up references to the necessary DOM elements
// for the cat image slider and initializes some variables.

const slider = document.querySelector('.slider'); // Reference to the slider element
const arrowIcons = document.querySelectorAll('.slider-wrapper i'); // References to the left and right arrow icons
const firstImage = document.querySelectorAll('.cat-image')[0]; // Reference to the first image in the slider

let isDragging = false, // Boolean flag to indicate whether the user is currently dragging the slider
  prevPageX, // Stores the previous x-coordinate of the user's cursor when dragging begins
  prevScrollLeft; // Stores the previous horizontal scroll position of the slider when dragging begins
// Calculate the width of the first image plus some extra padding to use later
let firstImageWidth = firstImage.offsetWidth + 14;

// Add event listeners to the arrow icons to move the slider left or right when clicked
arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-angle-left')) {
      // If the left arrow is clicked
      slider.scrollLeft -= firstImageWidth; // Move the slider left by the width of one image
    } else {
      // If the right arrow is clicked
      slider.scrollLeft += firstImageWidth + 14; // Move the slider right by the width of one image
    }
  });
});

// This section defines functions for the various stages of slider dragging

// This function is called when the user begins dragging the slider
const startDragging = (e) => {
  isDragging = true; // Set the flag to indicate that the user is now dragging the slider
  prevPageX = e.pageX; // Store the current x-coordinate of the user's cursor
  prevScrollLeft = slider.scrollLeft; // Store the current horizontal scroll position of the slider
};

// This function is called while the user is dragging the slider
const drag = (e) => {
  if (!isDragging) return; // If the user is not dragging, do nothing
  e.preventDefault(); // Prevent the default behavior of the cursor when dragging (e.g. selecting text)
  slider.classList.add('dragging'); // Add the 'dragging' class to the slider element
  let positionDifference = e.pageX - prevPageX; // Calculate the difference between the current and previous x-coordinates of the user's cursor
  slider.scrollLeft = prevScrollLeft - positionDifference; // Update the horizontal scroll position of the slider based on the cursor movement
};

// This function is called when the user stops dragging the slider
const stopDragging = () => {
  isDragging = false; // Set the flag to indicate that the user is no longer dragging the slider
  slider.classList.remove('dragging'); // Remove the 'dragging' class from the slider element
};

// Add event listeners to the slider element for mouse interactions
slider.addEventListener('mousedown', startDragging); // When the user presses the mouse button on the slider
slider.addEventListener('mousemove', drag); // When the user moves the mouse while holding the mouse button down on the slider
slider.addEventListener('mouseup', stopDragging); // When the user releases the mouse button on the slider
slider.addEventListener('mouseleave', stopDragging); // When the user moves the mouse outside of the slider
