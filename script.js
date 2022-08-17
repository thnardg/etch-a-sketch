const board = document.getElementById("board");
const userInput = 10; //placeholder value - will change later

window.onload(makeBoard());

function makeBoard(userInput) {
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      board.appendChild(makeDiv(board.clientWidth / userInput));
    }
  }
}

function createSquares(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}
