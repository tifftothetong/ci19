
  var url = "https://raw.githubusercontent.com/tifftothetong/ci19/master/studio/ohno/newest.json";
  
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildPage(json);})

//1. split paragraph of rant into singular words into an array 
//3. on mouse hover location (xy coordinates), append the words in the split array & append images 
//4. on the background, append the video large screen 
//5. space bar to move onto the next product - counter +1 and it appends the video in the array 
// start counter @ the top of the js at var counter = 0, addEventListener ('keyup){if(keyName ==='spacebar')} + 1 
//for videos you can style the vh vw on the appending 

var data;
var stupid;

var divs = [];

////////// split data
function buildPage(d) {
  data = d;
  console.log(data);

  var string = data[1].stupid + data[1].stupid;
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
      div.style.opacity = 0;
      div.innerHTML = stupid[i];
      div.index = i;

    ////////// hover will display words + lag animation

      div.onmouseover = function(event) {
        event.target.style.opacity = 1.0;
        // event.target.style.animationName = "fade";
        event.target.style.zIndex = "2";
      }
      div.onmouseout = function(event) {
        event.target.style.opacity = 0.0;
        // event.target.style.animationName = "fade";
        event.target.style.zIndex = "2";
      }

      divs.push(div);
    }

  // var vid = document.createElement("div");
  //     document.body.appendChild(vid);
  //     vid.innerHTML = data[4].video;
      // event.target.style.zIndex = "1";

    var vid = document.createElement("iframe");
    document.body.appendChild(vid);
    vid.setAttribute("src", data[0].video +"?autoplay=1");
    vid.setAttribute("width", "500");

    // vid.style.zIndex = "1";
    //autoplay? 

}

////////// place video 




////////// counter


//create element (div) and place it in this position -> set top to y, left to x - set everythign and then append it to the big 'canvas div' position absolute
//loop for the array of 'stupid' i ++ everytime the cursor moves 


// for (var i = 0; i < 84; i++){
// var stupidArray = data[i].stupid;}

  // document.onmousemove = function(event){
  //   console.log(event);
  //   var div = document.createElement("div");
  //   div.style.top = event.y + "px";
  //   div.style.left = event.x + "px";
  //   document.body.appendChild(div);
  //   div.innerHTML = stupid[t];
  // }


// for (var i = 0; i < cities.length; i += 1){
//         var city = document.createElement("h1");
//         city.innerHTML = cities[i].city;
//         city.counter = i; 
//         document.body.appendChild(city);
//         city.onmouseover = function(event){
//           pop.innerHTML = cities[event.target.counter].population;
//         }






