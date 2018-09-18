/*
The program asks the user how many dollars they have to bet.
If the starting bet is less than or equal to 0, display an error message.
When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone.
Hint: Use a loop construct to keep playing until the money is gone.
Hint: We created a rollDice() function in the Rolling Dice exercise.
The program keeps track of how many rolls were taken before the money ran out.
The program keeps track of the maximum amount of money held by the player.
The program keeps track of how many rolls were taken at the point when the user held the most money.
Hint: For steps 4, 5, and 6, declare some variables.
When the game is over, display the following output:

*/
var startingBet = document.getElementById("startingBet").value;
var dice1=0;
var dice2=0;
var diceTotal=0;
var rollCount=0;

function validateItems(){
  clearErrors();
  var bet = document.forms["startingBet"].value;
  if (bet == "" || isNaN(bet) || bet == 0) {
    alert("Your starting bet must be a number greater than 0.");
    document.forms["startingBet"].focus();
    return false;
  }

function rollDice() {
  rollCount++;
  dice1=Math.floor(Math.random()*6)+1;
  dice2=Math.floor(Math.random()*6)+1;
  diceTotal=dice1+dice2
}


function resetForm() {
  clearErrors();
  document.forms["startingBet"].value="";
  document.getElementById("results").style.display="none";
  document.getElementById("submitButton").innerText="Submit";
  document.forms["numberFun"]["num1"].focus();
}


function displayResults() {
  document.getElementById("results").style.display="block";
  document.getElementById("submitButton").style.display="Recalculate";
  document.getElementById("addResult").innerText = Number(num1) + Number(num2);
  document.getElementById("subtractResult").innerText = num1 - num2;
  document.getElementById("multiplyResult").innerText = num1 * num2;
  document.getElementById("divideResult").innerText = num1 / num2;
  // return false so the form doesn't submit and can see the results
  return false;
}
