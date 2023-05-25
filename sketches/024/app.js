// todo
// row-höhen reagieren

function generateGrid(){
    
    const TILES_X = Math.floor(2 + (Math.random() * 20));
    const TILES_Y = Math.floor(2 + (Math.random() * 2));
    const BODY = document.querySelector("body");

    BODY.innerHTML = "";
    let cols = "";
    let rows = "";

    for (let x = 0; x < TILES_X; x++){
        cols += "1fr "
    }

    for (let y = 0; y < TILES_X; y++){
        rows += "1fr "
    }

    BODY.style.gridTemplateColumns = cols;
    BODY.style.gridTemplateRows = rows;

    const TOTAL = TILES_Y * TILES_X;

    // console.log("TILESX", TILES_X);
    // console.log("TILESY", TILES_Y);
    // console.log("TOTAL", TOTAL);

    const MODULOR = Math.floor(Math.random()*4+3);

    for (let i = 0; i < TOTAL; i++) {   
        const DIV = document.createElement("div");
        

        // if (i % MODULOR == 0){
        //     DIV.style.backgroundColor = "#f1f1f1";
        // }

        if (Math.random() < 0.5){
            DIV.style.backgroundColor = "#f1f1f1";
        }

        BODY.appendChild(DIV);        

    }

}

generateGrid();
setInterval(function(){ generateGrid() }, 100);
