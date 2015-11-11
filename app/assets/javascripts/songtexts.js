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

// split translations below
var split1 = trans1.split(""); // mandarin
var split2 = trans2.split(" "); // pinyin
var split3 = trans3.split(" "); // english

// double check
console.log(split1);
console.log(split2);
console.log(split3);

// audio 
var audio = document.getElementById("audioplayer");

function playAudio() {
  audioplayer.play();
}

function pauseAudio() {
  audioplayer.pause();
}

// play mandarin translation lyrics below

function playMandarin() {
	var verse1;
  verse1 = [ // [text, duration]
    [[split1[0]], 400], [[split1[1]], 400], [[split1[2]], 400], [[split1[3]], 400], [[split1[4]], 100], [[split1[5]], 400], [[split1[6]], 400], [[split1[7]], 400], [[split1[8]], 400], [[split1[9]], 100], [[split1[10]], 400], [[split1[11]], 400], [[split1[12]], 800], [[split1[13]], 100], [[split1[14]], 400], [[split1[15]], 400], [[split1[16]], 800], [[split1[17]], 100], [[split1[18]], 200], [[split1[19]], 200], [[split1[20]], 200], [[split1[21]], 200], [[split1[22]], 400], [[split1[23]], 400], [[split1[24]], 100], [[split1[25]], 200], [[split1[26]], 200], [[split1[27]], 200], [[split1[28]], 200], [[split1[29]], 400], [[split1[30]], 400], [[split1[31]], 100], [[split1[32]], 400], [[split1[33]], 400], [[split1[34]], 800], [[split1[35]], 100], [[split1[36]], 400], [[split1[37]], 400], [[split1[38]], 800]
  ];

  var text1="";
  $.each(verse1, function(a, b) {
    text1 += "<span id='p1"+a+"'>" + b[0] + "</span> ";
  });
  
  $('#footnote1').html(text1);
  cc=0;
  nextMandarin();

	var cc = 0;
	function nextMandarin() {
    $('#p1'+cc).css("color", "blue");
    cc++;
    if(cc > verse1.length-1) return;
    window.setTimeout(nextMandarin, verse1[cc-1][1]);
	}
}

// play pinyin translation lyrics below

function playPinYin() {
	var verse2;
  verse2 = [ // [text, duration]
    [[split2[0]], 400], [[split2[1]], 400], [[split2[2]], 400], [[split2[3]], 400], [[split2[4]], 100], [[split2[5]], 400], [[split2[6]], 400], [[split2[7]], 400], [[split2[8]], 400], [[split2[9]], 100], [[split2[10]], 400], [[split2[11]], 400], [[split2[12]], 800], [[split2[13]], 100], [[split2[14]], 400], [[split2[15]], 400], [[split2[16]], 800], [[split2[17]], 100], [[split2[18]], 200], [[split2[19]], 200], [[split2[20]], 200], [[split2[21]], 200], [[split2[22]], 400], [[split2[23]], 400], [[split2[24]], 100], [[split2[25]], 200], [[split2[26]], 200], [[split2[27]], 200], [[split2[28]], 200], [[split2[29]], 400], [[split2[30]], 400], [[split2[31]], 100], [[split2[32]], 400], [[split2[33]], 400], [[split2[34]], 800], [[split2[35]], 100], [[split2[36]], 400], [[split2[37]], 400], [[split2[38]], 800]
  ];

  var text2="";
  $.each(verse2, function(a, b) {
    text2 += "<span id='p2"+a+"'>" + b[0] + "</span> ";
  });
  
  $('#footnote2').html(text2);
  dd=0;
  nextPinYin();

	var dd = 0;
	function nextPinYin() {
    $('#p2'+dd).css("color", "blue");
    dd++;
    if(dd > verse2.length-1) return;
    window.setTimeout(nextPinYin, verse2[dd-1][1]);
	}
}

// play english translation lyrics below

function playEnglish() {
	var verse3;
  verse3 = [ // [text, duration]
    [[split3[0]], 695], [[split3[1]], 695], [[split3[2]], 85], [[split3[3]], 695], [[split3[4]], 695], [[split3[5]], 85], [[split3[6]], 695], [[split3[7]], 700], [[split3[8]], 85], [[split3[9]], 695], [[split3[10]], 700], [[split3[11]], 90], [[split3[12]], 300], [[split3[13]], 300], [[split3[14]], 300], [[split3[15]], 300], [[split3[16]], 300], [[split3[17]], 650], [[split3[18]], 85], [[split3[19]], 200], [[split3[20]], 200], [[split3[21]], 200], [[split3[22]], 200], [[split3[23]], 200], [[split3[24]], 650], [[split3[25]], 85], [[split3[26]], 550], [[split3[27]], 800], [[split3[28]], 90], [[split3[29]], 550], [[split3[30]], 800]
  ];

  var text3="";
  $.each(verse3, function(a, b) {
    text3 += "<span id='p3"+a+"'>" + b[0] + "</span> ";
  });
    
  $('#footnote3').html(text3);
  ff=0;
  nextEnglish();

	var ff = 0;
	function nextEnglish() {
    $('#p3'+ff).css("color", "blue");
    ff++;
    if(ff > verse3.length-1) return;
    window.setTimeout(nextEnglish, verse3[ff-1][1]);
	}
}

// play all translation lyrics at the same time below

var myVar1;
var myVar2;
var myVar3;

function playLyrics() {
  myVar1 = setTimeout(playMandarin, 7750);
  myVar2 = setTimeout(playPinYin, 7750);
  myVar3 = setTimeout(playEnglish, 7750);
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