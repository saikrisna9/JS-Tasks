const prompt = require("prompt-sync")();

Secretnumber();

function Secretnumber() {
  function initGame() {
    const secretNumber = Math.floor(Math.random() * 10);
    let gameOver = false;

    const getFeedback = (guess) => {
      if (guess === secretNumber) {
        console.log("Correct!");
        gameOver = true;
      } else if (guess < secretNumber) {
        console.log("Too low.");
      } else {
        console.log("Too high.");
      }
    };

    (function () {
      for (let i = 1; i <= 3 && !gameOver; i++) {
        let guess = +prompt(`Attempt ${i}: Guess the number (0-9): `);
        getFeedback(guess);
      }

      if (!gameOver) {
        console.log("You've used all attempts!");
        console.log("The secret number was:", secretNumber);
      }
    })();
  }

  initGame();
}
