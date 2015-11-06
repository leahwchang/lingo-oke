// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= popcorn-complete
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	$(".langname").click(function() {
	$(".songs").slideToggle( "slow" );
		});
});

// $.getJSON( "/languages.json", function(json) {
// 	var trans1 = json[0].songs[0].translations[0].varbody;
// 	var split1 = trans1.split(",");
//   console.log( split1 );
//   var trans2 = json[0].songs[0].translations[1].varbody;
// 	var split2 = trans2.split(",");
//   console.log( split2 );
//   var trans3 = json[0].songs[0].translations[2].varbody;
// 	var split3 = trans3.split(",");
//   console.log( split3 );
// });


// $(document).ready(function() {
// 		$.getJSON( "/languages.json", function(json) {
// 			var trans1 = json[0].songs[0].translations[0].varbody;
// 			var split1 = trans1.split(",");
// 		  console.log( split1 );
// 		  var trans2 = json[0].songs[0].translations[1].varbody;
// 			var split2 = trans2.split(",");
// 		  console.log( split2 );
// 		  var trans3 = json[0].songs[0].translations[2].varbody;
// 			var split3 = trans3.split(",");
// 		  console.log( split3 );

// 		  document.addEventListener( "DOMContentLoaded", function() {
// 			var popcorn = Popcorn( ".audioplayer" );
// 			popcorn.footnote({
// 			start: 8.5,
// 			end: 10,
// 			target: "footnote",
// 			text: trans1
// 			});
// 		}, false );
// 		});
// 	});

// obj = JSON.parse("/languages.json");
// document.getElementById(".footnote").innerHTML = obj.songs[0].translations[0].varbody;


// 	document.addEventListener( "DOMContentLoaded", function() {
// 		var popcorn = Popcorn( ".audioplayer" );
// 		popcorn.footnote({
// 		start: 8.5,
// 		end: 10,
// 		target: "#footnote",
// 		text: split1,
// 		});
// 	},
// 	false );
// });

// document.addEventListener( "DOMContentLoaded", function() {
// 				var popcorn = Popcorn( ".audioplayer" );
// 				// var translations = document.getElementById("translation_0").innerHTML;
// 				var obj = JSON.parse(myJSONObject);
// 				popcorn.footnote({
// 				start: 8.5,
// 				end: 10,
// 				target: "footnote",
// 				text: myJSONObject,
// 				});


