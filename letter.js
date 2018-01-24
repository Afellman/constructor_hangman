// Put letter check into word construciotr

function Letter(letter) {
  this.letter = letter;
  this.display = "_";
  this.letterCheck = function(guess) {
    if (guess == this.letter) {
      console.log("yes it works")
      this.display = this.letter;
    }
  }
}

module.exports = {
  Letter
};