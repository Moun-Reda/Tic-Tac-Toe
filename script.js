const body = document.body;
const cells = document.querySelectorAll(".cell");
const playerX = document.getElementById("playerX");
const playerO = document.getElementById("playerO");
let tiltle = document.querySelector(".title");

let playerXScore = document.getElementById("playerX");
let playerOScore = document.getElementById("playerO");

playerXScore.innerHTML = localStorage.getItem("playerXScore") || "0";
playerOScore.innerHTML = localStorage.getItem("playerOScore") || "0";

let turn = "x";

function closeModal() {
  document.getElementById("welcomeModal").style.display = "none";
}

function game(indx) {
  let cell = document.getElementsByClassName("cell");
  if (turn === "x" && cell[indx].innerHTML === "") {
    cell[indx].innerHTML = "X";
    turn = "o";
    tiltle.innerHTML = "Player O's Turn";

    checkWinner();
  } else if (turn === "o" && cell[indx].innerHTML === "") {
    cell[indx].innerHTML = "O";
    turn = "x";
    tiltle.innerHTML = "Player X's Turn";
    checkWinner();
  }
}

function updateData(a, b, c) {
  if (a.innerHTML === "X") {
    tiltle.innerHTML = "Player X Wins!";
    let newScore = parseInt(playerXScore.innerHTML) + 1;
    playerXScore.innerHTML = newScore.toString();
    localStorage.setItem("playerXScore", newScore);
  } else if (a.innerHTML === "O") {
    tiltle.innerHTML = "Player O Wins!";
    let newScore = parseInt(playerOScore.innerHTML) + 1;
    playerOScore.innerHTML = newScore.toString();
    localStorage.setItem("playerOScore", newScore);
  }

  a.style.backgroundColor = "lightpink";
  b.style.backgroundColor = "lightpink";
  c.style.backgroundColor = "lightpink";
}

function checkWinner() {
  let cell = document.getElementsByClassName("cell");
  if (
    cell[0].innerHTML == cell[1].innerHTML &&
    cell[0].innerHTML == cell[2].innerHTML &&
    cell[0].innerHTML !== ""
  ) {
    updateData(cell[0], cell[1], cell[2]);
  } else if (
    cell[3].innerHTML == cell[4].innerHTML &&
    cell[3].innerHTML == cell[5].innerHTML &&
    cell[3].innerHTML !== ""
  ) {
    updateData(cell[3], cell[4], cell[5]);
  } else if (
    cell[6].innerHTML == cell[7].innerHTML &&
    cell[6].innerHTML == cell[8].innerHTML &&
    cell[6].innerHTML !== ""
  ) {
    updateData(cell[6], cell[7], cell[8]);
  } else if (
    cell[0].innerHTML == cell[3].innerHTML &&
    cell[0].innerHTML == cell[6].innerHTML &&
    cell[0].innerHTML !== ""
  ) {
    updateData(cell[0], cell[3], cell[6]);
  } else if (
    cell[1].innerHTML == cell[4].innerHTML &&
    cell[1].innerHTML == cell[7].innerHTML &&
    cell[1].innerHTML !== ""
  ) {
    updateData(cell[1], cell[4], cell[7]);
  } else if (
    cell[2].innerHTML == cell[5].innerHTML &&
    cell[2].innerHTML == cell[8].innerHTML &&
    cell[2].innerHTML !== ""
  ) {
    updateData(cell[2], cell[5], cell[8]);
  } else if (
    cell[0].innerHTML == cell[4].innerHTML &&
    cell[0].innerHTML == cell[8].innerHTML &&
    cell[0].innerHTML !== ""
  ) {
    updateData(cell[0], cell[4], cell[8]);
  } else if (
    cell[2].innerHTML == cell[4].innerHTML &&
    cell[2].innerHTML == cell[6].innerHTML &&
    cell[2].innerHTML !== ""
  ) {
    updateData(cell[2], cell[4], cell[6]);
  } else if (Array.from(cell).every((c) => c.innerHTML !== "")) {
    tiltle.innerHTML = "It's a Draw!";

    turn = "x";
  }
}
function restartGame() {
  if (playerOScore.innerHTML === "5") {
    window.alert("End Game... Player O won!");
    playerOScore.innerHTML = "0";
    playerXScore.innerHTML = "0";
    localStorage.setItem("playerOScore", "0");
    localStorage.setItem("playerXScore", "0");
  } else if (playerXScore.innerHTML === "5") {
    window.alert("End Game... Player X won!");
    playerOScore.innerHTML = "0";
    playerXScore.innerHTML = "0";
    localStorage.setItem("playerOScore", "0");
    localStorage.setItem("playerXScore", "0");
  }
}
function newGame() {
  tiltle.innerHTML = "Tic-Tac-Toe";
  let cell = document.getElementsByClassName("cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
    cell[i].style.backgroundColor = null;
  }
  turn = "x";

  restartGame();
}
