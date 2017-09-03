var possGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
	"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0
var losses = 0
var guessesLeft = 9
var compGuess = possGuesses[Math.floor(Math.random() * 26 + 1)]
console.log(compGuess);
var yourGuesses = [];

// What if I put the if/else statement outside of this function, so if gl > 0, run this, else loss++
document.onkeyup = function(event) {
    var yourChoice = event.key;
    console.log(yourChoice); //works to log the key pressed to console! 

    guessArray(yourChoice);

    if (guessesLeft >= 1) {
    	var compChoice = compGuess;
    	console.log(compChoice);
    	compare(yourChoice, compChoice);
    }

    else {
    	getCompGuess();
    	console.log("I get here");
    }
   	
   	render();
};

//Compare function
function compare(val1, val2) {
	if (val1 === val2) {
      	wins++; 
      	guessesLeft = 9;
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
      		guessesLeft = 9;
      		yourGuesses.splice(0,10);
      	}
    }
}

function render() {
	document.getElementById("wins").innerText = wins;
	document.getElementById("loss").innerText = losses;
	document.getElementById("guessLeft").innerText = guessesLeft;
	document.getElementById("humanGuess").innerText = yourGuesses;
}

function guessArray(val1) {
	yourGuesses.push(val1);
}

// function getCompGuess() {
// 	value = possGuesses[Math.floor(Math.random() * 26 + 1)];
// 	compGuess.push(value);
// }

//this works to reduce guessesLeft from 9 to 0! woo
// for (var i = guessesLeft; i > 0; i--) { 
  	// if (possGuesses === compGuess) {
   //    	wins++;
   //    	console.log("oops");
   //  }
   //  else {
   //    	guessesLeft--;
   //    	console.log("I get here");
   //    	console.log(guessesLeft);
   //    	}
    // }
      
// Need a way/function to write the results to the html file.
// Need a way to alert if choice is invalid. if yourChoice = (possGuesses.indexOf[yourChoice] < 0), alert?