// Grid ansteuern
var grid = document.getElementById("grid");

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

// 200 Divs einfügen
for (var i = 0; i < 10000; i++){
    var newDiv = document.createElement("div");
    grid.appendChild(newDiv);  
}

// Alle Nodes ansteuern
var nodes = document.getElementById('grid').childNodes;

// Durch alle nodes durchloopen
for (let i = 0; i < nodes.length; i++){
    let el = nodes[i];
    
    el.addEventListener('mouseenter', e => {
        el.classList.toggle("a");
    });
}
