const currentPlayerSymbol = "x";
const squareValues = ["", "", "", "", "", "", "", "", ""];
const board = document.getElementById("tic-tac-toe-board");
// Create global functions here so that listeners can call them below
// const turnFinder = function (){
//   let count = 0;
//   squareValues.forEach(square => {
//     if(square !== "") {
//       count++
//     }
// if (count % 2 === 0){
//   return true
// } return false
//   });
  let count = 0;
  squareValues.forEach(square => {
    if (square !== ""){
      count++;
    }
   
  })
   if (count % 2 === 0) {
  console.log(true)

} else {
  console.log(false)
}
  
  // If whole thing is empty, it's player 1
  //  if there is an odd number of empty spaces = player 1
// }
window.addEventListener("DOMContentLoaded", (event) => { 
  let currentPlayerSymbol = document.createElement("img" )
  board.addEventListener("click", (event) => {
    let target = event.target;
    let targetID = target.getAttribute("id");
    let clickIndex = targetID.split("-")[1];
  let turn = turnFinder()
  console.log(turn);

    // let indexOfDash = targetID.indexOf("-");
    // let idNumber = targetID.slice(indexOfDash + 1);
    if (!targetID.includes("square-") || squareValues[clickIndex] !== "" ) {
      console.log("Nothing happened!");
      return
    } else{
      if (turnFinder() === true ){
        squareValues[clickIndex] = "X" 
      } else{
        squareValues[clickIndex] = "O" 
      }
    }
    console.log(squareValues)
  });
});


// There must not be a play in that square, so:
// Programmatically create an img element, set its source to
// appropriate value from the requirements by using the value in currentPlayerSymbol,
// and append the img element to the event target.

// Store the value of currentPlayerSymbol in the corresponding slot in the squareValues array.
// If the currentPlayerSymbol is "x", then set it to "o".Otherwise, set currentPlayerSymbol to "x".
//     Why
