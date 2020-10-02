window.addEventListener("DOMContentLoaded", (event) => {
  const currentPlayerSymbol = "x";
  const squareValues = ["", "", "", "", "", "", "", "", ""];
  const board = document.getElementById("tic-tac-toe-board");
  board.addEventListener("click", (event) => {
    let target = event.target;
    let targetID = target.getAttribute("id");
    // let indexOfDash = targetID.indexOf("-");
    // let idNumber = targetID.slice(indexOfDash + 1);
    if (!targetID.includes("square-")) {
      console.log("Nothing happened!");
    } else {
      console.log(targetID.split("-")[1]);
    }
  });
});

//     In the click event handler, inspect the target of the event.Ignore the event if
// its id does not begin with "square-".

// If the event target's id attribute does begin with "square-",
// then parse the number after "square-" using the Number.parseInt method.

// If the value in the squareValues array for the index of the
// parsed number is not an empty string, then ignore the event.

// There must not be a play in that square, so:
// Programmatically create an img element, set its source to
// appropriate value from the requirements by using the value in currentPlayerSymbol,
// and append the img element to the event target.

// Store the value of currentPlayerSymbol in the corresponding slot in the squareValues array.
// If the currentPlayerSymbol is "x", then set it to "o".Otherwise, set currentPlayerSymbol to "x".
//     Why
