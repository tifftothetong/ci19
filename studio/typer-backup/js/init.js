$(document).ready(function(){
  var entryCount = 0;
  var displayCount = 0;

  //capture key presses
  $(document).on("keypress",function(e){
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + ":" + e.which + "|"+ char + ". Showing " + displayCount);
    createElement(char);

  });

  function deleteElement() {
    $(".inner").last().remove();
  }

  //capture function keys 
  $(document).on("keydown", function(e){
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount++;
      displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + ":" + e.which + "| BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

$("body").keypress(function(){
  $("p").hide();
});


function createElement(k) {

  var body = $('body');

      // get the old images
  var allImages = document.querySelectorAll("img");
  // var firstImage = allImages[0]

  var lastImage = allImages[allImages.length - 1];
  if (lastImage) {

    // append a class to this last image list
    lastImage.className = "skew";
  }
  console.log(allImages);

//all image keys are below 

  if (k == "a" || k == "A") { 
    elem.before('<span class="inner"><img src="typer2.png"></span>'); 
  }
  if (k == "b" || k == "B") { 
    elem.before('<span class="inner"><img src="typer1.png"></span>'); 
  }
  if (k == "c" || k == "C") { 
    elem.before('<span class="inner"><img src="typer3.png"></span>'); }
  if (k == "d" || k == "D") { 
    elem.before('<span class="inner"><img src="typer4.png"></span>'); 
  }
  if (k == "e" || k == "E") { 
    elem.before('<span class="inner"><img src="typer5.png"></span>'); 
  }
  if (k == "f" || k == "F") { 
    elem.before('<span class="inner"><img src="typer6.png"></span>'); 
  }
  if (k == "g" || k == "G") { 
    elem.before('<span class="inner"><img src="typer7.png"></span>'); 
  }
  if (k == "h" || k == "H") { 
    elem.before('<span class="inner"><img src="typer8.png"></span>'); 
  }
    if (k == "v" || k == "V") { 
    elem.before('<span class="inner"><img src="4394-17 copy.png"></span>'); 
  }
  if (k == "w" || k == "W") { 
    elem.before('<span class="inner"><img src="4779-06 copy.jpg"></span>'); 
  }
  if (k == "x" || k == "X") { 
    elem.before('<span class="inner"><img src="4779-01 copy.jpg"></span>'); 
  }
  if (k == "y" || k == "Y") { 
    elem.before('<span class="inner"><img src="27790020 copy.jpg"></span>'); 
  }
  if (k == "z" || k == "Z") { 
    elem.before('<span class="inner"><img src="13770001 copy.jpg"></span>'); 
  }
    if (k == "q" || k == "Q") { 
    elem.before('<span class="inner"><img src="typer9.png"></span>'); 
  }
  if (k == "r" || k == "R") { 
    elem.before('<span class="inner"><img src="typer10.png"></span>'); 
  }
  if (k == "s" || k == "S") { 
    elem.before('<span class="inner"><img src="3498-07-5 copy.png"></span>'); 
  }
  if (k == "t" || k == "T") { 
    elem.before('<span class="inner"><img src="4394-09-1 copy.png"></span>'); 
  }

  //all style / editing keys below 

  if (k == "i" || k == "I") { 
    elem.before('<span class="skew"></span>'); 
  }
  if (k == "j" || k == "J") { 

    elem.before('<span class="rotate90"></span>'); 
  }
  if (k == "k" || k == "K") { 

    elem.before('<span class="rotate180"></span>'); 
  }
  if (k == "l" || k == "L") { 

    elem.before('<span class="rotate90cc"></span>'); 
  }
  if (k == "m" || k == "M") { 

    elem.before('<span class="up"></span>'); 
  }
  if (k == "n" || k == "N") { 

    elem.before('<span class="down"></span>'); 
  }
  if (k == "o" || k == "O") { 

    elem.before('<span class="left"></span>'); 
  }
  if (k == "p" || k == "P") { 

    elem.before('<span class="right"></span>'); 
  }
  if (k == "u" || k == "U") { 
    elem.before('<span class="scaledown"></span>'); 
  }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); 
}
};