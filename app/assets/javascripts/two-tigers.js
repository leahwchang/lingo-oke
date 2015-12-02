// set global variable jsonLanguages
var jsonLanguages = {};

// ajax get json file
$.ajax({
	url: "/languages.json",
	async: false, // Loads data synchronously. Blocks the browser while the requests is active. It is better to block user interaction by other means when synchronization is necessary.
	dataType: 'json',
	success: function(data) {
		jsonLanguages = data;
	}
});

// two-tigers
var ttiger1 = jsonLanguages[0].songs[0].translations[0].varbody;
console.log(ttiger1);
var ttiger2 = jsonLanguages[0].songs[0].translations[1].varbody;
console.log(ttiger2);
var ttiger3 = jsonLanguages[0].songs[0].translations[2].varbody;
console.log(ttiger3);

// split translations below
var stiger1 = ttiger1.split(""); // mandarin
console.log(stiger1);
var stiger2 = ttiger2.split(" "); // pinyin
console.log(stiger2);
var stiger3 = ttiger3.split(" "); // english
console.log(stiger3);

// butterfly
var tbutterfly1 = jsonLanguages[0].songs[1].translations[0].varbody;
console.log(tbutterfly1);
var tbutterfly2 = jsonLanguages[0].songs[1].translations[1].varbody;
console.log(tbutterfly2);
var tbutterfly3 = jsonLanguages[0].songs[1].translations[2].varbody;
console.log(tbutterfly3);

// split translations below
var sbutterfly1 = tbutterfly1.split(""); // mandarin
console.log(sbutterfly1);
var sbutterfly2 = tbutterfly2.split(" "); // pinyin
console.log(sbutterfly2);
var sbutterfly3 = tbutterfly3.split(" "); // english
console.log(sbutterfly3);

// audio
var audio = document.getElementById("audioplayer");

function playAudio() {
  audioplayer.play();
}

