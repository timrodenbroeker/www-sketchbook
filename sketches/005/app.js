var deg = 0;

var logo = document.getElementById("rect");

setInterval(function(){
    logo.style.transform = "rotate("+deg+"deg)";
    deg++;
}, 10);