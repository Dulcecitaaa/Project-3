let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const guessesLeftDisplay = document.getElementById("guessesLeft");


checkButton.addEventListener("click", function() {
  const guess = Number(guessInput.value);

  if (guess < 1 || guess > 100) {
    message.textContent = "You can only enter numbers between 1 and 100.";
  } else {
    guessesLeft--;
    guessesLeftDisplay.textContent = guessesLeft;

    if (guess === randomNumber) {
      message.textContent = "Congratulations! Your guess was correct \u{1F600} " + randomNumber + " is my secret number.";
      disableGame();
    } else if (guessesLeft === 0) {
      message.textContent = "Unfortunately, you lost the game \u2639 " + "My number was " + randomNumber;
      disableGame();
    } else if (guess < randomNumber) {
      message.textContent = "Too low! Try again.";
    } else {
      message.textContent = "Too high! Try again.";
    }
  }

  guessInput.value = "";
  guessInput.focus();
});


