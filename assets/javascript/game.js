var possGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
	"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var compGuess = possGuesses[Math.floor(Math.random() * 26 + 1)]
console.log(compGuess);
var yourGuesses = [];

// Determins how the event key is processed.
document.onkeyup = function(event) {
    var yourChoice = event.key;
    console.log(yourChoice); //works to log the key pressed to console! 

    // Alerts if the choice isn't a valid lette.r
    if (possGuesses.includes(yourChoice) === false) {
    	alert("That's not a letter, silly!");
    	guessesLeft++; 
    }

    // Pushes the key choice to the guess array to show on screen.
    guessArray(yourChoice);

    // If guesses left aren't 0, compares the user choice. Still don't know how to new choice.
    if (guessesLeft >= 1) {
    	var compChoice = compGuess;
    	console.log(compChoice);
    	compare(yourChoice, compChoice);
    }
   	
   	// Displays the results of key choices, guess array, and wins/losses.
   	render();
};

//Compare function
function compare(val1, val2) {
	if (val1 === val2) {
      	wins++; 
      	console.log("round increased bc win");
      	guessesLeft = 9; 
      	compGuess = possGuesses[Math.floor(Math.random() * 26 + 1)]; // resets comp guess
      	yourGuesses.splice(0,10);
      	console.log("Match!");
      	console.log(wins);
    }

    else {
    	if (guessesLeft > 1) {
     	guessesLeft--;
      	console.log("Nope!");
      	console.log(guessesLeft);
      }
      	else {
      		losses++;
      		console.log("round increased bc loss");
      		guessesLeft = 9;
      		compGuess = possGuesses[Math.floor(Math.random() * 26 + 1)]; // resets comp guess
      		yourGuesses.splice(0,10);
      	}
    }
}

// Function to write choices to the document.
function render() {
	document.getElementById("wins").innerText = wins;
	document.getElementById("loss").innerText = losses;
	document.getElementById("guessLeft").innerText = guessesLeft;
	document.getElementById("humanGuess").innerText = yourGuesses;
}

// Determines if the value has already been guessed, if not then pushes to the guessarray.
function guessArray(val1) {
	if (yourGuesses.includes(val1) === true) {
		alert("You've already guessed that one!");
		guessesLeft++;
	}

	else if (possGuesses.includes(val1) === true) {
		yourGuesses.push(val1);
	}
}