// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('unicorns')
// console.log(unicorns)

// bind onclick to all img tag using for loop
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflate
}

// function to inflate the balloon
function inflate(e) {
  // logic to cycle to the next image
  // logic to alert when last image is reached (balloon fully inflated)
  let newImg = e.target
  // console.log(newImg.src)
  if (newImg.src.match('./images/unicorn-0.png')) {
    newImg.src = './images/unicorn-1.png'
  } else if (newImg.src.match('./images/unicorn-1.png')) {
    newImg.src = './images/unicorn-2.png'
  } else if (newImg.src.match('./images/unicorn-2.png')) {
    newImg.src = './images/unicorn-3.png'
  } else if (newImg.src.match('./images/unicorn-3.png')) {
    console.log('Balloon fully inflated')
    alert('Unicorn number ' + e.target.id + ' says thank you')
  }
}
