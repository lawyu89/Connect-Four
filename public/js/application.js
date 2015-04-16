$(document).ready(function() {
  var counter = 1;
  var piece_color

  // find empty cell
  var nextEmptyRow = function(columnNumber){
    // rgb(255, 255, 255) is white
    column = $('.'+columnNumber)
    for (var i = 0; i < column.length; i++) {
      current = column[i].children
      if ($(current).css('background-color') !== "rgb(255, 255, 255)") {
        return $(column[i-1].children)
      } else if(i===column.length -1) {
        return $(current)
      }
    }


  }

  $("td").on("click", function(){
    if (counter % 2 === 0){
      piece_color = "black"
    } else {
      piece_color = "red"
    };
    column_num = $(this).attr('class')
    //$(".row8 .column1 .cell").css("background", piece_color);
    // .attr('class') on this to get class and pass to row_finder
    available_slot = nextEmptyRow(column_num)
    $(available_slot).css('background-color',piece_color)
    counter++;
  });


});
