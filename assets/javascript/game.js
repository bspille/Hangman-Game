hangman = {
	cntDwn: [],
	cntup: [0],
	correct: "",
	gessd: "",
	trgt: "",
	display: "",
	wdBnk: ["Strike", "Freedom", "Justice", "Dominion"],
	gallows: ["gallows8.gif", "gallows7.gif", "gallows6.gif", "gallows5.gif", "gallows4.gif", "gallows3.gif", "gallows2.gif", "gallows1.gif"],

	wordGen: function()	{
			// random generation of a word frome a word bank and stores is in tgt
			this.trgt = this.wdBnk[Math.floor(Math.random() * this.wdBnk.length)];
			// checks for all letters and generates a array record
			var re = new RegExp(/[a-z]/, "ig");
			// replaces all characters in the tgt with _
			this.display = this.trgt.replace(re, "_");
			this.cntDwn = 7;
			this.gessd = "";
			this.correct = "";
			
			// writes the initial display
			document.getElementById("log").innerHTML = this.gessd;
			document.getElementById("word").innerHTML = this.display;
			document.getElementById("life").innerHTML = this.cntDwn;
			document.getElementById("counter").innerHTML = this.cntup;
			document.getElementById("mssg").innerHTML = "click play to start a new round";
			document.getElementById("gImage").src = "assets/images/" + this.gallows[7];
	},

	srchTrgt: function(k) {
		console.log(k);
		// passes the event.key as a parameter k to the regexp \event.key value\g
		var re = new RegExp(k, "ig");
		// do this function while condition is true
		console.log("test_1" + this.cntDwn)
		if (this.cntDwn > 0) {
			// no repeat condition
			var noRpt = this.gessd.match(re);
			console.log(noRpt);
			if ( noRpt == null) {
				this.gessd = this.gessd + k;
				console.log(this.gessd);
				// writes the guesses to a log area on the html
				document.getElementById("log").innerHTML = this.gessd;
				// applies the regexp to the tgt string
			
				var find = this.trgt.match(re);
				console.log(find);
				//filters out null outputs
				if (find != null) {
					this.correct = this.correct + k;
					console.log(this.correct);
				}
				else { // decrements the counter of turns for a failed guess
					this.cntDwn--;
					document.getElementById("gImage").src = "assets/images/" + this.gallows[this.cntDwn];
					console.log(this.cntDwn);
					document.getElementById("life").innerHTML = this.cntDwn;
				}
			}
		}
	},

	compare: function() {
		// creates a regexp  var that excludes characters form the crt array
		var c = "[^" + this.correct + "]"
		// constructs the regexp with runtime that results \[^the characters from the crt array]\g;
		var re = new RegExp(c, "ig");
		// rewrites the display string to only replace characters that have not been found
		this.display = this.trgt.replace(re, "_");
		// rewrites to the html
		document.getElementById("word").innerHTML = this.display;
	}

	// need fun text
	// need a picture changer
};
hangman.wordGen()
$("#play").on("click", function() {
	hangman.wordGen()
});




document.onkeyup = function(event) {
	if ((hangman.cntDwn > 0) || (hangman.display != hangman.trgt)) {
 		var ek = event.key;
 		var kc = event.keyCode;
 		console.log(event.key);
 		// call test function from object and pass event key as a parameter
 		hangman.srchTrgt(event.key);
 		hangman.compare();
 		if (hangman.display == hangman.trgt){
 			hangman.cntup++;
 			document.getElementById("counter").innerHTML = hangman.cntup;
 			document.getElementById("mssg").innerHTML = "YOU WIN!";
 		}

 		if (hangman.cntDwn == 0) {
 			document.getElementById("mssg").innerHTML = "YOU LOSE!";
 		}
 	}
 	// logged 65 - 90 for alpha keycodes
}
