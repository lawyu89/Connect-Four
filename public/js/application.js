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

// stringify
  $("button").on("click", function(){
    var winner =''
    if (counter%2 === 0){
      winner = "Player 1"
    } else {
      winner = "Player 2"
    }

    stringifyBoard = ""
    var board = $('.cell')
    for (var i = 0; i < board.length; i++) {
      var cell = $(board[i])
      if ( cell.css('background-color') === "rgb(255, 255, 255)"){
        stringifyBoard += "0"  //white
      } else if ( cell.css('background-color') === "rgb(0, 0, 0)"){
        stringifyBoard += "1" //black
      } else if ( cell.css('background-color') === "rgb(255, 0, 0)"){
        stringifyBoard += "2" //red
      }

    }

    checkColumn = [[],[],[],[],[],[],[]]
    checkRow = [[],[],[],[],[],[]]
    checkLDiagonal = [[],[],[],[],[],[]]
    checkRDiagonal = [[],[],[],[],[],[]]

    var i = 0;
    while (i < stringifyBoard.length){
      checkColumn[i%7].push(stringifyBoard[i]);
      checkRow[Math.floor(i/7)].push(stringifyBoard[i]);
      if (i !== 4 && i !== 5 && i !== 6 && i !== 12 && i !== 13 && i !== 20 && i !== 21 && i !== 28 && i !== 29 && i !== 35 && i !== 36 && i !== 37) {
        if (i % 8 < 4) {
          checkLDiagonal[i % 8].push(stringifyBoard[i]);
        } else {
          checkLDiagonal[(i % 8) - 2].push(stringifyBoard[i]);
        }
      }
      if (i !== 0 && i !== 1 && i !== 2 && i !== 7 && i !== 8 && i !== 14 && i !== 27 && i !== 33 && i !== 34 && i !== 39 && i !== 40 && i !== 41) {
        checkRDiagonal[i % 6].push(stringifyBoard[i]);
      }
      i++;
    }

    for (var i = 0; i < checkColumn.length; i++) {
      if (checkColumn[i].join('').search('1111') >= 0 || checkColumn[i].join('').search('2222') >= 0) {
        alert(winner +' is the winner');
        location.reload()
      }
    }
    for (var i = 0; i < checkRow.length; i++) {
      if (checkRow[i].join('').search('1111') >= 0 || checkRow[i].join('').search('2222') >= 0) {
        alert(winner +' is the winner');
        location.reload()
      }
    }
    for (var i = 0; i < checkLDiagonal.length; i++) {
      if (checkLDiagonal[i].join('').search('1111') >= 0 || checkLDiagonal[i].join('').search('2222') >= 0) {
        alert(winner +' is the winner');
        location.reload()
      }
    }
    for (var i = 0; i < checkRDiagonal.length; i++) {
      if (checkRDiagonal[i].join('').search('1111') >= 0 || checkRDiagonal[i].join('').search('2222') >= 0) {
        alert(winner +' is the winner');
        location.reload()
      }
    }
  });
});





