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
// console.log(spotsArr)

// code to bind onclick
// for (i = 0; i < spotsArr.length; i++) {
//   spotsArr[i].onclick = moleWhacked
// }

// FUNCTION TO CALL WHEN CLICKED
function moleWhacked(e) {
  // code to target the click
  // if there is mole,
  /* then remove mole (image) from target cell
     then randomly select a cell through random logic
     then display mole (image) on the randomly selected cell */
  // if there is no mole (empty cell)
  /* then nothing happens until a cell with mole has been clicked */
  // console.log('WHACKED!')
  // let spot = e.target
  // const moleImgTag = document.createElement('img')
  // const spot = document.createElement('td')
  // spot.appendChild(moleImgTag)
}

// --- SELECT CELL AND ATTACH IMG
function newMole() {
  let moleImgTag = document.createElement('img')
  moleImgTag.classList.add = 'mole'
  moleImgTag.src = 'mole.PNG'
  moleImgTag.style = 'height: 200px; width: 200px;'
  newSpot = spotsArr[getRandomNum(0, 24)]
  newSpot.appendChild(moleImgTag)
}

// --- RANDOM FUNCTION/LOGIC
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

// --- REFERENCE mole image  tag
// <img src="mole.png" style="height: 200px auto; width: 200px auto"></img>

//  ----- STRETCH IDEAS FOR LATER -----

// Add a start button to start game which once clicked, timer will start

// Add a counter to the page that counts how many times you have whacked the mole!

// Add a timer to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

// Add a high score field that stores your highest score and replaces it if a new, higher score is achieved. *Note: for now, this score will be reset when you refresh your browser. For it to last, you would need some form of database, which we cover later during bootcamp.

// Rewrite your random index function so it can't give you the same index twice in a row.
