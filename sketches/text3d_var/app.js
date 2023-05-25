function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

var el = document.getElementById("text");

window.addEventListener('mousemove', e => {
    // Bad!
    // x = e.offsetX;
    // y = e.offsetY;
    
    // Good
    x = e.clientX;
    y = e.clientY;

    var rotateY = map_range(x,0,window.innerWidth,-70,70);
    var rotateX = map_range(y,0,window.innerHeight,-70,70);
    
    el.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

});