const BODY = document.querySelector("body");

function loop(){
    const SELECTOR = 1 + Math.floor(Math.random()*7);
    const URL = "../../media/img/" + SELECTOR + ".jpg";
    const IMG = document.createElement('img');
    IMG.src = URL;
    IMG.style.position = "absolute";
    const X = window.innerWidth;
    const Y = window.innerHeight;

    const W = 30 + Math.random() * 300;

    IMG.style.top = Math.floor(Math.random() * Y) - W/2 + "px";
    IMG.style.left = Math.floor(Math.random() * X) - W/2 + "px";

    IMG.style.width = W + "px";

    BODY.appendChild(IMG);

}

setInterval(function(){ 
    loop();
}, 20);



function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}


window.addEventListener('mousemove', e => {

  var x = map_range(e.pageX,0,window.innerWidth,10,500);
  BODY.style.transform = "scale(" + x + "%)";
  
});