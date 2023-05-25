function loop(){
    const SELECTOR = 1 + Math.floor(Math.random()*7);
    const URL = "../../media/img/" + SELECTOR + ".jpg";

    document.querySelector("img").src = URL;

}

setInterval(function(){ 
    loop();
}, 100);


