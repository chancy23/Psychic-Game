
var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lettersGuessed = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Picks a random letter from the availbableLetters array...
var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    console.log("random letter is " + randomLetter);

//reset function to reset game on a win or loss...
function resetGame (){
    //its not resetting the lettersGuessed array on a win or loss +1, only on next key push????
    lettersGuessed = [];
    guessesLeft = 9;
    randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    console.log("random letter is " + randomLetter);
};

//starts game...
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase();
    lettersGuessed.push(userGuess);

    //if right letter is guessed (a win)...
    if (randomLetter === userGuess) {
        document.getElementById("wins").innerHTML = wins +=1;
        resetGame();
    }

    //if wrong letter is guess...
    else {
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join("  ");
        document.getElementById("guessesLeft").innerHTML = guessesLeft--;
    };

    //if max number of guesses is reached (a loss)...
    if (guessesLeft +1 === 0) {
        document.getElementById("losses").innerHTML = losses +=1;
        resetGame();
    };
};