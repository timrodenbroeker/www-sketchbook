// Grid ansteuern
var grid = document.getElementById("grid");


// 200 Divs einfügen
for (var i = 0; i < 200; i++){
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
