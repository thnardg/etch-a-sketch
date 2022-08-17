const board = document.getElementById("board");
const userInput = 100; //placeholder value - will change later

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
      board.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
      board.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
      board.appendChild(createSquares(nOfDivs()));
    }
  }
}

makeBoard(userInput);
