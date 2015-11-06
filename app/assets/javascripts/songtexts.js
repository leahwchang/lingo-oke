document.addEventListener( "DOMContentLoaded", function() {
	$.getJSON( "/languages.json", function(json) {
		var trans1 = json[0].songs[0].translations[0].varbody;
		var split1 = trans1.split(",");
	  // console.log( split1 );
	  var trans2 = json[0].songs[0].translations[1].varbody;
		var split2 = trans2.split(",");
	  // console.log( split2 );
	  var trans3 = json[0].songs[0].translations[2].varbody;
		var split3 = trans3.split(",");
	  // console.log( split3 );
		var popcorn = Popcorn( ".audioplayer" );

		// FUTURE: looping through the start and end time, and concatenate the target div and text index 
		// loop through the texts to get highlighted effect

		popcorn.footnote({
		start: 8.5,
		end: 10,
		target: "footnote1",
		text: split1[0]
		});
		popcorn.footnote({
		start: 10.5,
		end: 12,
		target: "footnote1",
		text: split1[1]
		});
		popcorn.footnote({
		start: 12.5,
		end: 14,
		target: "footnote1",
		text: split1[2]
		});
		popcorn.footnote({
		start: 14.5,
		end: 16,
		target: "footnote1",
		text: split1[3]
		});
		popcorn.footnote({
		start: 16.5,
		end: 18,
		target: "footnote1",
		text: split1[4]
		});
		popcorn.footnote({
		start: 18.5,
		end: 20,
		target: "footnote1",
		text: split1[5]
		});
		popcorn.footnote({
		start: 20.5,
		end: 22,
		target: "footnote1",
		text: split1[6]
		});
		popcorn.footnote({
		start: 22.5,
		end: 24,
		target: "footnote1",
		text: split1[7]
		});
		popcorn.footnote({
		start: 8.5,
		end: 10,
		target: "footnote2",
		text: split2[0]
		});
		popcorn.footnote({
		start: 10.5,
		end: 12,
		target: "footnote2",
		text: split2[1]
		});
		popcorn.footnote({
		start: 12.5,
		end: 14,
		target: "footnote2",
		text: split2[2]
		});
		popcorn.footnote({
		start: 14.5,
		end: 16,
		target: "footnote2",
		text: split2[3]
		});
		popcorn.footnote({
		start: 16.5,
		end: 18,
		target: "footnote2",
		text: split2[4]
		});
		popcorn.footnote({
		start: 18.5,
		end: 20,
		target: "footnote2",
		text: split2[5]
		});
		popcorn.footnote({
		start: 20.5,
		end: 22,
		target: "footnote2",
		text: split2[6]
		});
		popcorn.footnote({
		start: 22.5,
		end: 24,
		target: "footnote2",
		text: split2[7]
		});
		popcorn.footnote({
		start: 8.5,
		end: 10,
		target: "footnote3",
		text: split3[0]
		});
		popcorn.footnote({
		start: 10.5,
		end: 12,
		target: "footnote3",
		text: split3[1]
		});
		popcorn.footnote({
		start: 12.5,
		end: 14,
		target: "footnote3",
		text: split3[2]
		});
		popcorn.footnote({
		start: 14.5,
		end: 16,
		target: "footnote3",
		text: split3[3]
		});
		popcorn.footnote({
		start: 16.5,
		end: 18,
		target: "footnote3",
		text: split3[4]
		});
		popcorn.footnote({
		start: 18.5,
		end: 20,
		target: "footnote3",
		text: split3[5]
		});
		popcorn.footnote({
		start: 20.5,
		end: 22,
		target: "footnote3",
		text: split3[6]
		});
		popcorn.footnote({
		start: 22.5,
		end: 24,
		target: "footnote3",
		text: split3[7]
		});
	}, false );
});