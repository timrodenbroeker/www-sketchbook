var el = document.getElementById("wrapper");
var body = document.querySelector("body");

function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}


body.onscroll = function(){
    var top = window.pageYOffset;

    var rotation = map_range(top,0,body.clientHeight - window.innerHeight,0,360);
    var scalar = map_range(top,0,body.clientHeight - window.innerHeight,0,100);

    document.getElementById("cube").style.transform = "rotateY(" + rotation + "deg) scale(" + scalar + "%)";
    document.getElementById("cube").style.webkitTransform = "rotateY(" + rotation + "deg) scale(" + scalar + "%)";
    document.getElementById("cube").style.MozTransform = "rotateY(" + rotation + "deg) scale(" + scalar + "%)";
    document.getElementById("cube").style.msTransform = "rotateY(" + rotation + "deg) scale(" + scalar + "%)";
    document.getElementById("cube").style.OTransform = "rotateY(" + rotation + "deg) scale(" + scalar + "%)";

};
