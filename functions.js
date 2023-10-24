const buttonSquares = document.querySelector(".button-squares");
const gridContainer = document.querySelector(".grid-container");
gridContainer.classList.add("pencil-cursor");

window.addEventListener("load", () => {
  initGrid(16);
  draw();
});

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
  numberOfSquares = Number(prompt("Enter the number of squares in the grid"));
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
  }
}

function draw() {
  const square = document.querySelectorAll(".square");

  square.forEach((square) => {
    square.addEventListener("mousedown", (event) => {
      event.preventDefault();
      pressedMouse = true;
      square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseup", (event) => {
      event.preventDefault();
      pressedMouse = false;
    });
    square.addEventListener("mouseover", () => {
      if (pressedMouse) {
        square.style.backgroundColor = "black";
      }
    });
  });
}

buttonSquares.addEventListener("click", () => {
  createGrid();
  draw();
});
