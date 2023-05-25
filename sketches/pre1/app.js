const box = document.getElementById('pre');

setInterval(function(){
    // box.appendChild(text);
    // ✅ (Alternative) Append text using insertAdjacentText
    box.insertAdjacentText('beforeend', '??? ');
    console.log("aa");
}, 10);