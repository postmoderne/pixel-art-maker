// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
/*
function makeGrid() {

// Your code goes here!

}
*/
// When size is submitted and color picked by the user, call makeGrid() and colorIn() 
/*
$('#sizePicker').submit(function(evt){
	 evt.preventDefault();
	 $('#pixelCanvas').children().remove();
	 makeGrid();
	 colorIn();
 });
 
 // Select size input 
 function makeGrid() { 
	var row;
	var column;
	var table;
	
	row = $('#inputWidth').val();
	column =$('#inputHeight').val();
	table = $('#pixelCanvas');
 // Create rows  
	for (var x =1; x <= row; x++){
		table.append('<tr></tr>');
		//Create columns
		for(var y =1; y <= column; y++){
			$('tr').last().append('<td></td>');
		}
	}
 } 
 //Select a color input
function colorIn(){
	var colorSelector;
	colorSelector = $('#colorPicker').val();
	$('td').click(function(){
		$(this).css('background','white');
	});
}
 */

// When size is submitted by the user, call makeGrid()
function makeGrid(rows, columns) {
// Your code goes here!
for(let i=1; i<=rows; i++){
//selects the table and appends table rows depending on the user input
    const tab = $('table').append('<tr></tr>');
}
//selects the tag table row<tr> to append the column<td>
    for(let i=1; i<=columns; i++){ 
        $('tr').append('<td></td>');
    }
}

// When the height and width size is submitted by the user, calls makeGrid()
$('form').submit(function(event){
    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();

// clears the DOM to append the next <tr><td>
    $('tr').remove();
    //calls the makeGrid() function
    makeGrid(rows, columns);
    event.preventDefault();
});

//Get the color value as the user input changes
$('#colorPicker').change(function(event){
    let gridColor = $(this).val();
    $('td').click(function(event){
        $(this).css("background-color", gridColor); 
    });
        
    event.preventDefault();
});