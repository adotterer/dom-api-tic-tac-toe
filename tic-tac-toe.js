const currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
const board = document.getElementById("tic-tac-toe-board");
let buttonsCollection = document.querySelectorAll("button");
let winnerBanner = document.getElementById("game-status");
let everySquare = document.querySelectorAll(".square");
let xIMG =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
let oIMG =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

// Create global functions here so that listeners can call them below

const turnFinder = function () {
  let count = 0;
  squareValues.forEach((square) => {
    if (square !== "") {
      count++;
    }
  });
  if (count % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

let endGame = () => {
  squareValues = [
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
    "GAME OVER",
  ];
};
let checkGameStatus = () => {
  let row1 = squareValues[0].concat(squareValues[1]).concat(squareValues[2]);
  let row2 = squareValues[3].concat(squareValues[4]).concat(squareValues[5]);
  let row3 = squareValues[6].concat(squareValues[7]).concat(squareValues[8]);
  let diag1 = squareValues[0].concat(squareValues[4]).concat(squareValues[8]);
  let diag2 = squareValues[2].concat(squareValues[4]).concat(squareValues[6]);
  let column1 = squareValues[0].concat(squareValues[3]).concat(squareValues[6]);
  let column2 = squareValues[1].concat(squareValues[4]).concat(squareValues[7]);
  let column3 = squareValues[2].concat(squareValues[5]).concat(squareValues[8]);
  let winner = "";
  let comboArr = [row1, row2, row3, diag1, diag2, column1, column2, column3];
  for (let i = 0; i < comboArr.length; i++) {
    if (comboArr[i] === "XXX") {
      winner = "X";
    } else if (comboArr[i] === "OOO") {
      winner = "O";
    } else {
      console.log("no winner (yet)");
    }
  }
  if (winner === "X") {
    winnerBanner.innerHTML = "X is the winner";
    endGame();
    return;
  } else if (winner === "O") {
    winnerBanner.innerHTML = "O is the winner";
    endGame();
    return;
  } else {
    if (squareValues.includes("")) {
      return;
    } else {
      winnerBanner.innerHTML = "There was no winner";
    }
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  // RESET GAME

  buttonsCollection[0].addEventListener("click", (event) => {
    squareValues = ["", "", "", "", "", "", "", "", ""];
    [...everySquare].forEach((square) => {
      square.innerHTML = "";
    });
    winnerBanner.innerHTML = "";
  });
  buttonsCollection[1].addEventListener("click", (event) => {
    squareValues = ["", "", "", "", "", "", "", "", ""];
    [...everySquare].forEach((square) => {
      square.innerHTML = "";
    });
    winnerBanner.innerHTML = "";
  });
  //
  // When the user clicks, first we check if they clicked in a valid area
  // Input the location of the player's symbol into the sqaureValues array

  // Now, add the visual x and o to the respective div in the HTML
  // grab the HTML div, for appending or innerHTML
  // setattribute to an x or o, then add it to div
  board.addEventListener("click", (event) => {
    let target = event.target;
    let targetID = target.getAttribute("id");
    let clickIndex = targetID.split("-")[1];
    let turn = turnFinder();

    if (!targetID.includes("square-") || squareValues[clickIndex] !== "") {
      console.log("Nothing happened!");
      return;
    }
    if (turn) {
      squareValues[clickIndex] = "X";
      let currentPlayerSymbol = document.createElement("img");
      let xIconDiv = document.getElementById(`square-${clickIndex}`);
      currentPlayerSymbol.setAttribute("src", xIMG);
      xIconDiv.appendChild(currentPlayerSymbol);
      checkGameStatus();
    } else {
      squareValues[clickIndex] = "O";
      let currentPlayerSymbol = document.createElement("img");
      let oIconDiv = document.getElementById(`square-${clickIndex}`);
      currentPlayerSymbol.setAttribute("src", oIMG);
      oIconDiv.appendChild(currentPlayerSymbol);
      checkGameStatus();
    }

    console.log(squareValues);
  });
});

// There must not be a play in that square, so:
// Programmatically create an img element, set its source to
// appropriate value from the requirements by using the value in currentPlayerSymbol,
// and append the img element to the event target.

// Store the value of currentPlayerSymbol in the corresponding slot in the squareValues array.
// If the currentPlayerSymbol is "x", then set it to "o".Otherwise, set currentPlayerSymbol to "x".
//     Why
