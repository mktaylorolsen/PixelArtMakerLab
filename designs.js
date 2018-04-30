//BUILDING GRID
var grid, row, cell, rowInsert, cellInsert;

//makes a grid from the given dimensions
grid = $('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight,gridWidth) {
  //iterates over the height
  for(i = 0; i < gridHeight; i++){
    //creates a row in the grid
    rowInsert = ('row_'+i);
    row = grid.append('<tr class = '+ rowInsert + ' >');
 	  //iterates over the width
  }
  $('tr').each(function (){
    for(x = 0; x < gridWidth; x++){
      //creates a cell in the row
      cellInsert = ('cell_'+ x);
      cell = $(this).append('<td class = '+ cellInsert + ' >');
      $('td').css('background-color', '#0000');
    }
  });
  colorChange();
}

//runs the getDimensions function when the submit button is clicked.
var sizePicker = $('#sizePicker');
sizePicker.submit(getDimensions);
//function gets the dimensions that were inputted by the user and puts them into the makeGrid function
function getDimensions(e) {
    e.preventDefault();
    //clears the grid
    $('table').empty()
    var gridHeight = $("#inputHeight").val();
   	var gridWidth = $("#inputWidth").val();
	  makeGrid(gridHeight,gridWidth);
}


//GETS COLOR
//set a value for the selected color
var selectedColor = $('#colorPicker').val();
console.log(selectedColor);
//create a function for changing the value of the colorPicker
$('#colorPicker').on("input",function(evt){
  evt.preventDefault();
  selectedColor = $(evt.target).val()
  console.log(selectedColor);
});

//add a click event to all cells
function colorChange(){
  $('td').each(function (){
    $(this).on("click",function(){
      $(this).css('background-color', selectedColor);
      console.log("this cell has been clicked and is now" + selectedColor)
    });
  });
}
