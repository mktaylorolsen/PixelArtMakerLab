var grid, row, cell;

//makes a grid from the given dimensions
grid = ("#pixelCanvas");
// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight,gridWidth) {
  //iterates over the height
  for(i = 0; i < gridHeight; i++){
    //creates a row in the grid
    row = grid.append('<tr></tr>');
  }
 	//iterates over the width
  for(x = 0; x < gridWidth; x++){
    //creates a cell in the row
    cell = row.append('<td></td>');
  }
  changeColor();
}


//runs the getDimensions function when the submit button is clicked.
var sizePicker = $('#sizePicker');
sizePicker.on("click", getDimensions);
//function gets the dimensions that were inputted by the user and puts them into the makeGrid function
function getDimensions(event) {
    event.preventDefault();
    var gridHeight = $("#inputHeight").val();
   	var gridWidth = $("#inputWidth").val();
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
