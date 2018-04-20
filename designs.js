//makes a grid from the given dimensions
let grid = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight,gridWidth) {
  //iterates over the height
  for(let i = 0; i < gridHeight; i++){
    //creates a row in the grid
    const row = document.createElement("tr");
 	//iterates over the width
  	for(let x = 0; x < gridWidth; x++){
      //creates a cell in the row
      const cell = document.createElement("td");
      //add the cell into the row
      row.appendChild(cell);
    }
    //add the row into the grid
    grid.appendChild(row);
  }
  changeColor();
}


//runs the getDimensions function when the submit button is clicked.
document.getElementById("sizePicker").addEventListener("submit", getDimensions);
//function gets the dimensions that were inputted by the user and puts them into the makeGrid function
function getDimensions() {
    event.preventDefault();
    const gridHeight = document.getElementById("inputHeight").value;
   	const gridWidth = document.getElementById("inputWidth").value;
	  makeGrid(gridHeight,gridWidth);
}


//add click events to all cells
function changeColor() {
  const cells = document.getElementsByTagName('td');
  for (let x = 0; x < cells.length; x++) {
    cells[x].addEventListener("click",  function(cell) {
      let selectedCell = cell.target;
      selectedCell.style.backgroundColor = newColor;
    });
  }
}

//selects the new color
const colorBox = document.getElementById("colorPicker");
let newColor = colorBox.value;
colorBox.addEventListener("input", function() {
  newColor = colorBox.value;
  }, false);
