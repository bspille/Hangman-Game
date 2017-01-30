
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
 	var guess = event.key;
	var guessed = document.getElementById("log").innerHTML + guess;
	var tries = document.getElementById("life").innerHTML - 1;
	var hidWord = document.getElementById("word").innerHTML;
	var char = hidWord.search(/guess/g)
	document.getElementById("dialog").innerHTML = char;
	document.getElementById("log").innerHTML = guessed;	
	document.getElementById("life").innerHTML = tries;
}

