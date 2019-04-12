
  var url = "https://raw.githubusercontent.com/tifftothetong/ci19/master/studio/ohno/bestest.json";
  
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildPage(json);})

//1. split paragraph of rant into singular words into an array 
//3. on mouse hover location (xy coordinates), append the words in the split array & append images 
//4. on the background, append the video large screen 
//5. space bar to move onto the next product - counter +1 and it appends the video in the array 
// start counter @ the top of the js at var counter = 0, 
//addEventListener ('keyup){if(keyName ==='spacebar')} + 1 

window.addEventListener("keyup", function(event){
  console.log(event);
  if(event.code === "Space"){
    whichStupid = (whichStupid + 1) % 28;
    buildPage(data, whichStupid)
  }
});

var data;
var stupid;
var whichStupid = 1;

var divs = [];

////////// split data
function buildPage(d) {
  data = d;
  console.log(data);

  var string = data[whichStupid].stupid + data[whichStupid].stupid + data[whichStupid].stupid;
  console.log(string);

  stupid = string.split(" ");
  console.log(stupid);


  var randomX; 
  var randomY;

  ////////// random position

  function getRandomPosition(element) {
    var x = window.innerWidth;
    var y = window.innerHeight;
    randomX = Math.floor(Math.random()*x);
    randomY = Math.floor(Math.random()*y);
  }

  console.log(randomX + ", " + randomY);

  ////////// random append
  for (var i = 0; i < stupid.length; i++){

      var div = document.createElement("div");
      document.body.appendChild(div);
      div.style.position = "absolute";
      var xy = getRandomPosition(div);
      div.style.left = randomX + "px";
      div.style.top = randomY + "px";
      div.style.zIndex = 2;
      div.style.opacity = 0;
      div.innerHTML = stupid[i];
      div.index = i;

    ////////// hover will display words + lag animation

      div.onmouseover = function(event) {
        event.target.style.opacity = 1.0;
        // event.target.style.animationName = "fade";
      }
      div.onmouseout = function(event) {
        event.target.style.opacity = 0.0;
        // event.target.style.animationName = "fade";
      }

      divs.push(div);
    }

////////// place video 

    var vid = document.createElement("iframe");
    document.body.appendChild(vid);
    vid.setAttribute("src", data[whichStupid].video +"?autoplay=1&rel=0");
    vid.setAttribute("width", "500");
    vid.style.zIndex = "1";

}





////////// counter








