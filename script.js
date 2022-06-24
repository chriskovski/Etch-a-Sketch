const container = document.getElementById("grid");
const resetBtn = document.getElementById("reset");
const blackBtn = document.getElementById("black");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const eraserBtn = document.getElementById("eraser");

function createGrid(gridSize){
  for (i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    cell.style.border = "1px solid black";
    container.appendChild(cell);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
  let color = "black";
  const gridCells = document.querySelectorAll('.cells');
  gridCells.forEach(cell => cell.addEventListener("mouseover", function(){
    if(blackBtn.checked == true){
      cell.style.backgroundColor = "black";
    }else if (blueBtn.checked == true){
      cell.style.backgroundColor = "blue";
    }else if (redBtn.checked == true){
      cell.style.backgroundColor = "red";
    }else if (eraserBtn.checked == true){
      cell.style.backgroundColor = "white";
    }
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