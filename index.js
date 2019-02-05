// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


      var PLAYER_ONE_SYMBOL = "X";
      var PLAYER_TWO_SYMBOL = "O";

      // define constant variables to represent game status
      var GAME_CONTINUE = 0;
      var GAME_WINNER = 1;
      var GAME_TIE = 2;

      // variable to store whose turn it is
      var currentTurn = PLAYER_ONE_SYMBOL;

      // if numberOfMoves reaches 9 and there is no winner, it's a tie!
      var numberOfMoves = 0;

      // retrieve the screen elements into global variables
      var board = document.getElementById("board");  // only 1 board, use ID
      var replayButton = document.getElementById("replayButton");
      var results = document.getElementById("resultsText");
      var foundWinner = false;  // simple boolen for use in loop

// --- Click event on a board, but the actual event is on a square --------------
      board.addEventListener('click', function(e)
      {
        // don't allow user to click on an occupied square or an empty square after the game is already over
        if ((e.target.innerHTML != "") || (foundWinner == true))
        {
          console.log("Illegal Move");
          return;  // return immediately
        }

        // legal play if we get here - update square to current turn's symbol
        e.target.innerHTML = currentTurn;
        numberOfMoves++;  // if we hit 9 with no winner, we know its a tie

        var check = checkForWinner();  // function returns 1 of 3 game statuses - Continue, Tie, or Win

        // 3 possible status options:
        switch (check)
        {
          case GAME_CONTINUE:  // No winner, flip turn and continue game

            // flip the currentTurn variable to the next player using the ternery operator
            if (currentTurn == PLAYER_ONE_SYMBOL)
            {
              currentTurn = PLAYER_TWO_SYMBOL;
            }
            else
            {
              currentTurn = PLAYER_ONE_SYMBOL;
            }

            break;

          case GAME_TIE:
            results.innerHTML = "Game ended in a tie!";
            console.log ("Game ended in a tie!");
            replayButton.style.visibility = "visible";  // make the button visible
            break;

          case GAME_WINNER:
              results.innerHTML = currentTurn + " Won!";
              console.log (currentTurn + " Won!");
              replayButton.style.visibility = "visible";  // make the button visible

          default:
              results.innerHTML = "Error - Undefined game status.";
              console.log ("Error - Undefined game status.");

        } // end switch

      });  // end of the board eventlistener

// --- Click event on the replay button -------------------
      replayButton.addEventListener('click', function(e)
      {

        // reset turn to player 1
        currentTurn = PLAYER_ONE_SYMBOL;
        numberOfMoves = 0; // if numberOfMoves reaches 9 and there is no winner, it's a tie!
        foundWinner = false;  // reset var

        var squares = document.querySelectorAll('.square');

        // blank out all squares
        var i;
        for (i=0; i<squares.length; i++)
        {
          squares[i].innerHTML = ""; // set the square text to empty string
        }

        // reset results area
        results.innerHTML = "";
        replayButton.style.visibility = "hidden";

      });  // end replay button listener function

// ---- Begin - Check for Winner function, returns true if a winner is found

      function checkForWinner()
      {
        // initialize variables, retrieve array of squares
        var squares = document.querySelectorAll('.square');
        var i;  // loop counter
        var foundWinner = false;  // default to false

        // This is a hard-coded array of winning square combinations
        var winningCombos =  [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

        // Check the squares owned by the current player against the winningCombo array
        // Check the whole array unless you find a winner, then stop looking

        // Put your code here...

        // Return the correct game status to the calling function
        // Could be continue, tie, or win

        // Put your code here...

      }  // End Check for Winner function -----------------------------------------
