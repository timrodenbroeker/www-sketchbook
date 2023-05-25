// Utilities
function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

// Sketch
var alphabet = "abcdefghijklmnopqrstuvwxyz";

const arr = alphabet.split("");
var body = document.querySelector("body");

window.addEventListener('mousemove', event => {
    let choice = Math.floor(map_range(event.clientX,0,body.clientWidth,0, arr.length));
    document.querySelector("h1").innerHTML = arr[choice];
});
