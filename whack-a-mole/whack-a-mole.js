// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//  --- OBJECTIVES ---
// The ability to store or get references to the cells in the HTML table.
// A function to randomly select which cell should show the mole.
// A way to show a mole in the chosen cell.

// --- A WAY TO REFERENCE THE CELL
let moleSpots = document.getElementsByTagName('td')
let spotsArr = Array.from(moleSpots)

// mole image
let moleImage = document.createElement('img')
moleImage.src = 'mole.PNG'
moleImage.style = 'height: 200px; width: 200px;'

// whack audio
let whackSound = new Audio()
whackSound.src = 'whack-audio.wav'

// function to add new mole
function newMole() {
  let newSpot = spotsArr[getRandomNum(0, 24)]
  newSpot.appendChild(moleImage)
}

moleImage.onclick = moleWhacked

// bind start button to create new mole
let startButton = document.getElementById('start-button')
startButton.onclick = newMole

// FUNCTION TO CALL WHEN CLICKED
function moleWhacked() {
  // code to target the click
  // if there is mole,
  /* then remove mole (image) from target cell
     then randomly select a cell through random logic
     then display mole (image) on the randomly selected cell */
  // if there is no mole (empty cell)
  /* then nothing happens until a cell with mole has been clicked */
  whackSound.play()
  newMole()
}

// --- RANDOM FUNCTION/LOGIC ---
// --- reference min = 0
// --- reference max = 24
function getRandomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  do {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min)
  } while (randomNum === getRandomNum.last)
  getRandomNum.last = randomNum // logic to NOT display the same number twice in a row
  return randomNum
}

//  ----- STRETCH IDEAS FOR LATER -----

// FROM MYSELF
// Add further code to button so that once button is clicked, timer will start
// Add logic so that when there is a mole already, start button will not add new mole

// FROM DEV ACADEMY

// Add a counter to the page that counts how many times you have whacked the mole!

// Add a timer to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

// Add a high score field that stores your highest score and replaces it if a new, higher score is achieved. *Note: for now, this score will be reset when you refresh your browser. For it to last, you would need some form of database, which we cover later during bootcamp.

// (DONE) Rewrite your random index function so it can't give you the same index twice in a row.
