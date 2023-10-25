const buttonSquares = document.querySelector(".button-squares");
const buttonClean = document.querySelector(".button-clean");
const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");
const eraser = document.querySelector(".eraser");
const pencil = document.querySelector(".pencil");
const rainbow = document.querySelector(".rainbow");
const rainbowColors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
];
let eraserPressed = false;
let rainbowPressed = false;
gridContainer.classList.add("pencil-cursor");

function initGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    let squareContainer = document.createElement("div");
    squareContainer.classList.add("square-container");
    gridContainer.appendChild(squareContainer);
    for (let j = 0; j < numberOfSquares; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      squareContainer.appendChild(square);
    }
  }
}

function createGrid() {
  numberOfSquares = Number(
    prompt("Enter the number of squares in the grid (MIN 1; MAX 100)")
  );
  if (numberOfSquares > 0 && numberOfSquares <= 100) {
    let square = document.querySelectorAll(".square");
    let squareContainer = document.querySelectorAll(".square-container");

    square.forEach((square) => {
      square.remove();
    });

    squareContainer.forEach((squareContainer) => {
      squareContainer.remove();
    });

    initGrid(numberOfSquares);
    pencil.style.backgroundColor = "purple";
    eraser.style.backgroundColor = "transparent";
  }
}

function draw() {
  const square = document.querySelectorAll(".square");
  let pressedMouse;

  square.forEach((square) => {
    square.addEventListener("mousedown", handleMouseDown);
    square.addEventListener("mouseup", handleMouseUp);
    square.addEventListener("mouseover", handleMouseOver);
  });

  function handleMouseDown(event) {
    event.preventDefault();
    pressedMouse = true;
    if (eraserPressed) {
      this.style.backgroundColor = "white";
    } else if (rainbowPressed) {
      this.style.backgroundColor = rainbowSquares();
    } else {
      this.style.backgroundColor = colorPicker.value;
    }
  }

  function handleMouseUp(event) {
    event.preventDefault();
    pressedMouse = false;
  }

  function handleMouseOver() {
    if (pressedMouse && !eraserPressed && !rainbowPressed) {
      this.style.backgroundColor = colorPicker.value;
    } else if (pressedMouse && eraserPressed) {
      this.style.backgroundColor = "white";
    } else if (pressedMouse && rainbowPressed) {
      this.style.backgroundColor = rainbowSquares();
    }
  }
}

function rainbowSquares() {
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
}

window.addEventListener("load", () => {
  initGrid(16);
  draw();
});

buttonClean.addEventListener("click", () => {
  let square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

buttonSquares.addEventListener("click", () => {
  createGrid();
  draw();
});

eraser.addEventListener("click", () => {
  eraserPressed = true;
  rainbowPressed = false;
  eraser.style.backgroundColor = "purple";
  pencil.style.backgroundColor = "transparent";
  rainbow.style.backgroundColor = "transparent";
});

pencil.addEventListener("click", () => {
  eraserPressed = false;
  rainbowPressed = false;
  draw();
  pencil.style.backgroundColor = "purple";
  eraser.style.backgroundColor = "transparent";
  rainbow.style.backgroundColor = "transparent";
});

rainbow.addEventListener("click", () => {
  eraserPressed = false;
  rainbowPressed = true;
  draw();
  rainbow.style.backgroundColor = "purple";
  eraser.style.backgroundColor = "transparent";
  pencil.style.backgroundColor = "transparent";
});
