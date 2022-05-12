// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//  --- OBJECTIVES ---
// The ability to store or get references to the cells in the HTML table.
// A function to randomly select which cell should show the mole.
// A way to show a mole in the chosen cell.

// --- A WAY TO REFERENCE THE CELL
let cells = document.getElementsByTagName('td')
// console.log(cells)

// code to bind onclick

// --- RANDOM FUNCTION/LOGIC
// --- reference min = 0
// --- reference max = 24
function randomIndexNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  do {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min)
  } while (randomNum === randomIndexNum.last) // logic to not display the same number twice in a row
  randomIndexNum.last = randomNum
  return randomNum
}

// FUNCTION TO CALL WHEN CLICKED
function moleWhacked(e) {
  // code to target the click
  // if there is mole,
  // then remove mole (image) from target cell
  // then randomly select a cell through random logic
  // then display mole (image) on the randomly selected cell
  // if there is no mole (empty cell)
  // then nothing happens until a cell with mole has been clicked

  let cell = e.target
}

//
//

// relative path to mole image
// /whack-a-mole/mole.PNG

//  ----- STRETCH -----

// Add a start button to start game which once clicked, timer will start

// Add a counter to the page that counts how many times you have whacked the mole!

// Add a timer to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

// Add a high score field that stores your highest score and replaces it if a new, higher score is achieved. *Note: for now, this score will be reset when you refresh your browser. For it to last, you would need some form of database, which we cover later during bootcamp.

// Rewrite your random index function so it can't give you the same index twice in a row.
