// the object where many of the arrays and functions are stored
hangman = {
	
	// location where guesses are displayed
	logDisplay: document.getElementById("log"),
	
	// location where the target word is displayed
	wdDisplay: document.getElementById("word"),
	
	// location that counts the number of guesses left
	gessRmDisplay: document.getElementById("life"),
	
	// location where messages are passed
	mssgDisplay: document.getElementById("mssg"),
	
	// location where the number of wins are displayed
	winDisplay: document.getElementById("counter"),
	
	// location where game dialog is displayed
	dialogDisplay: document.getElementById("dialog"),
	
	// location where images are displayed
	imageDisplay: document.getElementById("gImage"),
	
	//number of guesses left
	cntDwn: [],
	
	// number of wins
	cntup: [0],
	
	// correct guesses
	correct: "",
	
	// all guesses
	gessd: "",
	
	// the target word
	trgt: "",
	
	// the displayed word results
	display: "",
	
	// the word bank array
	wdBnk: ["Strike", "Freedom", "Justice",
		 	"Dominion", "General", "Unilateral",
		  	"Launch", "earth", "federation"
		  	],
	
	// the gallows image array		  	
	gallows: ["gallows8.gif", "gallows7.gif",
			 "gallows6.gif", "gallows5.gif", 
			 "gallows4.gif", "gallows3.gif", 
			 "gallows2.gif", "gallows1.gif"
			 ],

	// generates starting values
	wordGen: function()	{
			// checks for all letters and generates a array record
			var re = new RegExp(/[a-z]/, "ig");
			// random generation of a word frome a word bank and stores is in tgt
			this.trgt = this.wdBnk[Math.floor(Math.random() * this.wdBnk.length)];
			// starting values
			this.display = this.trgt.replace(re, "_");
			this.cntDwn = 7;
			this.gessd = "";
			this.correct = "";
			this.logDisplay.innerHTML = this.gessd;
			this.wdDisplay.innerHTML = this.display;
			this.gessRmDisplay.innerHTML = this.cntDwn;
			this.winDisplay.innerHTML = this.cntup;
			this.dialogDisplay.innerHTML = "Try to escape this noose"
			this.mssgDisplay.innerHTML = "click play to start a new round";
			this.imageDisplay.src = "assets/images/" + this.gallows[7];
	},

	// searches the target word for the key input
	srchTrgt: function(k) {
		// passes the event.key as a parameter k to the regexp \event.key value\g
		var re = new RegExp(k, "ig");
		// do this function while condition is true
		if (this.cntDwn > 0) {
			// no repeat condition
			var noRpt = this.gessd.match(re);
			if ( noRpt == null) {
				this.gessd = this.gessd + k;
				// writes the guesses to a log area on the html
				this.logDisplay.innerHTML = this.gessd;
				// applies the regexp to the tgt string
			
				var find = this.trgt.match(re);
				//filters out null outputs
				if (find != null) {
					this.correct = this.correct + k;
				}
				else { 
					// 
					this.cntDwn--;
					this.imageDisplay.src = "assets/images/" + this.gallows[this.cntDwn];
					this.winDisplay.innerHTML = this.cntDwn;
				}
			}
		}
	},

	// rewrites the display after compairing the display with all the correct guesses recorded
	compare: function() {
		// creates a regexp  var that excludes characters form the crt array
		var c = "[^" + this.correct + "]"
		// constructs the regexp with runtime that results \[^the characters from the crt array]\g;
		var re = new RegExp(c, "ig");
		// rewrites the display string to only replace characters that have not been found
		this.display = this.trgt.replace(re, "_");
		// rewrites to the html
		this.wdDisplay.innerHTML = this.display;
	},

	// sets win and lose conditions
	condCheck: function() {
 		if (hangman.display == hangman.trgt){
 			hangman.cntup++;
 			this.winDisplay.innerHTML = hangman.cntup;
 			this.dialogDisplay.innerHTML = "YOU WIN!";
 		}

 		if (hangman.cntDwn == 0) {
 			this.dialogDisplay.innerHTML = "YOU LOSE!";
 		}
	}

};


// initialize and regenerate the target word
hangman.wordGen()
$("#play").on("click", function() {
	hangman.wordGen()
});

// displays the answer
$("#show").on("click", function() {
	hangman.cntDwn = 0;
	hangman.mssgDisplay.innerHTML = "Answer: " + hangman.trgt;
});

// the main function used to manage the game
document.onkeyup = function(event) {
	 	var ek = event.key;
 		var kc = event.keyCode;
 		// limits the keys to alpha keys with some exceptions
 		var re = /[a-z]/ig;
 		// checks for banned keys by key code not filtered earlier
 		var bandKeys = [9, 13, 16, 17, 20, 27, 32, 33, 34, 37, 38, 39, 40, 44 ]
 		var c = new RegExp(kc, "gm")
 		var a = c.test(bandKeys)

 	// validates inputs and sets lock down conditions	
	if (((hangman.cntDwn > 0) || (hangman.display != hangman.trgt))
		&& (re.test(ek) == true) && (a != true)) {
 		// call test function from object and pass event key as a parameter
 		hangman.srchTrgt(ek);
 		hangman.compare();
 		hangman.condCheck();

 	}
}
