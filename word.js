function Word (wordArray) {
  this.word = "";
  this.wordArray = wordArray;
  this.chooseWord = function () {
   // Choosing word based on random number.
    this.word = wordArray[Math.floor(Math.random() * this.wordArray.length)];
  } 

}

module.exports = {
  Word
};