// Contains the logic for the changing words in the hero text

// Get a reference to the element that will have its text changed
const wordToBeChanged = document.querySelector('.title_text_span');

// Create an array of words to cycle through
const wordsArray = ['self-taught', 'passionate', 'committed'];

// This function changes the word displayed every second
function changeWord() {
  let i = 0;

  // Use setInterval to repeatedly execute a function every 1000 milliseconds (1 second)
  setInterval(() => {
    wordToBeChanged.innerHTML = wordsArray[i]; // Set the text of the element to the current word
    i++; // Increment the index to the next word in the array
    if (i === wordsArray.length) {
      // If the end of the array is reached, start over
      i = 0;
    }
    // i %= wordsArray.length; (Hazem's solution)
  }, 1000); // Execute the function every 1000 milliseconds (1 second)
}

// Call the function to start cycling through the words
changeWord();
