function Word () {
  // this.word is empty untill chooseWord() is run.
  this.word = "";
  // Function to assign a randomly chosen word from a given array to this.word
  this.chooseWord = function (wordArray) {
    this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
  }
}

// Exporting the constructor
module.exports = {
  Word
}