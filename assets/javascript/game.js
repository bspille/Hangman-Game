hgn = {
	idxs: [],
	wdBnk: ["Strike", "Freedom", "Justice", "Dominion"],
	gssd: [],
	tgt: "",
	display: "",

	wordGen: function()	{
			// random generation of a word frome a word bank and stores is in tgt
			this.tgt = hgn.wdBnk[Math.floor(Math.random() * hgn.wdBnk.length)];
			// checks for all letters and generates a array record
			var re = new RegExp(/[a-z A-Z]/, "g");
			// replaces all characters in the tgt with _
			this.display = this.tgt.replace(re, "_");
			// writes the initial display
			document.getElementById("word").innerHTML = this.display;
	},

	srchTgt: function(k){
		var re = new RegExp(k, "g");
		var chk = this.tgt.search(re);
		this.idxs.push(chk);
	}
	// need fun text
	// need a picture changer
	// need a turn counter
	// need a function to replace underscores
	// need a function to advance the game
};
document.getElementById("mssg").innerHTML = "hello";

// document.getElementById("gImage").innerHTML = ;

document.getElementById("dialog").innerHTML = "What is this?";

document.getElementById("counter").innerHTML = 0;

document.getElementById("life").innerHTML = 13;

hgn.wordGen();


document.onkeyup = function(event) {
 	var ek = event.key;
 	var kc = event.keyCode;
 	// call test function from object and pass event key as a parameter
 	hgn.test(event.key);

 	// logged 65 - 90 for alpha keycodes

 	for (i = -1; i < hgn.gssd.length; i++) {
 		if (hgn.gssd.indexOf(ek) != -1) {
 			break;
 		}			
		else { hgn.gssd.push(ek);
			// loops through the target word | try to build a regular expression to perform this task
			for (var i = 0; i < hgn.tgt.length; i++) {
				if (hgn.tgt.charAt(i) === ek) {
					hgn.idxs.push(i);
				}
			}
		}
	}
}
