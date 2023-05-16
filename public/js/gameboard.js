// Get Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = './images/MapProjectZoomedPng.png';
canvas.width = 1024;
canvas.height = 576;



colArrMap = []

for (let i = 0; i < colArr.length; i += 60) {
    colArrMap.push(colArr.slice(i, 60 + i)) //slicing the main collisions array into rows of 60(amount of tiles per row)

}



class Boundary {
    static width = 64;  //the number represents the pixel square size*the zoom level 
    static height = 64;
    constructor({ position }) {
        this.position = position
        this.width = 64   //pre positioning boundaries based on the 400percent zoom map
        this.height = 64
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.0)' //this makes the boundaries invisible  
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const boundaries = []
const offsetBoundary = {  //offsetting boundary to match where map is positioned
    x: -150,
    y: -600
}

colArrMap.forEach((row, j) => {
    row.forEach((symbol, k) => {
        if (symbol === 4750)
            boundaries.push(
                new Boundary({
                    position: {
                        x: k * Boundary.width + offsetBoundary.x,   // this is just the width of the map squares with the image zoom
                        y: j * Boundary.height + offsetBoundary.y
                    }
                }))
    })
});

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
        image,
        frames = { max: 1 },
    }) {
        this.frames = frames

        this.position = position
        this.image = image
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }


    }

    draw() {

        ctx.drawImage(
            this.image,
            0, //x coord for crop
            0, //y crop 
            this.image.width / this.frames.max, //crop from left to right of img
            this.image.height, //full length of crop img
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height //last for arguments are the actual positioning of sprite on screen
        )//sprite guy position may need slight adjust later
    }
}


const newDude = new Sprite({
    position: {
        x: canvas.width / 2 - 256 / 4 / 2, // these two should perfectly center this.image on canvas if he is 256/64,
        y: canvas.height / 2 - 64 / 2,
    },
    image: spriteGuy,
    frames: {
        max: 4
    }
})

const background = new Sprite({
    position: {
        x: offsetBoundary.x,
        y: offsetBoundary.y
    },
    image: backgroundImage


})
//adding foreground layers. will set to render last so they appear above the NewGuy 
const foregroundImg = new Image()
foregroundImg.src = "./images/gameLayers/MainForeground.png"

const foreground = new Sprite({
    position: {
        x: offsetBoundary.x,
        y: offsetBoundary.y
    },
    image: foregroundImg


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
//make a test boundary to see if it works
const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})

const moveables = [background, ...boundaries, foreground]
//below function replaced my giant if statement that covered how the collision was narrowed down to the collision array objects positions on the map
function boxCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && rectangle1.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.position.y <= rectangle2.position.y + rectangle2.height && rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

//animation loop

function animate() {

    window.requestAnimationFrame(animate) //infinite loop for the animation 
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()

    })

    newDude.draw()

foreground.draw()


    // if(spriteGuy.position.x + spriteGuy.width)

    //if statement for key actions to follow. !!!!! somewhere in movement there is a glitch that freezes right side obstacle interaction  



    let moving = false
    if (keys.w.pressed && lastkey === 'w') {
        moving = true
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                boxCollision({
                    rectangle1: newDude,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3 //'predicting' that a boundary is about to get hit by using a 3pixel buffer
                        }
                    }
                })
            ) {
                console.log('collision')
                moving = false   //making a break and movement stop so the map quits moving and js quits detecting for other boundaries because it keeps giving a false reading 
                break
            }
        }


        if (moving)
            moveables.forEach(moveable => {
                moveable.position.y += 3
            })
    }else if (keys.a.pressed && lastkey === 'a') {
        moving = true
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                boxCollision({
                    rectangle1: newDude,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log('collision')
                moving = false
                break
            }
        }if (moving)
            moveables.forEach(moveable => { moveable.position.x += 3 })
    }else if (keys.s.pressed && lastkey === 's') {
        moving = true
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                boxCollision({
                    rectangle1: newDude,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                console.log('collision')
                moving = false
                break
            }
        } if (moving)
            moveables.forEach(moveable => { moveable.position.y -= 2 })
    }else if (keys.d.pressed && lastkey === 'd') {
        moving = true
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                boxCollision({
                    rectangle1: newDude,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log('collision')
                moving = false
                break
            }
        }if (moving)
        moveables.forEach(moveable => { moveable.position.x -= 3 })
    }
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
    //logging the keyup event
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