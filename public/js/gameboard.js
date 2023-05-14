// Get Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set up sprite
const sprite = {
    x: canvas.width / 2, // Initial position
    y: canvas.height / 2, // Initial position
    speed: 3, // Speed of movement
    width: 16, // sprite size
    height: 32, // sprite size
};

// Create Image object
const image = new Image();
image.src = '../assets/linkGuy.png';

// Handle image load event
image.onload = function () {
    // Draw sprite
    ctx.drawImage(image, sprite.x, sprite.y, sprite.width, sprite.height);
};

// Handle keyboard input
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

window.addEventListener('keydown', function(event) {
    switch(event.key.toLowerCase()) {
        case 'w':
            keys.w = true;
            break;
        case 'a':
            keys.a = true;
            break;
        case 's':
            keys.s = true;
            break;
        case 'd':
            keys.d = true;
            break;
    }
});

window.addEventListener('keyup', function(event) {
    switch(event.key.toLowerCase()) {
        case 'w':
            keys.w = false;
            break;
        case 'a':
            keys.a = false;
            break;
        case 's':
            keys.s = false;
            break;
        case 'd':
            keys.d = false;
            break;
    }
});

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update sprite position based on keys
    if (keys.w) sprite.y -= sprite.speed;
    if (keys.a) sprite.x -= sprite.speed;
    if (keys.s) sprite.y += sprite.speed;
    if (keys.d) sprite.x += sprite.speed;

    // Draw sprite
    ctx.drawImage(image, sprite.x, sprite.y, sprite.width, sprite.height);

    // Call the next game loop
    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'e' || event.key === 'e') {
    let inventoryContainer = document.getElementById('inventoryContainer');
    if (inventoryContainer.style.display === 'none') {
        inventoryContainer.style.display = 'block';
    } else {
        inventoryContainer.style.display = 'none';
    }
}
});

// Start the game loop
gameLoop();
