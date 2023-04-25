// Contains the logic for the changing words in the hero text

const wordToBeChanged = document.querySelector('.title_text_span');
const wordsArray = ['self-taught', 'passionate', 'committed'];

function changeWord() {
  let i = 0;
  setInterval(() => {
    wordToBeChanged.innerHTML = wordsArray[i];
    i++;
    if (i === wordsArray.length) {
      i = 0;
    }
  }, 1000);
}

changeWord();
