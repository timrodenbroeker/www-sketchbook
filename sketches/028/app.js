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

for (let i = 0; i < 200; i++){
    loop();
}


