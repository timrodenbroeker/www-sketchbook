// Utilities
function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

// Sketch
var txt;

const fileUrl = '../../media/meditations.txt';

fetch(fileUrl)
   .then( response => response.text() )
   .then( text => build(text) );

function build(txt){
    const arr = txt.split(" ");

    var el = document.getElementById("wrapper");
    var body = document.querySelector("body");

    body.onscroll = function(){
        var top = window.pageYOffset;
        let choice = Math.floor(map_range(top,0,body.clientHeight - window.innerHeight,0, arr.length-1));
        document.getElementById("headline").innerHTML = arr[choice];
    }
}
