// Get Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//setting up the background
const backgroundImage = new Image();
backgroundImage.src = './images/MapProjectZoomedPng.png';
canvas.width = 1024;
canvas.height = 576;

ctx.fillStyle = 'red'

//orients the canvas to size
ctx.fillRect(0, 0, canvas.width, canvas.height);

//import zoomed map, must be zoomed to 400% to look to scale 

//importing sprite. i will have to take whatever the choose and make custom sprite sheets
const spriteGuy = new Image()
spriteGuy.src = './images/Dsprite.png'
console.log(spriteGuy)
//wait for sprite to load 


backgroundImage.onload = () => {
    //might need to change x and y to position where the screen starts
    ctx.drawImage(backgroundImage, -150, -600)
    //sprite loads half the time, need to make this an async function later
    ctx.drawImage(
        spriteGuy,
        0, //x coord for crop
        0, //y crop 
        spriteGuy.width / 4, //crop from left to right of img
        spriteGuy.height, //full length of crop img
        canvas.width / 2 - (spriteGuy.width / 4) /2, // these two should perfectly center SpriteGuy on canvas if he is 256/64
        canvas.height / 2 - spriteGuy.height / 2,
        spriteGuy.width / 4,
        spriteGuy.height //last for arguments are the actual positioning of sprite on screen
    )//sprite guy position may need slight adjust later

}
//only render one sprite 
