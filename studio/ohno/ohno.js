
  var url = "https://raw.githubusercontent.com/tifftothetong/ci19/master/studio/ohno/mydata.json";
  
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildPage(json);})

//1. split paragraph of rant into singular words into an array 
//2. split images by each image - style the size of the images as small 
//3. on mouse hover location (xy coordinates), append the words in the split array & append images 
//4. on the background, append the video large screen 
//5. space bar to move onto the next product - counter +1 and it appends the video in the array 
// start counter @ the top of the js at var counter = 0, addEventListener ('keyup){if(keyName ==='spacebar')} + 1 
//for videos you can style the vh vw on the appending 

var data;

function buildPage(data) {
  console.log(data);
  var string = data[2].video;
  console.log(string);
  var split = string.split(" ");
  console.log(split);
}

console.log(data[2].undefined);



//create element (div) and place it in this position -> set top to y, left to x - set everythign and then append it to the big 'canvas div' position absolute
// function coord(event){
//   var x = event.clientX;
//   var y = event.clientY;
// }
// console.log(coord);

// onmousemove append div 

// function rant(){
//   var div = document.createElement("div");
//   div.style.top = event.y + "px";
//   div.style.left = event.x + "px";
//   document.body.appendChild(stupid);
//   stupid.innerHTML = data[1].video;
// }

document.onmousemove = function(event){
    console.log(event);
    var div = document.createElement("div");
    div.style.top = event.y + "px";
    div.style.left = event.x + "px";
    document.body.appendChild(div);
    div.innerHTML = data[1].video;
  }




