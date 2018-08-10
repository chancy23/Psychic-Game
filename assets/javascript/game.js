
//make array to hold letters
var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//make empty array for letters guess, and string letters together (see other game)
var lettersGuessed = [];

//list all variables
var wins = 1;
var losses = 1;
var guessesLeft = 9;

//need to pick a random letter from the array
var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    console.log("random letter is " + randomLetter);


//reset function
//function resetGame (){
    //if ((lettersGuessed.length === 15) || (randomLetter === userGuess)) {
        //document.getElementById("computerPick").innerHTML = ""; 
        //document.getElementById("message").innerHTML = "";
        //document.getElementById("guessesLeft").innerHTML = "15";
        //document.getElementById("lettersGuessed").innerHTML = "";
        //console.log("game reset");
    //}
//}



//need to capture user guess "document.onkeyup" and put in empty array for letters guess
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase();
    lettersGuessed.push(userGuess);
    
    //to determine if computer letter matches User Input
    if (randomLetter === userGuess) {
        document.getElementById("computerPick").innerHTML = randomLetter;
        document.getElementById("wins").innerHTML = wins++;
       
    }
    else {
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join("  ");
        document.getElementById("guessesLeft").innerHTML = guessesLeft--;
    };

    if (guessesLeft === -1) {
        document.getElementById("losses").innerHTML = losses++;
    };
    
    //trying to say if wins or losses go up by 1, to generate a new random letter and to clear letters used, reset guesses left
    /*if ((wins++) || (losses++)) {
        var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
        console.log("random letter is " + randomLetter);
        document.getElementById("guessesLeft").innerHTML = "10";
        document.getElementById("lettersGuessed").innerHTML = "";
    };*/

};



//make a reset function to fire after:
    //if reach max # of guesses (10?) mark as a loss
        //need to countdown from 10 each on key up, when hit 0, stop the game and reset.
    //if letter guessed matches letter select ( === ) mark as win and reset game.
