const board = document.getElementById("board");
const userInput = 10; //placeholder value - will change later

const nOfDivs = () => {
  return board.clientWidth / userInput;
};

function createSquares(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${size}`;
  div.style.height = `${size}`;
  return div;
}

function makeBoard(userInput) {
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      board.appendChild(createSquares(nOfDivs()));
    }
  }
}

makeBoard(10);
