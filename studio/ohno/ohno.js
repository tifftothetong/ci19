function changeVideo() {

  if (document.getElementByClassName("iframe").src == "https://www.youtube.com/embed/2xZp-GLMMJ0") 
    {
    document.getElementById("iframe").src = "https://www.youtube.com/watch?v=QvcYjSI_RyQ";
    }
  else 
    {document.getElementById("iframe").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
      }
    }

  var url = "https://raw.githubusercontent.com/tifftothetong/ci19/master/studio/ohno/mydata.json";
  
  fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){buildPage(json);})

//1. split paragraph of rant into singular words into an array 
//2. split images by each image - style the size of the images as small 
//3. on mouse hover location (xy coordinates), append the words in the split array & append images 
//4. on the background, append the video large screen 
//5. space bar to move onto the next product - counter +1 and it appends the video in the array 

function buildPage(data) {
  console.log(data);
  var string = data[1].name;
  console.log(string);
  var split = string.split(" ");
  document.getElementById("demo").innerHTML = split;
}



