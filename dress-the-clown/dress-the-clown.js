// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//
let head = document.getElementById('head')
// head.src = './images/head0.png'

let body = document.getElementById('body')
// body.src = './images/body0.png'

let shoes = document.getElementById('shoes')
// shoes.src = './images/shoes0.png'

let indexNum = 3

// head.onclick = changeHead
// body.onclick = changeBody
// shoes.onclick = changeShoes

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.key === 'ArrowRight') {
    changeHeadRight()
  } else if (e.key === 'ArrowLeft') {
    changeHeadLeft()
  } else if (e.key === 'ArrowUp') {
  } else if (e.key === 'Arrow Down') {
  }
}

function changeHeadRight() {
  if (indexNum < 5) {
    indexNum++
  } else if (indexNum === 5) {
    indexNum = 0
  }

  head.src = './images/head' + indexNum + '.png'
}

function changeHeadLeft() {
  if (indexNum > 0) {
    indexNum--
  } else if (indexNum === 0) {
    indexNum = 5
  }

  head.src = './images/head' + indexNum + '.png'
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

// function changeBody() {
//   body.src = './images/body' + indexNum + '.png'

//   if (indexNum === 5) {
//     indexNum = 0
//   } else {
//     indexNum++
//   }
// }

// function changeShoes() {
//   shoes.src = './images/shoes' + indexNum + '.png'

//   if (indexNum === 5) {
//     indexNum = 0
//   } else {
//     indexNum++
//   }
// }

//

// --- STRETCH IDEAS FOR LATER ---

// It's kind of annoying how you can't tell which body part you have selected when looking at the page. Could you highlight that in some way?

// Try adding some of your own outfits! Copy one of the images and doodle on it in the paint application of choice.

// What if there was a button you could press that could SAVE a picture of your clown to your computer to share with your friends? How on earth would you do that?
