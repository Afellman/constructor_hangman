// Put letter check into word construciotr

function Letter(letter) {
  this.letter = letter;
  this.display = "_";
  this.letterCheck = function(guess) {
    if (guess == this.letter) {
      console.log("Correct!")
      this.display = this.letter;

    }
  }
}


module.exports = {
  Letter
};