function stopAudio() {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

// lyrics -two tigers- mandarin
function tigerMandarin() {
	var verse1;
  // [text, duration]
  // split verse and hardcode duration
  verse1 = [
    [[stiger1[0]], 390], [[stiger1[1]], 390], [[stiger1[2]], 390], [[stiger1[3]], 390], [[stiger1[4]], 100], [[stiger1[5]], 390], [[stiger1[6]], 390], [[stiger1[7]], 390], [[stiger1[8]], 390], [[stiger1[9]], 100], [[stiger1[10]], 400], [[stiger1[11]], 400], [[stiger1[12]], 800], [[stiger1[13]], 100], [[stiger1[14]], 400], [[stiger1[15]], 400], [[stiger1[16]], 800], [[stiger1[17]], 100], [[stiger1[18]], 200], [[stiger1[19]], 200], [[stiger1[20]], 200], [[stiger1[21]], 200], [[stiger1[22]], 400], [[stiger1[23]], 400], [[stiger1[24]], 100], [[stiger1[25]], 200], [[stiger1[26]], 200], [[stiger1[27]], 200], [[stiger1[28]], 200], [[stiger1[29]], 400], [[stiger1[30]], 400], [[stiger1[31]], 100], [[stiger1[32]], 400], [[stiger1[33]], 400], [[stiger1[34]], 800], [[stiger1[35]], 100], [[stiger1[36]], 400], [[stiger1[37]], 400], [[stiger1[38]], 800]
  ];

  // grab above split/timed verse and display each into its own span
  var text1="";
  $.each(verse1, function(a, b) {
    text1 += "<span id='p1"+a+"'>" + b[0] + "</span> ";
  }); 
  
  // write the span'd texts into designated div footnote1
  // and cue the nextMandarin() function
  $('#translation_1').html(text1);
  cc=0;
  nextTigerMandarin(); 

  // as the word count is going
  // add new word count 
  // style css color #FFA69E to each new split/timed span
  // colored word comes out one after the other
	var cc = 0;
	function nextTigerMandarin() {
    $('#p1'+cc).css("color", "#FFA69E");
    cc++;
    if(cc > verse1.length-1) return;
    window.setTimeout(nextTigerMandarin, verse1[cc-1][1]);
	}
}

// lyrics -two tigers- pinyin
function tigerPinYin() {
	var verse2;
  // [text, duration]
  // split verse and hardcode duration
  verse2 = [
    [[stiger2[0]], 400], [[stiger2[1]], 400], [[stiger2[2]], 400], [[stiger2[3]], 400], [[stiger2[4]], 100], [[stiger2[5]], 400], [[stiger2[6]], 400], [[stiger2[7]], 400], [[stiger2[8]], 400], [[stiger2[9]], 100], [[stiger2[10]], 400], [[stiger2[11]], 400], [[stiger2[12]], 800], [[stiger2[13]], 100], [[stiger2[14]], 400], [[stiger2[15]], 400], [[stiger2[16]], 800], [[stiger2[17]], 100], [[stiger2[18]], 200], [[stiger2[19]], 200], [[stiger2[20]], 200], [[stiger2[21]], 200], [[stiger2[22]], 400], [[stiger2[23]], 400], [[stiger2[24]], 100], [[stiger2[25]], 200], [[stiger2[26]], 200], [[stiger2[27]], 200], [[stiger2[28]], 200], [[stiger2[29]], 400], [[stiger2[30]], 400], [[stiger2[31]], 100], [[stiger2[32]], 400], [[stiger2[33]], 400], [[stiger2[34]], 800], [[stiger2[35]], 100], [[stiger2[36]], 400], [[stiger2[37]], 400], [[stiger2[38]], 800]
  ];

  // grab above split/timed verse and display each into its own span
  var text2="";
  $.each(verse2, function(a, b) {
    text2 += "<span id='p2"+a+"'>" + b[0] + "</span> ";
  });
  
  // write the span'd texts into designated div footnote2
  // and cue the nextMandarin() function
  $('#translation_2').html(text2);
  dd=0;
  nextTigerPinYin();

  // as the word count is going
  // add new word count 
  // style css color #FFA69E to each new split/timed span
  // colored word comes out one after the other
	var dd = 0;
	function nextTigerPinYin() {
    $('#p2'+dd).css("color", "#FFA69E");
    dd++;
    if(dd > verse2.length-1) return;
    window.setTimeout(nextTigerPinYin, verse2[dd-1][1]);
	}
}

// lyrics -two tigers- english
function tigerEnglish() {
	var verse3;
  // [text, duration]
  // split verse and hardcode duration
  verse3 = [
    [[stiger3[0]], 695], [[stiger3[1]], 695], [[stiger3[2]], 85], [[stiger3[3]], 695], [[stiger3[4]], 695], [[stiger3[5]], 85], [[stiger3[6]], 695], [[stiger3[7]], 700], [[stiger3[8]], 85], [[stiger3[9]], 695], [[stiger3[10]], 700], [[stiger3[11]], 90], [[stiger3[12]], 300], [[stiger3[13]], 300], [[stiger3[14]], 300], [[stiger3[15]], 300], [[stiger3[16]], 300], [[stiger3[17]], 650], [[stiger3[18]], 85], [[stiger3[19]], 200], [[stiger3[20]], 200], [[stiger3[21]], 200], [[stiger3[22]], 200], [[stiger3[23]], 200], [[stiger3[24]], 650], [[stiger3[25]], 85], [[stiger3[26]], 550], [[stiger3[27]], 800], [[stiger3[28]], 90], [[stiger3[29]], 550], [[stiger3[30]], 800]
  ];

  // grab above split/timed verse and display each into its own span
  var text3="";
  $.each(verse3, function(a, b) {
    text3 += "<span id='p3"+a+"'>" + b[0] + "</span> ";
  });
  
  // write the span'd texts into designated div footnote3
  // and cue the nextMandarin() function
  $('#translation_3').html(text3);
  ff=0;
  nextTigerEnglish();

  // as the word count is going
  // add new word count 
  // style css color #FFA69E to each new split/timed span
  // colored word comes out one after the other
	var ff = 0;
	function nextTigerEnglish() {
    $('#p3'+ff).css("color", "#FFA69E");
    ff++;
    if(ff > verse3.length-1) return;
    window.setTimeout(nextTigerEnglish, verse3[ff-1][1]);
	}
}

// lyrics -butterfly- mandarin
function butterflyMandarin() {
  var verse4;
  // [text, duration]
  // split verse and hardcode duration
  verse4 = [
    [[sbutterfly1[0]], 400], [[sbutterfly1[1]], 400], [[sbutterfly1[2]], 300], [[sbutterfly1[3]], 400], [[sbutterfly1[4]], 400], [[sbutterfly1[5]], 350], [[sbutterfly1[6]], 380], [[sbutterfly1[7]], 380], [[sbutterfly1[8]], 380], [[sbutterfly1[9]], 380], [[sbutterfly1[10]], 750], [[sbutterfly1[11]], 350], [[sbutterfly1[12]], 420], [[sbutterfly1[13]], 400], [[sbutterfly1[14]], 400], [[sbutterfly1[15]], 450], [[sbutterfly1[16]], 450], [[sbutterfly1[17]], 350], [[sbutterfly1[18]], 400], [[sbutterfly1[19]], 400], [[sbutterfly1[20]], 400], [[sbutterfly1[21]], 400], [[sbutterfly1[22]], 600], [[sbutterfly1[23]], 380], [[sbutterfly1[24]], 500], [[sbutterfly1[25]], 500], [[sbutterfly1[26]], 500], [[sbutterfly1[27]], 500], [[sbutterfly1[28]], 380], [[sbutterfly1[29]], 500], [[sbutterfly1[30]], 470], [[sbutterfly1[31]], 470], [[sbutterfly1[32]], 600], [[sbutterfly1[33]], 400], [[sbutterfly1[34]], 500], [[sbutterfly1[35]], 500], [[sbutterfly1[36]], 500], [[sbutterfly1[37]], 500], [[sbutterfly1[38]], 400], [[sbutterfly1[39]], 500], [[sbutterfly1[40]], 470], [[sbutterfly1[41]], 470], [[sbutterfly1[42]], 600]
  ];

  // grab above split/timed verse and display each into its own span
  var text4="";
  $.each(verse4, function(a, b) {
    text4 += "<span id='p4"+a+"'>" + b[0] + "</span> ";
  });
  
  // write the span'd texts into designated div footnote4
  // and cue the nextMandarin() function
  $('#translation_4').html(text4);
  cc=0;
  nextButterflyMandarin();

  // as the word count is going
  // add new word count 
  // add css style color #FFA69E to each new split/timed span
  // colored word comes out one after the other
  var cc = 0;
  function nextButterflyMandarin() {
    $('#p4'+cc).css("color", "#FFA69E");
    cc++;
    if(cc > verse4.length-1) return;
    window.setTimeout(nextButterflyMandarin, verse4[cc-1][1]);
  }
}

// lyrics -butterfly- pinyin
function butterflyPinYin() {
  var verse5;
  // split verse and hardcode duration
  // [text, duration]
  verse5 = [
    [[sbutterfly2[0]], 400], [[sbutterfly2[1]], 400], [[sbutterfly2[2]], 300], [[sbutterfly2[3]], 400], [[sbutterfly2[4]], 400], [[sbutterfly2[5]], 350], [[sbutterfly2[6]], 380], [[sbutterfly2[7]], 380], [[sbutterfly2[8]], 380], [[sbutterfly2[9]], 380], [[sbutterfly2[10]], 750], [[sbutterfly2[11]], 350], [[sbutterfly2[12]], 420], [[sbutterfly2[13]], 400], [[sbutterfly2[14]], 400], [[sbutterfly2[15]], 450], [[sbutterfly2[16]], 450], [[sbutterfly2[17]], 350], [[sbutterfly2[18]], 400], [[sbutterfly2[19]], 400], [[sbutterfly2[20]], 400], [[sbutterfly2[21]], 400], [[sbutterfly2[22]], 600], [[sbutterfly2[23]], 380], [[sbutterfly2[24]], 500], [[sbutterfly2[25]], 500], [[sbutterfly2[26]], 500], [[sbutterfly2[27]], 500], [[sbutterfly2[28]], 380], [[sbutterfly2[29]], 500], [[sbutterfly2[30]], 470], [[sbutterfly2[31]], 470], [[sbutterfly2[32]], 600], [[sbutterfly2[33]], 400], [[sbutterfly2[34]], 500], [[sbutterfly2[35]], 500], [[sbutterfly2[36]], 500], [[sbutterfly2[37]], 500], [[sbutterfly2[38]], 400], [[sbutterfly2[39]], 500], [[sbutterfly2[40]], 470], [[sbutterfly2[41]], 470], [[sbutterfly2[42]], 600]
  ];

  // grab above split/timed verse and display each into its own span
  var text5="";
  $.each(verse5, function(a, b) {
    text5 += "<span id='p5"+a+"'>" + b[0] + "</span> ";
  });
  
  // write the span'd texts into designated div footnote5
  // and cue the nextMandarin() function
  $('#translation_5').html(text5);
  dd=0;
  nextButterflyPinYin();

  // as the word count is going
  // add new word count 
  // add css style color #FFA69E to each new split/timed span
  // colored word comes out one after the other
  var dd = 0;
  function nextButterflyPinYin() {
    $('#p5'+dd).css("color", "#FFA69E");
    dd++;
    if(dd > verse5.length-1) return;
    window.setTimeout(nextButterflyPinYin, verse5[dd-1][1]);
  }
}

// lyrics -butterfly- english
function butterflyEnglish() {
  var verse6;
  // split verse and hardcode duration
  // [text, duration]
  verse6 = [
    [[sbutterfly3[0]], 760], [[sbutterfly3[1]], 300], [[sbutterfly3[2]], 760], [[sbutterfly3[3]], 350], [[sbutterfly3[4]], 400], [[sbutterfly3[5]], 390], [[sbutterfly3[6]], 390], [[sbutterfly3[7]], 770], [[sbutterfly3[8]], 380], [[sbutterfly3[9]], 600], [[sbutterfly3[10]], 500], [[sbutterfly3[11]], 500], [[sbutterfly3[12]], 500], [[sbutterfly3[13]], 380], [[sbutterfly3[14]], 600], [[sbutterfly3[15]], 600], [[sbutterfly3[16]], 800], [[sbutterfly3[17]], 400], [[sbutterfly3[18]], 550], [[sbutterfly3[19]], 550], [[sbutterfly3[20]], 600], [[sbutterfly3[21]], 600], [[sbutterfly3[22]], 550], [[sbutterfly3[23]], 500], [[sbutterfly3[24]], 500], [[sbutterfly3[25]], 650], [[sbutterfly3[26]], 380], [[sbutterfly3[27]], 520], [[sbutterfly3[28]], 520], [[sbutterfly3[29]], 690], [[sbutterfly3[30]], 500], [[sbutterfly3[31]], 550], [[sbutterfly3[32]], 500], [[sbutterfly3[33]], 500], [[sbutterfly3[34]], 800]
  ];

  // grab above split/timed verse and display each into its own span
  var text6="";
  $.each(verse6, function(a, b) {
    text6 += "<span id='p6"+a+"'>" + b[0] + "</span> ";
  });
    
  // write the span'd texts into designated div footnote6
  // and cue the nextMandarin() function
  $('#translation_6').html(text6);
  ff=0;
  nextButterflyEnglish();

  // as the word count is going
  // add new word count 
  // add css style color #FFA69E to each new split/timed span
  // colored word comes out one after the other
  var ff = 0;
  function nextButterflyEnglish() {
    $('#p6'+ff).css("color", "#FFA69E");
    ff++;
    if(ff > verse6.length-1) return;
    window.setTimeout(nextButterflyEnglish, verse6[ff-1][1]);
  }
}

// lyrics - play all
var l1;
var l2;
var l3;

// delay the karaoke texts by close to 8 seconds
function playTigerLyrics() {
  l1 = setTimeout(tigerMandarin, 7750);
  l2 = setTimeout(tigerPinYin, 7750);
  l3 = setTimeout(tigerEnglish, 7750);
}

// delay the karaoke texts by close to 8 seconds
function playButterflyLyrics() {
  l1 = setTimeout(butterflyMandarin, 9750);
  l2 = setTimeout(butterflyPinYin, 9750);
  l3 = setTimeout(butterflyEnglish, 9750);
}

// images - animations
function playPictures() {
  // animate clouds left for 10px for 1 second
  // then animate right for 10px for 1 second
  $('#image_1').stop(true, true).animate({ left: '-10px' }, 1000, function() {
    $('#image_1').stop(true, true).animate({ left: '20px' }, 1000);
  });
  // animate tigers top for 10px for 1 second
  // animate tigers down for 20px for 1 second
  $('#image_2').stop(true, true).animate({ top: '10px' }, 1000, function() {
    $('#image_2').stop(true, true).animate({ top: '-10px' }, 1000 );
  });
}

var myVar = setInterval(playPictures, 2000); // set to run continuously

function playAnimations() {
	playPictures();
}

function stopAnimations() {
  clearInterval(myVar);
}

// play all components
function playAll() {
	playAudio();
	playTigerLyrics();
  playButterflyLyrics();
	playAnimations();
}

// stop all components
function stopAll() {
	stopAudio();
	stopAnimations();
}
