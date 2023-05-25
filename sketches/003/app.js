const chars = ["█","▐","▌","▄","▀","a"];

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

