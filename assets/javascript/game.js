
document.getElementById("mssg").innerHTML = "hello";

// document.getElementById("gImage").innerHTML = ;

document.getElementById("dialog").innerHTML = "What is this?";

document.getElementById("counter").innerHTML = 0;

document.getElementById("word").innerHTML = "_ ";

document.getElementById("life").innerHTML = 13;

// document.getElementById("log").innerHTML = "A B C";


document.onkeyup = function(event) {
 	var guess = event.key;
	var guessed = document.getElementById("log").innerHTML + guess;
	document.getElementById("log").innerHTML = guessed;
}

