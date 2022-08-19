// DOM Helpers.
const grid = document.getElementById("grid");
const reset = document.getElementById("reset-btn");
const twentyBtn = document.getElementById("20-btn");
const thirtyBtn = document.getElementById("30-btn");
const fortyBtn = document.getElementById("40-btn");
const rainbow = document.getElementById("rainbow-btn");
const color = document.getElementById("color-btn");
const eraser = document.getElementById("eraser-btn");
const colorPicker = document.getElementById("color-picker");

// Set default values.
let gridSize = 20;
let activeMode = "solidColor";

// Tool buttons' actions.
reset.onclick = () => resetGrid();
rainbow.onclick = () => changeMode("rainbow");
color.onclick = () => changeMode("solidColor");
eraser.onclick = () => changeMode("eraser");
colorPicker.onclick = () => changeMode("solidColor");

// Grid size buttons.
twentyBtn.onclick = () => {
  grid.innerHTML = "";
  gridSize = 20;
  makeGrid(gridSize);
};
thirtyBtn.onclick = () => {
  grid.innerHTML = "";
  gridSize = 30;
  makeGrid(gridSize);
};
fortyBtn.onclick = () => {
  grid.innerHTML = "";
  gridSize = 40;
  makeGrid(gridSize);
};

// Divide the grid's width by the user's input to calculate the height × width of each cell/square.
const calculateCellSize = () => {
  return grid.clientWidth / gridSize;
};

// Create a cell/square.
const generateCells = () => {
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

// Add painting movement with 'mouseover' event and set the background color.
grid.addEventListener("mouseover", (event) => {
  if (event.buttons === 1 && event.target.matches(".cell")) {
    event.preventDefault();
    event.target.classList.add("active");
    if (event.target.matches(".cell.active")) {
      event.target.style.backgroundColor = changeColor();
    }
  }
});

// Active paint mode.
function changeMode(colorMode) {
  activeMode = colorMode;
}

// Checks which painting mode is active and selects the correct colors.
function changeColor() {
  let color = colorPicker.value;
  if (activeMode === "rainbow") {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
  } else if (activeMode === "eraser") {
    return `#ffffff`;
  } else {
    return color;
  }
}

// Reset and create a new grid.
const resetGrid = () => {
  grid.innerHTML = "";
  activeMode = "solidColor";
  makeGrid(gridSize);
};

window.onload = () => {
  makeGrid(gridSize);
  activeMode = "solidColor";
};
