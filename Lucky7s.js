document.getElementById('submitButton').onclick = playGame;

function playGame() {
  var startingBet = 0;
  var gameMoney = 0;
  var diceValue;
  var rollsTillBroke = 0;
  var currentHighestAmount = 0;
  var rollCountAtHighestAmount = 0;

  if(!isInputValid()) {
    alert('Starting bet needs to be higher than 0');
    return;
  }

  startingBet = parseInt(document.getElementById("startingBet").value);
  gameMoney = startingBet;
  // loops until balance is 0
  while(gameMoney > 0) {
    // executes dice funtion and sets the result to diceValue
    diceValue = getDiceValue();
    // counts the amount of rolls before balance is zero
    rollsTillBroke = rollsTillBroke + 1;
    // if dice total reads 7, win and +$4
    if(diceValue === 7) {
        gameMoney = gameMoney + 4;
    }
    // else loses -$1
    else {
        gameMoney = gameMoney - 1;
    }
    /* In the first iteration, it logs the value of gameMoney as currentHighestAmount. In the
    following iterations, it only updates currentHighestAmount and rollCountAtHighestAmount
    if gameMoney is > the currentHighestAmount.
    */
    if(gameMoney > currentHighestAmount) {
        currentHighestAmount = gameMoney;
        rollCountAtHighestAmount = rollsTillBroke;
    }
  }
  // displays results
  document.getElementById('startingBetResult').innerText = startingBet;
  document.getElementById('rollsTillBroke').innerText = rollsTillBroke;
  document.getElementById('highestAmount').innerText = currentHighestAmount;
  document.getElementById('rollsTillHigh').innerText = rollCountAtHighestAmount;
  // changes the play button
  document.getElementById("submitButton").innerHTML="Play Again";
}
// validates the starting bet
function isInputValid() {
  var startingBet = document.getElementById("startingBet").value;

  if(startingBet <= 0) {
    return false;
  }
  return true;
}
// creates the random dice values
function getDiceValue() {
    var dice1 = Math.floor(Math.random()*6) +1;
    var dice2 = Math.floor(Math.random()*6) +1;
    return dice1 + dice2;
}
