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
	}
};
document.getElementById("mssg").innerHTML = "hello";

// document.getElementById("gImage").innerHTML = ;

document.getElementById("dialog").innerHTML = "What is this?";

document.getElementById("counter").innerHTML = 0;

// document.getElementById("word").innerHTML = "_ ";

document.getElementById("life").innerHTML = 13;

hgn.wordGen();


document.onkeyup = function(event) {
 	var ek = event.key;
	hgn.gssd.push(ek);

	// loops through the target word
	for (var i = 0; i < hgn.tgt.length; i++){
		if (hgn.tgt.charAt(i) == ek){
		hgn.idxs.push(i);

		}

	}

	// writes to the html	
}
