// Get Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//setting up the background
const backgroundImage = new Image();
backgroundImage.src = './images/MapProjectZoomedPng.png';
canvas.width = 1024;
canvas.height = 576;



//orients the canvas to size
ctx.fillRect(0, 0, canvas.width, canvas.height);

//import zoomed map, must be zoomed to 400% to look to scale 

//importing sprite. i will have to take whatever the choose and make custom sprite sheets
const spriteGuy = new Image()
spriteGuy.src = './images/Dsprite.png'
console.log(spriteGuy)
//wait for sprite to load 


// backgroundImage.onload = () => {
//     //might need to change x and y to position where the screen starts


// }
//classes for images.
class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}
const background = new Sprite({
    position: {
        x: -150,
        y: -600
    },
    image: backgroundImage


})
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

//animation loop

function animate() {

    window.requestAnimationFrame(animate) //infinite loop for the animation 
    background.draw()
    //sprite loads half the time, need to make this an async function later
    ctx.drawImage(
        spriteGuy,
        0, //x coord for crop
        0, //y crop 
        spriteGuy.width / 4, //crop from left to right of img
        spriteGuy.height, //full length of crop img
        canvas.width / 2 - (spriteGuy.width / 4) / 2, // these two should perfectly center SpriteGuy on canvas if he is 256/64
        canvas.height / 2 - spriteGuy.height / 2,
        spriteGuy.width / 4,
        spriteGuy.height //last for arguments are the actual positioning of sprite on screen
    )//sprite guy position may need slight adjust later
    //if statement for key actions 
    if (keys.w.pressed && lastkey === 'w') background.position.y += 3
    else if (keys.a.pressed && lastkey === 'a') background.position.x += 3
    else if (keys.s.pressed && lastkey === 's') background.position.y -= 3
    else if (keys.d.pressed && lastkey === 'd') background.position.x -= 3
}
//listen for the keydown 
let lastkey = ''
window.addEventListener('keydown', (e) => {
   // console.log('e.key') //logging the keydown event
    switch (e.key) {  //switch case for keydown 
        case 'w':
            keys.w.pressed = true
            lastkey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastkey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastkey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastkey = 'd'
            break
    }
    
})



animate()

window.addEventListener('keyup', (e) => {
    console.log('e.key') //logging the keyup event
    switch (e.key) {  //switch case for keyup 
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
    console.log(keys)
})