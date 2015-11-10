

// retrive json data and split by verses
$.getJSON( "/languages.json", function(json) {
    var trans1 = json[0].songs[0].translations[0].varbody;
    var split1 = trans1.split(",");
    console.log( split1 );
    var trans2 = json[0].songs[0].translations[1].varbody;
    var split2 = trans2.split(",");
    console.log( split2 );
    var trans3 = json[0].songs[0].translations[2].varbody;
    var split3 = trans3.split(",");
    console.log( split3 );

// click button #play and play verses and song at the same time
  // play verses below
	var songtext;

	$('#play').click(function() {
    var popcorn = Popcorn( "#audioplayer" );
    var popObj = [
      // mandarin
      {target: "footnote1", text: split1[0], start: 8.5, end: 12 },
      {target: "footnote1", text: split1[1], start: 12.5, end: 16 },
      {target: "footnote1", text: split1[2], start: 16.5, end: 20 },
      {target: "footnote1", text: split1[3], start: 20.5, end: 24 },
      // pinyin
      {target: "footnote2", text: split2[0], start: 8.5, end: 12 },
      {target: "footnote2", text: split2[1], start: 12.5, end: 16 },
      {target: "footnote2", text: split2[2], start: 16.5, end: 20 },
      {target: "footnote2", text: split2[3], start: 20.5, end: 24 },
      // english
      {target: "footnote3", text: split3[0], start: 8.5, end: 12 },
      {target: "footnote3", text: split3[1], start: 12.5, end: 16 },
      {target: "footnote3", text: split3[2], start: 16.5, end: 20 },
      {target: "footnote3", text: split3[3], start: 20.5, end: 24 },
    ];



  $.each(popObj, function(key, note) {
    popcorn.footnote({
      start: note.start,
      end: note.end,
      text: note.text,
      target: note.target
      // effect: "applyclass",
      // applyclass: "selected"
    });
  });



// play new colored texts below
$('.footnote').textillate({
    // minDisplayTime: 1000,
    in: { effect: 'flipInX' }
    // out :{  delay: 3, effect: 'lightSpeedOut'},
    // loop: true
});


  // play audio below
  var audioElement = document.getElementById("audioplayer");
    
    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
    $('#play').click(function() {
        audioElement.play();
    });

    // add stop button
    // add stop button
    // add stop button
    
    $('#pause').click(function() {
        audioElement.pause();
    });
	});



});