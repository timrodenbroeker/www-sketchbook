// Utilities
function map_range(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function draw() {
    const canvas = document.querySelector('canvas');

    if (!canvas.getContext) {
        return;
    }
    
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 50;
    let spacing = 50;

    // -----------------
    // Line 1
    // -----------------

    let line1_1_x = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line1_1_y = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line1_2_x = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line1_2_y = map_range(Math.random(),0,1,spacing,canvas.width-spacing);

    ctx.beginPath();
    ctx.moveTo(line1_1_x, line1_1_y);
    ctx.lineTo(line1_2_x, line1_2_y);
    ctx.stroke();

    // -----------------
    // Line 2
    // -----------------
    
    ctx.lineWidth = 10;

    let line2_1_x = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line2_1_y = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line2_2_x = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    let line2_2_y = map_range(Math.random(),0,1,spacing,canvas.width-spacing);
    ctx.beginPath();
    ctx.moveTo(line2_1_x, line1_2_y);
    ctx.lineTo(line2_2_x, line1_2_y);
    ctx.stroke();

    // -----------------
    // Circle
    // -----------------
    
    let diameter = 50;

    let circle_x = map_range(Math.random(),0,1,spacing + diameter,canvas.width-spacing - diameter);
    let circle_y = map_range(Math.random(),0,1,spacing + diameter,canvas.width-spacing - diameter);

    ctx.beginPath();
    ctx.arc(circle_x, circle_y, diameter, 0, 2 * Math.PI);
    ctx.fill(); 

}

window.setInterval(draw, 200);
