var desiredTime= prompt("please enter the time in format month/date/year hour:minute:seconds","");

var countdownDate= new Date(desiredTime).getTime();

var x= setInterval(function(){

  var currentTime= new Date().getTime();

  var distance= countdownDate-currentTime;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("card").innerHTML= days+"d"+" "+hours+"h "+minutes+"m"+" "+seconds+"s";

    if(distance<0)
    {
       document.getElementById("card").innerHTML= "Countdown Over";
    }
},1000);
