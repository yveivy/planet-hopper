// Get Canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
backgroundImage.src = './images/MapProjectZoomedPng.png';
canvas.width = 1024;
canvas.height = 576;

// gsap.to("#myImage", { duration: 1, opacity: 1 });


// setTimeout(function() {
//   gsap.to("#myImage", { duration: 1, opacity: 0 });
// }, 5000);

// gsap.to('#overlapping', {
//     opacity: 1,
//     repeat: 7,
//     yoyo: true,
// })

let colArrMap = []
for (let i = 0; i < colArr.length; i += 60) {
    colArrMap.push(colArr.slice(i, 60 + i)) //slicing the main collisions array into rows of 60(amount of tiles per row)
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
                        value: this.symbol, 
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                }))
    })
});
const interactionZoneMap = []
for (let i = 0; i < interactionArrData.length; i += 60) {
    interactionZoneMap
.push(interactionArrData.slice(i, 60 + i)) 
}
console.log(interactionZoneMap) //made an array of 60 arrays containing the interactions tiles

const interactions = [];
interactionZoneMap.forEach((row, j) => {
    row.forEach((symbol, k) => {
        if (symbol === 4750) {
            interactions.push(
                new Boundary({
                    position: {
                        value: symbol,
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                })
            );
        } else if (symbol === 2020) {
            interactions.push(
                new Boundary({
                    position: {
                        value: symbol, 
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                })
            );
        } else if (symbol === 5050) {
            interactions.push(
                new Boundary({
                    position: {
                        value: symbol, 
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                })
            );
        } else if (symbol === 6060) {
            interactions.push(
                new Boundary({
                    position: {
                        value: symbol, 
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                })
            );
        }
        else if (symbol === 3030) {
            interactions.push(
                new Boundary({
                    position: {
                        value: symbol, 
                        x: k * Boundary.width + offsetBoundary.x,  
                        y: j * Boundary.height + offsetBoundary.y
                    }
                })
            );
        }
    });
});

console.log(interactions);

//orients the canvas to size
ctx.fillRect(0, 0, canvas.width, canvas.height);
//import zoomed map, must be zoomed to 400% to look to scale 
//importing sprite. i will have to take whatever the choose and make custom sprite sheets
const spriteGuy = new Image()


//wait for sprite to load 

const spriteGuyUP = new Image()
spriteGuyUP.src = "./images/barfUp.png"
const spriteGuyDOWN = new Image()
spriteGuyDOWN.src = "./images/barfDown.png"
const spriteGuyLEFT = new Image()
spriteGuyLEFT.src = "./images/barfLeft.png"
const spriteGuyRIGHT = new Image()
spriteGuyRIGHT.src = "./images/barfRight.png"
// backgroundImage.onload = () => {
//     //might need to change x and y to position where the screen starts

// }
//classes for images.
const newDude = new Sprite({
    position: {
        x: canvas.width / 2 - 256 / 4 / 2, // these two should perfectly center this.image on canvas if he is 256/64,
        y: canvas.height / 2 - 64 / 2,
    },
    image: spriteGuyDOWN,
    frames: {
        max: 4
    },
    sprites: {
        up: spriteGuyUP,
        down: spriteGuyDOWN,
        left: spriteGuyLEFT,
        right: spriteGuyRIGHT,
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
const moveables = [background, ...boundaries, foreground, ...interactions]
//below function replaced my giant if statement that covered how the collision was narrowed down to the collision array objects positions on the map
function boxCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && rectangle1.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.position.y <= rectangle2.position.y + rectangle2.height && rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}


//animation loop
function animate() {
    const gameanimation = window.requestAnimationFrame(animate) //infinite loop for the animation 
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    interactions.forEach(interaction => {
        interaction.draw();
    });
    
 newDude.draw()
foreground.draw()
    // if(spriteGuy.position.x + spriteGuy.width)
    //if statement for key actions to follow. !!!!! somewhere in movement there is a glitch that freezes right side obstacle interaction  



    //key to triggering interaction 
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < interactions.length; i++) {
            const interaction = interactions[i];
            if (
                boxCollision({
                    rectangle1: newDude,
                    rectangle2: interaction
                })
            ) {
                if (interaction.position.value === 4750) {
                

                    console.log("Interacting with symbol 4750");
                    
                } else if (interaction.position.value === 2020) {
                    console.log("Interacting with symbol 2020");
                    
                } else if (interaction.position.value === 5050) {
                    console.log("Interacting with symbol 5050");
                   
                } else if (interaction.position.value === 6060) {
                    console.log("Interacting with symbol 6060");
                   
                } else if (interaction.position.value === 3030) {
                    console.log("Interacting with symbol 3030");
                    
                }
                break;
            }
        }
    }
   

    let moving = false
    newDude.moving = false
    if (keys.w.pressed && lastkey === 'w') {
        moving = true
        newDude.moving = true
        newDude.image = newDude.sprites.up
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
    } else if (keys.a.pressed && lastkey === 'a') {
        moving = true
        newDude.moving = true
        newDude.image = newDude.sprites.left
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
        newDude.moving = true
        newDude.image = newDude.sprites.down
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
        newDude.moving = true
        newDude.image = newDude.sprites.right
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
})

// window.addEventListener('keydown', function (event) {
//     if (event.key === 'e' || event.key === 'e') {
//     let inventoryContainer = document.getElementById('inventoryContainer');
//     if (inventoryContainer.style.display === 'none') {
//         inventoryContainer.style.display = 'block';
//     } else {
//         inventoryContainer.style.display = 'none';
//     }
// }
// });
