//var board = [A1, A2, A3, B1, B2, B3, C3, C2, C3];

var gameBoard = [
  ['','',''],
  ['','',''],
  ['','','']
];

var currentTurnPlayer = '';

var players = {
  Carol: 'O',
  Bubbles: 'X'
};

var scoreCarol = 0;
var scoreBubbles = 0;
var gamesPlayed = 0;

var numberOfMoves = 0;

var winner = '';

var isDraw = false;




var funFacts = [
  "Carol was paid &pound;100 back in 1967 to appear on the test card.",
  "Bubbles was paid zilch for his guest appearance on the test card.",
  "When Carol was still at school she was told off by her headmaster who didn't believe she had appeared on TV.",
  "Carol Hersee still lives in the U.K. and works as a costume designer.",
  "Bubbles still lives in a cardboard box stored in Carol's home.",
  "Carol is featured in the Guiness Book of Records as the person appearing for the longest time on TV, ie about 70,000 hours!",
  "Carol's sister, Gillian, was to also appear on the test card, but lost her two front teeth just before the photo was to be taken.",
  "The 'X' featured on the little blackboard is used to find the exact centre of television screens.",
  "The colour of Carol's clothes and Bubbles himself were chosen for testing the quality of specific colours shown on television screens.",
  "Carol actually appeared on the test card so engineers could test the quality of skintones being broadcast.",
  "Carol's father, George Hersee, was the BBC engineer who developed the test card back in 1967.",
  "George Hersee also developed the first newspaper for blind people.",
  "Test Card F made its debut on BBC2 in 1967. It went on to be used in 30 countries.",
  "In 1989, the Test Card Circle was formed. They meet every April for a weekend of 'testing' nostalgia in Leominster, U.K. There are over 200 members!!! For details contact: <a href=\"mailto:stuart.montgomery3@btinterest.com\">stuart.montgomery3@btinterest.com</a>.",
  "No one knows who won the game between Carol and Bubbles displayed on the test card. If you ever find out please let us know. Meanwhile enjoy another game of Tic Tac Toe.",
  "For more fun facts buy the 'Add-On Fun Fact Package' at: <a>href=\"#\" and keep on enjoying educational Tic Tac Toe."
];

//*********************************************************************
//Use minmax values ? Luke's answer: DON"T bother.

//Code for no moving to position already played.
//***********************************************************************


var updatePlayerIndicator = function () {
  if (currentTurnPlayer  === "Carol" ) {  //testing 4 equivalence (by ===).
  //Glow effect on Carol when her turn.
    $(".turnClown, .turnCarol").removeClass('turnClown turnCarol');
    //$("#imageCarol, #scoreCarol").addClass('turnCarol');
    $("#containerCarol").addClass('turnCarol');
  } else {
    // Glow effect on Bubbles when his turn.
    $(".turnClown, .turnCarol").removeClass('turnClown turnCarol');
    $("#containerClown").addClass('turnClown');
  }
}

var chooseStartingPlayer = function () {

  //Random decision for who plays first.  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //1st create random whole number between 1 and 20.
  var arbitraryNumber = Math.floor (Math.random() * 20);

  //If number is <= 10, let Carol play 1st.
  if ( arbitraryNumber <= 10 ) {
    console.log ("Carol plays first.");
    currentTurnPlayer = "Carol";
  } else {
    console.log ("Bubbles plays first.");
    currentTurnPlayer = "Bubbles";
  }

};



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//If Carol first, display her move.

// //Check for win. If yes, display win.
// if (gameboard.index() {
//
//  [1,2,3],
//  [4,5,6],
//  [7,8,9],
//  [1,4,7],
//  [2,5,8],
//  [3,6,9],
//  [1,5,9],
//  [7,5,3]
//
//  });
//
// var win = "win";
//
// if var X = win;
// if var O = win;

//Check for draw. If yes, display draw.
// ie if X < 3 or O < (gameboard.index()) < 3
//Switch to other player.

//If Bubbles first, display his move.

//Check for win. If yes, display win and reset game.

//Reset game.


//Check for draw. If yes, display draw.

//Switch to other player.


//Add score to game counter.
// if X = win, add 1 to Bubble' score.


