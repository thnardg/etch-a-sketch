// DOM Helpers.
const grid = document.getElementById("grid");
const reset = document.getElementById("reset-btn");
const twentyBtn = document.getElementById("20-btn");
const thirtyBtn = document.getElementById("30-btn");
const fortyBtn = document.getElementById("40-btn");

let gridSize = 20;

// Grid size buttons.
twentyBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  gridSize = 20;
  console.log("twenty");
  makeGrid(gridSize);
});
thirtyBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  gridSize = 30;
  console.log("thirty");
  makeGrid(gridSize);
});
fortyBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  gridSize = 40;
  console.log("forty");
  makeGrid(gridSize);
});

// Divide grid width (500px) by the number chosen by the user to generate the [height × width] of each cell/square.
const calculateCellSize = () => {
  return grid.clientWidth / gridSize;
};

// Create a cell/square.
const generateCells = (dimensions) => {
  const div = document.createElement("div");
  div.classList.add("cell");
  return div;
};

// Make the grid using a loop for columns and a loop for rows.
const makeGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let j = 0; j < gridSize; j++) {
      grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
      grid.appendChild(generateCells(calculateCellSize()));
    }
  }
};

// Add painting movement with mouseover event.
grid.addEventListener("mouseover", (event) => {
  if (event.buttons == 1 && event.target.matches(".cell")) {
    event.preventDefault();
    event.target.classList.add("active");
  }
});

// Reset and create a new grid.
reset.addEventListener("click", () => {
  grid.innerHTML = "";
  makeGrid(gridSize);
});

makeGrid(gridSize);
