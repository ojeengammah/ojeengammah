const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let xPos = 0;

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillRect(xPos, canvas.height / 2 - 25, 50, 50);

    xPos += 5;
    if (xPos > canvas.width) {
        xPos = -50;
    }
}

animate();