var testWin = function () {

  var g = gameBoard;

  var winStates = [
    // row win
    [ g[0][0], g[0][1], g[0][2] ], // [x, o, x]  === [x,x,x]
    [ g[1][0], g[1][1], g[1][2] ],
    [ g[2][0], g[2][1], g[2][2] ],
    // column win
    [ g[0][0], g[1][0], g[2][0] ],
    [ g[0][1], g[1][1], g[2][1] ],
    [ g[0][2], g[1][2], g[2][2] ],
    // diagonal win
    [ g[0][0], g[1][1], g[2][2] ],
    [ g[2][0], g[1][1], g[0][2] ],
  ];

  var winX = ['X','X','X'].toString();
  var winO = ['O','O','O'].toString();

  winner = '';

  for (var i = 0; i < winStates.length; i++) {

    if( winStates[i].toString() === winX ) {
      console.log("Bubbles has won!");
      winner = "Bubbles";
      break;
    } else if( winStates[i].toString() === winO ) {
      console.log("Carol has won!");
      winner = "Carol";
      break;
    }
  } // end for

  if (winner.length > 0 ){
    console.log(winner, " is the winner!");
  } else if (numberOfMoves > 8){
    console.log("It's a draw!");
    isDraw = true;
    //End loop here to stop gamescore incrementing.?????
  //  break;
  }
};

//  &&&********************************************************************
//To actually play a move. Then switch player.
var playMove = function (squareX, squareY) {

  numberOfMoves++;

  console.log('playMove', squareX, squareY);

  // check if position is empty
  if ( gameBoard[squareX][squareY].length === 0 ) {
    // set position to symbol for current player
    gameBoard[ squareX ] [squareY ] = players[ currentTurnPlayer ];
    console.log('PLAYED!');
    // switch to next player
    if (currentTurnPlayer  === "Carol" ) {  //testing 4 equivalence (by ===).
      currentTurnPlayer  = "Bubbles";    //assigning new value (by single "=").
    } else {
      currentTurnPlayer  = "Carol";
    }

  }

  testWin();

  // console.table(gameBoard);

};


var updateUI = function (cell, x, y) {

  // create an HTML element that looks like this: <div class="X">X</div>
  var elem = $('<div>').addClass( gameBoard[x][y] ).html( gameBoard[x][y] );

  $(cell).html( elem );

  updatePlayerIndicator();
}


//==============================================================
$(document).ready(function() {



  // page load: choose starting player and indicate who it is

  chooseStartingPlayer();

  updatePlayerIndicator();


    $("#resetButton").on('click', function () {

      $("#gameboard td").html('');

      gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
      ];

      numberOfMoves = 0;
      winner = '';
      isDraw = false;

      chooseStartingPlayer();

      updatePlayerIndicator();

      $("#bottomText").html("");

    });

  $("#gameboard td").on('click', function () {


    //To stop play once a win or draw is registered.
    if(winner.length > 0 || isDraw === true) {
      return;
    }

    var x = $(this).data('xpos');
    var y = $(this).data('ypos');
    console.log( x, y );

    var sym = players[ currentTurnPlayer ];
    playMove(x, y);

    // test new value of currentTurnPlayer and change CSS of scoreCarol/scoreClown
    // to highlight whose turn it is



    if(winner.length > 0) {

      // code to run when someone has won

      //$("#bottomText").html("The winner is " + winner);


      var index = gamesPlayed % funFacts.length;
      console.log(index, funFacts[ index ]  );
      $('#bottomText').html("The winner is " + winner + "<br><br>Fun fact: " + funFacts[ index ] );

      // update the score variables
      if (winner === "Carol" ) {
        scoreCarol++;
        $("#scoreCarol").html(scoreCarol);
      } else if (winner === "Bubbles" ) {
        scoreBubbles++;
        $("#scoreClown").html(scoreBubbles);
      }

      gamesPlayed++;
      $("#runningScore").html(gamesPlayed);


    } else if ( isDraw === true ){
      $("#bottomText").html("It's a draw!");
    }

    updateUI(this, x, y);
  });
});


//=============================================================

// Also add 1 to "runningScore"
  $("#runningScore").html("");

//================================================================
//To reset game.
