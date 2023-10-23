const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
  let squareContainer = document.createElement("div");
  squareContainer.classList.add("square-container");
  gridContainer.appendChild(squareContainer);
  for (let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    squareContainer.appendChild(square);
  }
}
