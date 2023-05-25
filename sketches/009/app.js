var lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

var m1 = document.querySelector("#m1");
var m2 = document.querySelector("#m2");
var m3 = document.querySelector("#m3");

m1.innerHTML = lorem;
m2.innerHTML = lorem;
m3.innerHTML = lorem;

let x = 0;

console.log(x);

setInterval(function(){ 
    m1.style.transform = "translate(calc(2000px - " + x + "px))";
    x+=1;

    m2.style.transform = "translate(calc(2000px - " + x*1.2 + "px))";
    x+=1;

    m3.style.transform = "translate(calc(2000px - " + x*1.4  + "px))";
    x+=1;

}, 1);