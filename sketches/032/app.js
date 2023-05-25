function draw() {
    const canvas = document.querySelector('canvas');

    if (!canvas.getContext) {
        return;
    }
    
    const ctx = canvas.getContext('2d');

    // context.clearRect(0, 0, canvas.width, canvas.height);

    // set line stroke and line width
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;

    let A_POS_X = Math.random() * 600;
    let A_POS_Y = Math.random() * 600;
    let B_POS_X = Math.random() * 600;
    let B_POS_Y = Math.random() * 600;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(A_POS_X, A_POS_Y);
    ctx.lineTo(B_POS_X, B_POS_Y);
    ctx.stroke();

}

window.setInterval(draw, 30);
