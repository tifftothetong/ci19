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

//functions for a day of the week back in time, the time code is specified in var url, at the end. 
//these function are attached to the html buttons that are triggered at onclick function 

// do i need a function to clear the page and run the next function? is that why the day isnt showing up? 

//monday is set at hourly, the rest are set at daily. 
function monday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",158274000";

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
      console.log("monday", json);
        buildApp(json);

  }

  function buildApp(json){
    // variables from the api
    var info = json.hourly.data[0];

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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                  "width: ${outputMin}px; 
                  height: ${outputMoon}px; 
                  left: ${randomX}px; 
                  top: ${randomY}px; 
                  position: absolute;
                  border-radius: ${tempMax}px;
                  background: 
                    linear-gradient(${tempMax}deg, 
                    rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                    rgb(${outputPressure},${outputCloud},${outputLow}));
                > 

                </div> 
                `)

            }

    var background = "rgb(0, 73, 232)";
    document.body.style.backgroundColor = background;

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function tuesday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",984441600";

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
          // generate ratio 
            var uv = info.uvIndex;

            xMax = 170;
            xMin = 0;

            yMax = 11;
            yMin = 0;

            percent = (uv - yMin) / (yMax - yMin);
            outputUV = percent * (xMax - xMin) + xMin;

        // BORDER RADIUS
   
        var appHigh = info.apparentTemperatureHigh;
        
        // LINEAR GRADIENT DEGREES
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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function wednesday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",719708459";

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
          // generate ratio 
            var uv = info.uvIndex;

            xMax = 170;
            xMin = 0;

            yMax = 11;
            yMin = 0;

            percent = (uv - yMin) / (yMax - yMin);
            outputUV = percent * (xMax - xMin) + xMin;

        // BORDER RADIUS
   
        var appHigh = info.apparentTemperatureHigh;
        
        // LINEAR GRADIENT DEGREES
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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function thursday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",598147200";

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
          // generate ratio 
            var uv = info.uvIndex;

            xMax = 170;
            xMin = 0;

            yMax = 11;
            yMin = 0;

            percent = (uv - yMin) / (yMax - yMin);
            outputUV = percent * (xMax - xMin) + xMin;

        // BORDER RADIUS
   
        var appHigh = info.apparentTemperatureHigh;
        
        // LINEAR GRADIENT DEGREES
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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function friday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",924307020";

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
          // generate ratio 
            var uv = info.uvIndex;

            xMax = 170;
            xMin = 0;

            yMax = 11;
            yMin = 0;

            percent = (uv - yMin) / (yMax - yMin);
            outputUV = percent * (xMax - xMin) + xMin;

        // BORDER RADIUS
   
        var appHigh = info.apparentTemperatureHigh;
        
        // LINEAR GRADIENT DEGREES
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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function saturday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    console.log(cord);
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/0f6c0dbc1bed7552d2656ce9c3dc755e/" + cord + ",1365228000";

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
          // generate ratio 
            var uv = info.uvIndex;

            xMax = 170;
            xMin = 0;

            yMax = 11;
            yMin = 0;

            percent = (uv - yMin) / (yMax - yMin);
            outputUV = percent * (xMax - xMin) + xMin;

        // BORDER RADIUS
   
        var appHigh = info.apparentTemperatureHigh;
        
        // LINEAR GRADIENT DEGREES
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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

function sunday(){

  var url;

  for(var i = 0; i < coordinates.length; i++){
    var cord = coordinates[i];
    
    var url = "https://cors.io/?https://api.darksky.net/forecast/529cc0abb6616dc6a74f67948759f445/" + cord + ",1496556000";

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


        var moon = info.moonPhase; //height
          //generate ratio 
            xMax = 170;
            xMin = 0;

            yMax = 1;
            yMin = 0;

            percent = (moon - yMin) / (yMax - yMin);
            outputMoon = percent * (xMax - xMin) + xMin;

        var tempMax = info.temperatureMax;


              $('body').append(`
                <div style = 
                "width: ${outputMin}px; 
                height: ${outputMoon}px; 
                left: ${randomX}px; 
                top: ${randomY}px; 
                position: absolute;
                border-radius: ${tempMax}px;
                background: linear-gradient(${tempMax}deg, 
                rgb(${outputCloud},${outputPrecip},${outputHigh}), 
                rgb(${outputPressure},${outputCloud},${outputLow}));"> 

                </div> 
                `)

            }

   
  }

  function getRandomPosition(element) {

    console.log(randomX + ", " + randomY);
  }


}

// today's weather 

// function today(){

	var url;

		for(var i = 0; i < coordinates.length; i++){
	  var cord = coordinates[i];
	  
	  var url = "https://cors.io/?https://api.darksky.net/forecast/5822de9b5bcc53af57fac442945085b7/" + cord ;

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
	}


	function getRandomPosition(element) {

	  console.log(randomX + ", " + randomY);
		}
	// }

