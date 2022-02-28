console.log("hello world")
function weatherAlert(){
    alert("Loading weather report...")
}

function cookies(){
   var accept= document.querySelector(".cookies-foot");
    accept.remove();
}

function changeDegree() {
    var measurement = document.querySelector("#tempMeasurement");
    var hightemp1 = document.querySelector("#high1").innerText;
    var hightemp2 = document.querySelector("#high2").innerText;
    var hightemp3 = document.querySelector("#high3").innerText;
    var hightemp4 = document.querySelector("#high4").innerText;
    var lowtemp1 = document.querySelector("#low1").innerText;
    var lowtemp2 = document.querySelector("#low2").innerText;
    var lowtemp3 = document.querySelector("#low3").innerText;
    var lowtemp4 = document.querySelector("#low4").innerText;

    if(measurement.value == "°F"){
        var Farenheight = Math.round((hightemp1 * 1.8) + 32);
        document.querySelector("#high1").innerText= Farenheight;
        var Farenheight = Math.round((hightemp2 * 1.8) + 32);
        document.querySelector("#high2").innerText= Farenheight;
        var Farenheight = Math.round((hightemp3 * 1.8) + 32);
        document.querySelector("#high3").innerText= Farenheight;
        var Farenheight = Math.round((hightemp4 * 1.8) + 32);
        document.querySelector("#high4").innerText= Farenheight;

        var Farenheight = Math.round((lowtemp1 * 1.8) + 32);
        document.querySelector("#low1").innerText= Farenheight;
        var Farenheight = Math.round((lowtemp2 * 1.8) + 32);
        document.querySelector("#low2").innerText= Farenheight;
        var Farenheight = Math.round((lowtemp3 * 1.8) + 32);
        document.querySelector("#low3").innerText= Farenheight; 
        var Farenheight = Math.round((lowtemp4 * 1.8) + 32);
        document.querySelector("#low4").innerText= Farenheight;
        
    }

    else{
        var Celsius = Math.round((hightemp1 - 32) / 1.8);
        document.querySelector("#high1").innerText= Celsius;
        var Celsius = Math.round((hightemp2 - 32) / 1.8);
        document.querySelector("#high2").innerText= Celsius;
        var Celsius = Math.round((hightemp3 - 32) / 1.8);
        document.querySelector("#high3").innerText= Celsius;
        var Celsius = Math.round((hightemp4 - 32) / 1.8);
        document.querySelector("#high4").innerText= Celsius;
        
        var Celsius = Math.round((lowtemp1 - 32) / 1.8);
        document.querySelector("#low1").innerText= Celsius;
        var Celsius = Math.round((lowtemp2 - 32) / 1.8);
        document.querySelector("#low2").innerText= Celsius;
        var Celsius = Math.round((lowtemp3 - 32) / 1.8);
        document.querySelector("#low3").innerText= Celsius;
        var Celsius = Math.round((lowtemp4 - 32) / 1.8);
        document.querySelector("#low4").innerText= Celsius;
        }
    
}