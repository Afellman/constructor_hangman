function Word () {
  this.word = "";
  this.chooseWord = function (wordArray) {
    this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
  }

}

module.exports = {
  Word
}