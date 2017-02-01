hgn = {
	idxs: [],
	wdBnk: ["strike", "freedom", "justice", "dominion"],
	gssd: [],
	tgt: "",
	// trn: document.getElementById("life").innerHTML - 1;,
	wordGen: function()	{
			var tgtWd = hgn.wdBnk[Math.floor(Math.random() * hgn.wdBnk.length)];
			document.getElementById("word").innerHTML = tgtWd;
			hgn.tgt = tgtWd;
	},
	// uses k as a parameter name to pass to the regexp ???
	test: function(k){
		var re = new RegExp(k, "g");
		var chk = this.tgt.match(re);
		console.log(chk);
	}
	// need a function to print underscores
	// need a function to replace underscores with characters
	// need a advance to the next word function
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
