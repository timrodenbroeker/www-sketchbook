
var id = null;
function myMove() {
  var elem = document.getElementById("el");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == window.innerWidth) {
      pos = 0;
    } else {
      pos+=10;
      elem.style.left = pos + 'px';
    }
  }
} 

myMove();