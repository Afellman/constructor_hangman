// Requiering necessary files and packages
const gameJS = require('./game.js');
const letterJS = require('./letter.js');
const wordJS = require('./word.js');
const inquirer = require('inquirer')
const request = require('request');

// Creating instances of necessary objects.
// gameObj holds all the need logic.
const gameObj = new gameJS.GameLogic();
// wordObj choses and hold the word.
const wordObj = new wordJS.Word();

// Choosing word from word array.
wordObj.chooseWord(gameObj.wordArray);
let word = wordObj.word;

// Generating underscores from word.
gameObj.underscoreGen(word);
let underscores = gameObj.underscores;

// Getting ASCII image from my github and calling inqurePrompt() after
// the the image is displayed.
request('https://raw.githubusercontent.com/Afellman/constructor_hangman/master/hangman.txt', function(err, response, body) {
  console.log(body)
  inquirerPrompt()
});

// Function for inquirer so we can call in recursively 
function inquirerPrompt () {
  console.log("\nGuess This Word")
  console.log("\n" +underscores.join(" "));
  console.log("\n")

  inquirer.prompt([
    {
      message: "Pick a letter",
      name  : "letter"
    }
  ])
  .then(function(answer) {
    // Creating new instance of a letter object from the users guess
    let letterObj = new letterJS.Letter(answer.letter);
    // Calling functions to check the letter and check if the game is over.
    gameObj.checkGuess(letterObj.letter, word)
    gameObj.checkWinLose(word);
    // Recalling the prompt function. 
    inquirerPrompt();
  });
  
}
