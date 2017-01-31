
document.getElementById("mssg").innerHTML = "hello";

// document.getElementById("gImage").innerHTML = ;

document.getElementById("dialog").innerHTML = "What is this?";

document.getElementById("counter").innerHTML = 0;

// document.getElementById("word").innerHTML = "_ ";

document.getElementById("life").innerHTML = 13;

// word bank used for the game
var wordBank = ["strike", "freedom",
"justice", "dominion"]





// selects word from word bank at random
var ranWord = wordBank[Math.floor(Math.random() * wordBank.length)];
document.getElementById("word").innerHTML = ranWord;

// provides keyboard input for the game
document.onkeyup = function(event) {
	// the key that is played
 	var guess = event.key;
 	// index value of the key played
	var indices = [];
	// the target word generated from a word bank array
	var target = document.getElementById("word").innerHTML;
 	 // the keys that where played
	var guessed = document.getElementById("log").innerHTML + guess;
	// the count down of guess left from 13
	var tries = document.getElementById("life").innerHTML - 1;
	// loops through the target word
	for (var i = 0; i < target.length; i++){
		if (target.charAt(i) == guess){
		indices.push(i);

		}

	}
	// writes to the html
	document.getElementById("log").innerHTML = guessed;	
	document.getElementById("life").innerHTML = tries;
		console.log(indices);
		console.log(target);
		console.log(target.length);
		console.log(guess);
}
