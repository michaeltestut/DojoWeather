function weatherAlert(){
    alert("Loading weather report...")
}

function cookies(){
   var accept= document.querySelector(".cookies-foot");
    accept.remove();
}

function changeDegree() {
    var measurement = document.querySelector("#tempMeasurement");
    var temperature = document.querySelectorAll(".temp");
    console.log(temperature);

    for(var i=0; i<temperature.length; i++){
        var Farenheight = Math.round((temperature[i].innerText * 1.8)+32);
        var Celsius = Math.round((temperature[i].innerText - 32) / 1.8);
        if(measurement.value == "°F"){
            temperature[i].innerText= Farenheight;
        }
        else{
            temperature[i].innerText = Celsius;
        }
    }
}