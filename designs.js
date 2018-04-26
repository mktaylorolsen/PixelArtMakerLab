var grid, row, cell;


//makes a grid from the given dimensions
grid = ("#pixelCanvas");
// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight,gridWidth) {
  //iterates over the height
  for(let i = 0; i < gridHeight; i++){
    //creates a row in the grid
    row = grid.append('<tr>');
 	//iterates over the width
  	for(let x = 0; x < gridWidth; x++){
      //creates a cell in the row
      cell = row.append('<td>');
    }
  }
  changeColor();
}


//runs the getDimensions function when the submit button is clicked.
sizePicker = $('#sizePicker');
sizePicker.on("submit", getDimensions);
//function gets the dimensions that were inputted by the user and puts them into the makeGrid function
function getDimensions(event) {
    event.preventDefault();
    var gridHeight = $("#inputHeight").val;
   	var gridWidth = $("#inputWidth").val;
	  makeGrid(gridHeight,gridWidth);
}


//add click events to all cells
function changeColor() {
  var cells = $('td');
  cells.each(function(){
    $(this).on( 'click', function( evt ) {
        $( evt.target ).css( 'background', newColor );
    });
  })


//selects the new color
var colorBox = $("#colorPicker");
var newColor = colorBox.val();
$colorBox.on("input", function() {
  newColor = colorBox.val();
  }, false);
