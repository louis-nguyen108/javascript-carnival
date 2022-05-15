// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let bodyPartIndex = 0 // 0 is head

let headIndex = 3 //  Head image on HTML page starts at 3
let bodyIndex = 4 // Body image on HTML page starts at 4
let shoesIndex = 4 // Shoes image on HTML page starts at 4

// --- BIND & CHECK KEY PRESS ---
document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.key === 'ArrowUp') {
    changeUp()
  } else if (e.key === 'ArrowDown') {
    changeDown()
  } else if (e.key === 'ArrowRight') {
    changeRight()
  } else if (e.key === 'ArrowLeft') {
    changeLeft()
  }
}

// --- CHANGE BODY PART ---
function changeUp() {
  if (bodyPartIndex > 0) {
    bodyPartIndex--
  } else if (bodyPartIndex === 0) {
    bodyPartIndex = 2
  }
}

function changeDown() {
  if (bodyPartIndex < 2) {
    bodyPartIndex++
  } else if (bodyPartIndex === 2) {
    bodyPartIndex = 0
  }
}

// --- CHANGE CLOTHING ---
function changeRight() {
  if (bodyPartIndex === 0) {
    if (headIndex < 5) {
      headIndex++
    } else if (headIndex === 5) {
      headIndex = 0
    }
    head.src = './images/head' + headIndex + '.png'
  }

  if (bodyPartIndex === 1) {
    if (bodyIndex < 5) {
      bodyIndex++
    } else if (bodyIndex === 5) {
      bodyIndex = 0
    }
    body.src = './images/body' + bodyIndex + '.png'
  }

  if (bodyPartIndex === 2) {
    if (shoesIndex < 5) {
      shoesIndex++
    } else if (shoesIndex === 5) {
      shoesIndex = 0
    }
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeLeft() {
  if (bodyPartIndex === 0) {
    if (headIndex > 0) {
      headIndex--
    } else if (headIndex === 0) {
      headIndex = 5
    }
    head.src = './images/head' + headIndex + '.png'
  }

  if (bodyPartIndex === 1) {
    if (bodyIndex > 0) {
      bodyIndex--
    } else if (bodyIndex === 0) {
      bodyIndex = 5
    }
    body.src = './images/body' + bodyIndex + '.png'
  }

  if (bodyPartIndex === 2) {
    if (shoesIndex > 0) {
      shoesIndex--
    } else if (shoesIndex === 0) {
      shoesIndex = 5
    }
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

// ARROW KEY REFERENCE
// --- LEFT
//  "key": "ArrowLeft",
//  "keyCode": 37

// --- RIGHT
//  "key": "ArrowRight",
//  "keyCode": 39

// --- UP
//  "key": "ArrowUp",
//  "keyCode": 38

// --- DOWN
//  "key": "ArrowDown",
//  "keyCode": 40

// --- STRETCH IDEAS FOR LATER ---

// It's kind of annoying how you can't tell which body part you have selected when looking at the page. Could you highlight that in some way?

// Try adding some of your own outfits! Copy one of the images and doodle on it in the paint application of choice.

// What if there was a button you could press that could SAVE a picture of your clown to your computer to share with your friends? How on earth would you do that?
