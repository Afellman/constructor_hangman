// Requires
const inquirer = require("inquirer");
const wordModule = require('./word.js');
const letterModule = require('./letter.js');

var letterObjArray = [];
// Array of words to choose from
const wordArray = ["bob", "cat", "dog", "muffin"];
// Creaing new instance of a word
var word = new wordModule.Word(wordArray)
// Chances
var chances = 10;

// Choosing word
word.chooseWord()
console.log(word.word)



// Creating letter objects for each letter in the word.
for (var i = 0; i < word.word.length; i ++) {
  var x = new letterModule.Letter(word.word[i]);
  letterObjArray.push(x);
}
// displaying the underscore or letter for each letter obj
function display() {
  var displayArray = [];
  letterObjArray.forEach(element => {
    displayArray.push(element.display);
  });
  console.log(displayArray)
}

display()


inquirerPrompt(word.word)

function inquirerPrompt(word){
  if (chances > 0) {
  console.log(chances)
    inquirer.prompt([
      {
        message: "Guess a letter",
        name  : "letter"
      }
    ])
    .then(function(guess) {
      console.log(guess.letter)
      letterObjArray.forEach(element => {
        element.letterCheck(guess.letter)
        console.log(element)
      });
      display()
      inquirerPrompt(word)
    });
    chances --;
  } else {
    console.log("game over")
  }
  
}


 // create letter objs when user guesses. Put letterCheck function into 
 // word constructor