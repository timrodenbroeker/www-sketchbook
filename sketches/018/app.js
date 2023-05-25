var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}


window.addEventListener('mousemove', e => {

  var x = map_range(e.pageX,0,window.innerWidth,-90,90);
  var y = map_range(e.pageY,0,window.innerHeight,90,-90);
  video.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  
});
  