function GameLogic () {
  // Some needed variables.
  this.underscores = [];
  this.wrongGuesses = [];
  // Chances the user has to guess wrong.
  this.chances = 5;
  // Given array of possible word choices.
  this.wordArray = ["javascript", "python", "basic", "java", "perl"];
  // Function to generate underscores for each letter in the given word.
  this.underscoreGen  = function (word) {
    this.underscores = [];
    var wordSplit = word.split("");
    wordSplit.forEach(element => {
      this.underscores.push("_");
    });
  }
  // Function to check if the given letter is in the given word and console
  // logging the results.
  this.checkGuess = function(letter, word) {
    // If the letter is NOT in the word.
    if (word.indexOf(letter) == -1) {
      // If the letter has already been guessed.
      if (this.wrongGuesses.indexOf(letter) !== -1) {
        console.log("You Already Guessd That Letter");
      } else {
        // If the letter is wrong and has not yet been guessed.
        this.chances--;
        this.wrongGuesses.push(letter);
        console.log("\nWrong!");      
        console.log("\n" +this.chances + " Chances Left")
        console.log('\nWrong Letters : ' + this.wrongGuesses); 
      };
      // If the letter IS in the word.
    } else {
      // Running through all the letters in the word and replacing the 
      // the respective position of underscores with the right letter.
        for (var i = 0; i < word.length; i++) {
          if (word[i] == letter) {
            this.underscores[i] = letter;
          }
        }
      console.log("\nCorrect!");
    }
  };
  // Function to check if the game is over. 
  this.checkWinLose = function (word) {
    // If the user ran our of chances.
    if (this.chances == 0) {
      console.log("You Lose")
      process.exit();
      // If the user won the game.
    } else if (this.underscores.join("") == word){  
      console.log("\nYou Win!");
      // *** ADD PLAY AGAIN FEATURE ***
      
      // Exit Node
      process.exit();
    }
  }
}

// Exporting the constructor.
module.exports = {
  GameLogic
}