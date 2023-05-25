function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

var chars = ["┌","┘","*","#"];

var wrapper = document.querySelector("main");
wrapper.style.position = "relative";
wrapper.style.overflow = "hidden";
wrapper.style.width = "100%";
wrapper.style.height = "100vh";

var el = document.createElement("div");


el.style.position = "absolute";






wrapper.appendChild(el);

setInterval(function(){ 
    let selector = Math.floor(Math.random() * chars.length);
    var offsetX = map_range( Math.floor( Math.random() * 100),0,100,-300,window.innerWidth);
    var offsetY = map_range( Math.floor( Math.random() * 100),0,100,-300,window.innerHeight);
    var c = chars[selector];
    el.innerHTML = c;
    el.style.left = offsetX + "px";
    el.style.top = offsetY + "px";
    el.style.fontSize = 300 + "px";

}, 100);


