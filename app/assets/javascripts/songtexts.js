// set global variable jsonLanguages
var jsonLanguages = {};

// ajax get json file
$.ajax({
	url: "/languages.json",
	async: false, //Loads data synchronously. Blocks the browser while the requests is active. It is better to block user interaction by other means when synchronization is necessary.
	dataType: 'json',
	success: function(data) {
		jsonLanguages = data;
	}
});

var trans1 = jsonLanguages[0].songs[0].translations[0].varbody;
var trans2 = jsonLanguages[0].songs[0].translations[1].varbody;
var trans3 = jsonLanguages[0].songs[0].translations[2].varbody;

// self-check json ajax request
console.log(trans1); // mandarin-two tigers-mandarin
console.log(trans2); // mandarin-two tigers-pinyin
console.log(trans3); // mandarin-two tigers-english

// audio 
var audio = document.getElementById("audioplayer");

function playAudio() {
  audioplayer.play();
}

function pauseAudio() {
  audioplayer.pause();
}

var split1 = trans1.split("");
var split2 = trans2.split(" ");
var split3 = trans3.split(" ");

console.log(split1);
console.log(split2);
console.log(split3);

function playMandarin() {
	var verse1;
  verse1 = [ // [text, duration]
    [[split1[0]], 500], [[split1[1]], 500], [[split1[2]], 500], [[split1[3]], 500], [[split1[4]], 120], [[split1[5]], 500], [[split1[6]], 500], [[split1[7]], 500], [[split1[8]], 500], [[split1[9]], 120], [[split1[10]], 500], [[split1[11]], 500], [[split1[12]], 1000], [[split1[13]], 120], [[split1[14]], 500], [[split1[15]], 500], [[split1[16]], 1000], [[split1[17]], 120], [[split1[18]], 200], [[split1[19]], 200], [[split1[20]], 200], [[split1[21]], 200], [[split1[22]], 500], [[split1[23]], 500], [[split1[24]], 120], [[split1[25]], 200], [[split1[26]], 200], [[split1[27]], 200], [[split1[28]], 200], [[split1[29]], 500], [[split1[30]], 500], [[split1[31]], 100], [[split1[32]], 500], [[split1[33]], 500], [[split1[34]], 1000], [[split1[35]], 100], [[split1[36]], 500], [[split1[37]], 500], [[split1[38]], 1000]
  ];

  var text1="";
  $.each(verse1, function(a, b) {
    text1 += "<span id='p1"+a+"' style='color:blue'>" + b[0] + "</span> ";
  });
  
  $('#footnote1').html(text1);
  cc=0;
  nextMandarin();

	var cc = 0;
	function nextMandarin() {
    $('#p1'+cc).css("color", "red");
    cc++;
    if(cc > verse1.length-1) return;
    window.setTimeout(nextMandarin, verse1[cc-1][1]);
	}
}

function playPinYin() {
	var verse2;
  verse2 = [ // [text, duration]
    [[split2[0]], 500], [[split2[1]], 500], [[split2[2]], 500], [[split2[3]], 500], [[split2[4]], 120], [[split2[5]], 500], [[split2[6]], 500], [[split2[7]], 500], [[split2[8]], 500], [[split2[9]], 120], [[split2[10]], 500], [[split2[11]], 500], [[split2[12]], 1000], [[split2[13]], 120], [[split2[14]], 500], [[split2[15]], 500], [[split2[16]], 1000], [[split2[17]], 120], [[split2[18]], 200], [[split2[19]], 200], [[split2[20]], 200], [[split2[21]], 200], [[split2[22]], 500], [[split2[23]], 500], [[split2[24]], 120], [[split2[25]], 200], [[split2[26]], 200], [[split2[27]], 200], [[split2[28]], 200], [[split2[29]], 500], [[split2[30]], 500], [[split2[31]], 100], [[split2[32]], 500], [[split2[33]], 500], [[split2[34]], 1000], [[split2[35]], 100], [[split2[36]], 500], [[split2[37]], 500], [[split2[38]], 1000]
  ];

  var text2="";
  $.each(verse2, function(a, b) {
    text2 += "<span id='p2"+a+"' style='color:blue'>" + b[0] + "</span> ";
  });
  
  $('#footnote2').html(text2);
  dd=0;
  nextPinYin();

	var dd = 0;
	function nextPinYin() {
    $('#p2'+dd).css("color", "red");
    dd++;
    if(dd > verse2.length-1) return;
    window.setTimeout(nextPinYin, verse2[dd-1][1]);
	}
}

function playEnglish() {
	var verse3;
  verse3 = [ // [text, duration]
    [[split3[0]], 900], [[split3[1]], 900], [[split3[2]], 100], [[split3[3]], 900], [[split3[4]], 900], [[split3[5]], 100], [[split3[6]], 900], [[split3[7]], 900], [[split3[8]], 100], [[split3[9]], 900], [[split3[10]], 900], [[split3[11]], 100], [[split3[12]], 200], [[split3[13]], 200], [[split3[14]], 200], [[split3[15]], 200], [[split3[16]], 200], [[split3[17]], 900], [[split3[18]], 100], [[split3[19]], 200], [[split3[20]], 200], [[split3[21]], 200], [[split3[22]], 200], [[split3[23]], 200], [[split3[24]], 900], [[split3[25]], 100], [[split3[26]], 800], [[split3[27]], 1000], [[split3[28]], 100], [[split3[29]], 800], [[split3[30]], 1000]
  ];

  var text3="";
  $.each(verse3, function(a, b) {
    text3 += "<span id='p3"+a+"' style='color:blue'>" + b[0] + "</span> ";
  });
    
  $('#footnote3').html(text3);
  ff=0;
  nextEnglish();

	var ff = 0;
	function nextEnglish() {
    $('#p3'+ff).css("color", "red");
    ff++;
    if(ff > verse3.length-1) return;
    window.setTimeout(nextEnglish, verse3[ff-1][1]);
	}
}

var myVar1;
var myVar2;
var myVar3;

function playLyrics() {
  myVar1 = setTimeout(playMandarin, 7950);
  myVar2 = setTimeout(playPinYin, 7950);
  myVar3 = setTimeout(playEnglish, 7950);
}
// function playImages( ) {

// }

// function playAll( ) {
// 	playSong( );
// 	playLyrics( );
// 	playImages( );
// }


// function pauseAll( ) {

// } 