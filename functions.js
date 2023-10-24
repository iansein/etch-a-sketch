const buttonSquares = document.querySelector(".button-squares");
const gridContainer = document.querySelector(".grid-container");
let pressedMouse;
let numberOfSquares = 16;

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

buttonSquares.addEventListener("click", () => {
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
  const square = document.querySelectorAll(".square");
  document.addEventListener("mousedown", (event) => {
    event.preventDefault();
    pressedMouse = true;
  });
  document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    pressedMouse = false;
  });
  square.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let mouseOver = true;
      if (pressedMouse) {
        square.style.backgroundColor = "black";
      }
    });
  });
});
