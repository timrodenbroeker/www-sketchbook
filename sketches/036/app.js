var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);


const chars = c.split('');;

const main = document.querySelector("main");

function animate(){

    let str = "";

    for (let i = 0; i < 50; i++){
        let selector = Math.floor(Math.random() * chars.length);
        let ch = chars[selector];
        str += ch;
    }

    main.innerHTML = str;

}

window.setInterval(animate, 100);



if (c != null){
    document.getElementById("formWrapper").style.display = "none";

}