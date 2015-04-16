$(document).ready(function() {
  var counter = 1;
  var piece_color

  // find empty cell
  var nextEmptyRow = function(columnNumber){
    // rgb(255, 255, 255) is white
    for (var i = 0; i < $('tr').length; i++) {
      $('.column1')[i].children.css('background-color')
    }


  }

  $(".column1").on("click", function(){
    if (counter % 2 === 0){
      piece_color = "black"
    } else {
      piece_color = "red"
    };
    debugger
    //$(".row8 .column1 .cell").css("background", piece_color);
    // .attr('class') on this to get class and pass to row_finder
    counter++;
  });


});
