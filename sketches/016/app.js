const slider = document.querySelector("#slider");
var element =  document.getElementById("shape");

slider.addEventListener ("input", function () {
    var val= this.value;
    element.style.width = val + "px";
    element.style.height = val + "px";
});