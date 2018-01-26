function GameLogic () {
  this.underscores = [];
  this.wrongGuesses = [];
  this.wordArray = ["javascript", "python", "qbasic", "muffin"];
  this.chances = 10;
  this.underscoreGen  = function (word) {
    this.underscores = [];
    var wordSplit = word.split("");
    wordSplit.forEach(element => {
      this.underscores.push("_");
    });
  }
  this.checkGuess = function(letter, word) {
    if (word.indexOf(letter) == -1) {
      if (this.wrongGuesses.indexOf(letter) !== -1) {
        console.log("You Already Guessd That Letter");
      } else {
        this.chances--;
        this.wrongGuesses.push(letter);
        console.log("\nWrong!");      
        console.log("\n" +this.chances + " Chances Left")
        console.log('\nWrong Letters : ' + this.wrongGuesses); 
      };
    } else {
        for (var i = 0; i < word.length; i++) {
          if (word[i] == letter) {
            this.underscores[i] = letter;
          }
        }
      console.log("\nCorrect!");
    }
  };
  this.checkWinLose = function (word) {
    if (this.chances == 0) {
      console.log("You Lose")
      process.exit();
    } else if (this.underscores.join("") == word){  
      console.log("\nYou Win!");
      // *** ADD PLAY AGAIN FEATURE ***

      process.exit();
    }
  }
}

module.exports = {
  GameLogic
}