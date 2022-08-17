const grid = document.getElementById("grid");
const userInput = 50; //placeholder value - will change later

// Divide grid width (600px) by the number chosen by the user to generate the [height × width] of each cell/square.
const calculateCellSize = () => {
  return grid.clientWidth / userInput;
};

// Create a cell/square.
function generateCells(dimensions) {
  const div = document.createElement("div");
  div.classList.add("cell");
  return div;
}

// Make the grid using a loop for columns and a loop for rows.
function makeGrid(userInput) {
  for (let i = 0; i < userInput; i++) {
    grid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    for (let j = 0; j < userInput; j++) {
      grid.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
      grid.appendChild(generateCells(calculateCellSize()));
    }
  }
}

makeGrid(userInput);
