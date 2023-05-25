function loop(){
    const SELECTOR = 1 + Math.floor(Math.random()*7);
    const SRC = "url(../../media/img/" + SELECTOR + ".jpg)";

    document.querySelector("body").style.backgroundImage = SRC;
}

setInterval(function(){ 
    loop();
}, 100);


