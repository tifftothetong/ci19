var cursor = document.querySelector("#cursor");


$("body").keypress(function(){
  $("p").hide();
});


//function for editing keys 

function transformLastImage(k) {
  // console.log(k);
  var images = document.querySelectorAll("img");
  var lastImage = images[images.length - 1];

  if (k == "i" || k == "I") { lastImage.className = "rotate90cc"; }
  if (k == "j" || k == "J") { lastImage.className = "skew"; }
  if (k == "k" || k == "K") { lastImage.className = "rotate180"; }
  if (k == "l" || k == "L") { lastImage.className = "rotate90"; }

  var character = {
      x: 100,
      y: 100,
      speedMultiplier: 1,
      element: lastImage
    };

var moveCharacter = function(dx, dy){
  character.x += (dx||0);
  character.y += (dy||0);
  character.element.style.left = character.x + 'px';
  character.element.style.top = character.y + 'px';
 };

  var detectCharacterMovement = function(){
      if (k == "o" || k == "O") {
        moveCharacter(-10, 0);
        console.log("o called");
      }
      if (k == "p" || k == "P") {
        moveCharacter(10, 0);
      }
      if (k == "m" || k == "M") {
        moveCharacter(0, -10);
      }
      if (k == "n" || k == "N") {
        moveCharacter(0, 10);
      }
    }
    detectCharacterMovement();

    // moveCharacter();

    // setInterval(function(){
    //   detectCharacterMovement();
    // }, 100/24);

  // if (k == "m" || k == "M") { lastImage.className = "up"; }
  // if (k == "n" || k == "N") { lastImage.className = "down"; }
  // if (k == "o" || k == "O") { lastImage.className = "left"; }
  // if (k == "p" || k == "P") { lastImage.className = "right"; }
  if (k == "q" || k == "Q") { lastImage.className = "scaledown"; }        
  // if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); 

}



//function for images 

function addNewImage(k) {
  var image = document.createElement("img");
  document.querySelector("#canvas").appendChild(image);

  if (k == "a" || k == "A") { image.src = "typer2.png"; }
  if (k == "b" || k == "B") { image.src = "typer1.png"; }
  if (k == "c" || k == "C") { image.src = "typer3.png"; }
  if (k == "d" || k == "D") { image.src = "typer4.png"; }
  if (k == "e" || k == "E") { image.src = "typer5.png"; } 
  if (k == "f" || k == "F") { image.src = "typer6.png"; }  
  if (k == "g" || k == "G") { image.src = "typer7.png"; } 
  if (k == "h" || k == "H") { image.src = "typer8.png"; } 
  if (k == "v" || k == "V") { image.src = "4394-17 copy.png"; } 
  if (k == "w" || k == "W") { image.src = "4779-06 copy.jpg"; } 
  if (k == "x" || k == "X") { image.src = "4779-01 copy.jpg"; } 
  if (k == "y" || k == "Y") { image.src = "27790020 copy.jpg"; } 
  if (k == "z" || k == "Z") { image.src = "13770001 copy.jpg"; } 
  if (k == "q" || k == "Q") { image.src = "typer9.png"; } 
  if (k == "r" || k == "R") { image.src = "typer10.png"; } 
  if (k == "s" || k == "S") { image.src = "3498-07-5 copy.png"; } 
  if (k == "t" || k == "T") { image.src = "4394-09-1 copy.png"; } 

}


document.onkeydown = function(event){

  var k = event.key;
  

  if ((event.keyCode >= 73 && event.keyCode <= 80) || event.keyCode == 85){
    transformLastImage(event.key);
  } else{
    addNewImage(event.key);
  }

}
