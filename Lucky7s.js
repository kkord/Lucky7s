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

  while(gameMoney > 0) {
    diceValue = getDiceValue();
    rollsTillBroke = rollsTillBroke + 1;

    if(diceValue === 7) {
        gameMoney = gameMoney + 4;
    }
    else {
        gameMoney = gameMoney - 1;
    }

    if(gameMoney > currentHighestAmount) {
        currentHighestAmount = gameMoney;
        rollCountAtHighestAmount = rollsTillBroke;
    }
  }
  document.getElementById('startingBetResult').innerText = startingBet;
  document.getElementById('rollsTillBroke').innerText = rollsTillBroke;
  document.getElementById('highestAmount').innerText = currentHighestAmount;
  document.getElementById('rollsTillHigh').innerText = rollCountAtHighestAmount;
  document.getElementById("submitButton").innerHTML="Play Again";
}

function isInputValid() {
  var startingBet = document.getElementById("startingBet").value;

  if(startingBet <= 0) {
    return false;
  }
  return true;
}

function getDiceValue() {
    var dice1 = Math.floor(Math.random()*6) +1;
    var dice2 = Math.floor(Math.random()*6) +1;
    return dice1 + dice2;
}
