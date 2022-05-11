// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// need an object

let unicorns = document.getElementsByClassName('inflate-an-image')
// console.log(unicorns)

// bind onclick to all img tag using for loop
for (i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflate
}

// // function to inflate the unicorn

function inflate(e) {
  // cycle to the next image when an image is clicked
  // logic to cycle through images => using loop?
  // logic to keep track of which image has been clicked and what to cycle to next using loop ??
  // logic to stop once reached last image (balloon fully inflated => unicorn-3.png) => using if statement ??
  let unicorn = e.target
  // console.log(unicorn)
}
