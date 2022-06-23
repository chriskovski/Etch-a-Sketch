const container = document.getElementById("grid");
const resetBtn = document.getElementById("reset");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const rainbowBtn = document.getElementById("rainbow");

function colorPicker(){

}

function createGrid(gridSize){
  for (i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    cell.style.border = "1px solid black";
    container.appendChild(cell);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
  const gridCells = document.querySelectorAll('.cells');
  gridCells.forEach(cell => cell.addEventListener("mouseover", function(){
    cell.style.backgroundColor = "blue";
  }))
}

function resetGrid(){
  const userGrid = prompt("How many Cells do you want? (1-100)");

  if (userGrid >= 1 && userGrid <= 100){
    const gridCells = document.querySelectorAll(".cells");
    gridCells.forEach(gridCell => gridCell.remove());
    createGrid(userGrid);
  }
  else {
    alert("Choose a number between 1-100!");
  }
}

window.onload = createGrid(16);