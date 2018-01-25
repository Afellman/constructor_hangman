// Requires
const request = require('request');
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

// request('https://gist.githubusercontent.com/ixfan/0d0634a7b7314ea49355/raw/09979c526e1b8cbfd56fe020005db6214fa576a8/ascii_art_buddha', function(err, response, body) {
//   console.log(body)
// });

// Choosing word
word.chooseWord()
console.log(word.word)

// Creating letter objects for each letter in the word and pushing 
// them to an array.
for (var i = 0; i < word.word.length; i ++) {
  var x = new letterModule.Letter(word.word[i]);
  letterObjArray.push(x);
}

// 


inquirerPrompt(word)

function inquirerPrompt(word){
  console.log(word.displayFunc(letterObjArray))
  if (chances > 0) {
  console.log(chances + " chances")
    inquirer.prompt([
      {
        message: "Guess a letter",
        name  : "letter"
      }
    ])
    .then(function(guess) {

      if (word.word.indexOf(guess.letter) == -1){
        console.log(guess) 
        chances--};
      letterObjArray.forEach(element => {
        element.letterCheck(guess.letter)
      });
      
      
      inquirerPrompt(word)
    });
  } else {
    console.log("game over")
  }
  
}


 // create letter objs when user guesses. Put letterCheck function into 
 // word constructor