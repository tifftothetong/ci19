//set up weather api 
// utilise varibales to change styles in the svgs - variables such as: position, colour of the gradients, skew/ scaling of the svgs
// provide 2-3 ranges for each variable to prooduce a certain outcome 
// obtain variables from the svg - cx, cy, rx, ry, rgb, x1,y1,x2,y2 -- and create individual vars from them


// new york 40.7353,-73.9945
// tokyo 35.5040,138.6458
// hong kong 22.3526,113.9872
// rio de janeiro -22.9138,-43.7268
// LA 34.0399,-118.2552
// chicago 41.838,-87.7410
// rome 41.9099,12.4656
// london 51.5139,-0.1497
// berlin 52.5182,13.3413
// athens 37.9845,23.7197
// mumbai 19.0821,72.7407
// beijing 39.9385,116.1165
// seoul 37.5268,126.9245
// taipei 25.0169,121.2254
// hanoi 21.0227,105.8018
// singapore 1.3330,103.7442
// osaka 34.6775,135.4154
// muscat 23.5914,58.3957 
// cairo 30.0487,31.2326
// sydney -33.8705,151.1217
// melbourne -37.8246,144.9335
// buenos aires -34.6158,-58.5035
// reykjavik 64.1334,-21.9226
// bangkok 13.7303,100.5556

var data =[];

var coordinates = ['40.7353,-73.9945', '35.5040,138.6458', "22.3526,113.9872","-22.9138,-43.7268",
"34.0399,-118.2552", "41.838,-87.7410", "41.9099,12.4656", "51.5139,-0.1497", "52.5182,13.3413",
"37.9845,23.7197","19.0821,72.7407", "39.9385,116.1165", "37.5268,126.9245","25.0169,121.2254", 
"21.0227,105.8018", "1.3330,103.7442", "34.6775,135.4154", "23.5914,58.3957", "30.0487,31.2326", 
"-33.8705,151.1217", "-37.8246,144.9335","-34.6158,-58.5035", "64.1334,-21.9226", "13.7303,100.5556"];
//for however many cities you have, run the api, which will run the function build app 



var url;

for(var i = 0; i < coordinates.length; i++){
  var cord = coordinates[i];
  
  var url = "https://cors.io/?https://api.darksky.net/forecast/529cc0abb6616dc6a74f67948759f445/" + cord ;

  callAPI();

}


function callAPI(){
  console.log("call api")
  fetch(url)
    .then(function(event){ return event.json(); })
    .then(function(json){ pushData(json);})
}


var randomX;
var randomY;


function pushData(json){
    data.push(json);
    console.log(json);

      buildApp(json);

}

function buildApp(json){
  // variables from the api
  var info = json.daily.data[1];

    // random append
      for (var i = 0; i < 7; i++){

        var x = window.innerWidth;
        var y = window.innerHeight;
        randomX = Math.floor(Math.random()*x);
        randomY = Math.floor(Math.random()*y);

// HEIGHT 
        //generate ratio 
          var uv = info.uvIndex;

          xMax = 170;
          xMin = 0;

          yMax = 11;
          yMin = 0;

          percent = (uv - yMin) / (yMax - yMin);
          outputUV = percent * (xMax - xMin) + xMin;

      //BORDER RADIUS
 
      var appHigh = info.apparentTemperatureHigh;
      
      //LINEAR GRADIENT DEGREES
      var appLow = info.apparentTemperatureLow;
      
      //WIDTH
        var tempMin = info.temperatureMin; 
            xMax = 280;
            xMin = 0;

            yMax = 100;
            yMin = 0;

            percent = (tempMin - yMin) / (yMax - yMin);
            outputMin = percent * (xMax - xMin) + xMin;


    //////////COLOURS
       //color1 rgb - r
        var pressure = info.pressure;
          //generate ratio 
          xMax = 255;
          xMin = 0;

          yMax = 1020;
          yMin = 1000;

          percent = (pressure - yMin) / (yMax - yMin);
          outputPressure = percent * (xMax - xMin) + xMin;


      var high = info.temperatureHigh; //color1 rgb - b
      //generate ratio 
          xMax = 255;
          xMin = 0;

          yMax = 100;
          yMin = 0;

          percent = (high - yMin) / (yMax - yMin);
          outputHigh = percent * (xMax - xMin) + xMin;

      var windGust = info.windGust;
        //generate ratio 
          xMax = 255;
          xMin = 0;

          yMax = 25;
          yMin = 0;

          percent = (windGust - yMin) / (yMax - yMin);
          outputGust = percent * (xMax - xMin) + xMin;

    //////////col2 rgb
      var precip = info.precipProbability
        xMax = 255;
        xMin = 0;

        yMax = 1;
        yMin = 0;

        percent = (precip - yMin) / (yMax - yMin);
        outputPrecip = percent * (xMax - xMin) + xMin;


       //color2 - rgb - g
       var cloud = info.cloudCover;
      //generate ratio 
          xMax = 255;
          xMin = 0;

          yMax = 1;
          yMin = 0;

          percent = (cloud - yMin) / (yMax - yMin);
          outputCloud = percent * (xMax - xMin) + xMin;

      var low = info.temperatureLow; //color2 rgb - b
      //generate ratio 
          xMax = 255;
          xMin = 0;

          yMax = 100;
          yMin = 0;

          percent = (low - yMin) / (yMax - yMin);
          outputLow = percent * (xMax - xMin) + xMin;


    // extra variables 
          var dew = info.dewPoint; //y2 
        //generate ratio 
            xMax = 100;
            xMin = 0;

            yMax = 80;
            yMin = 0;

            percent = (dew - yMin) / (yMax - yMin);
            outputDew = percent * (xMax - xMin) + xMin;


      var moon = info.moonPhase; //cx
        //generate ratio 
          xMax = 150;
          xMin = 0;

          yMax = 1;
          yMin = 0;

          percent = (moon - yMin) / (yMax - yMin);
          outputMoon = percent * (xMax - xMin) + xMin;

      var tempMax = info.temperatureMax;



            $('body').append(`
              <div style = 
              "width: ${outputMin}px; 
              height: ${outputUV}px; 
              left: ${randomX}px; 
              top: ${randomY}px; 
              position: absolute;
              border-radius: ${appHigh}px;
              background: linear-gradient(${appLow}deg, 
              rgb(${outputCloud},${outputPrecip},${outputHigh}), 
              rgb(${outputPressure},${outputCloud},${outputLow}));"> 

              </div> 
              `)

          }

            //$('body').append(`
              // <div style = 
              // "width: ${outputCloud}px; 
              // height: ${outputPressure}px; 
              // left: ${randomX}px; 
              // top: ${randomY}px; 
              // position: absolute;
              // border-radius: ${outputGust}px;
              // background: linear-gradient(${outputPrecip}deg, 
              // rgb(${outputMax},${outputAppHigh},${outputHigh}), 
              // rgb(${outputAppLow},${outputMin},${outputLow}));"> 

              // </div> 
              // `)
 
}


function getRandomPosition(element) {

  console.log(randomX + ", " + randomY);
}

function red(){
  document.body.style.backgroundColor = "red";
}
function orange(){
  document.body.style.backgroundColor = "orange";
}
function yellow(){
  document.body.style.backgroundColor = "yellow";
}
function green(){
  document.body.style.backgroundColor = "lime";
}
function blue(){
  document.body.style.backgroundColor = "blue";
}
function violet(){
  document.body.style.backgroundColor = "#A54FCA";
}

