function changeVideo() {

  if (document.getElementByClassName("iframe").src == "https://www.youtube.com/embed/2xZp-GLMMJ0") 
    {
    document.getElementById("iframe").src = "https://www.youtube.com/watch?v=QvcYjSI_RyQ";
    }
  else 
    {document.getElementById("iframe").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
      }
    }

 //

//1. split paragraph of rant into singular words into an array 
//2. split images by each image - style the size of the images as small 
//3. on mouse hover location (xy coordinates), append the words in the split array & append images 
//4. on the background, append the video large screen 
//5. space bar to move onto the next product 

function myFunction() {
  var string = "why on earth would we need this? how is this More comfortable? if anything its a reminder that your seatbelt exists and it doesnt even provide comfort the rest of the seatbelt so you only get comfort for a particular part of your chest? what about the rest of the body? why is it called tiddy? not Titty ? what on earth is going on. its also so ugly why on earth would i want that on my body?just because it is 'cute' looking doesnt mean its an appropriate addition to your car its just so USELESS ITS A WASTE OF MONEY how uncomfortable is a seatbelt really ?";
  var split = string.split(" ");
  document.getElementById("demo").innerHTML = split;
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight-element.clientHeight;
  var y = document.body.offsetWidth-element.clientWidth;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}
window.onkeydown = function() {
  var text = document.createElement('h2');
  text.setAttribute("style", "position:absolute;");
  text.setAttribute("split");
  document.body.appendChild(text);
  var xy = getRandomPosition(text);
  text.style.top = xy[0] + 'px';
  text.style.left = xy[1] + 'px';
}

