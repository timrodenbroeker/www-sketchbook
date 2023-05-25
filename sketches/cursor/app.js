let cursor = document.getElementById("cursor");

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    cursor.style.top = event.pageY + "px";
    cursor.style.left = event.pageX + "px";
}