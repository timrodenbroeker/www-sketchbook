function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

const WORD = document.querySelector("h1");

WORD.style.filter = "blur(50px)";

const BODY = document.querySelector("body");

BODY.onscroll = function(){
    let top = window.pageYOffset;

    const RADIUS = map_range(top,0,BODY.clientHeight - window.innerHeight, 50, 0);

    WORD.style.filter = "blur(" + RADIUS + "px)";

};
