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
var dice1 = 0;
var dice2 = 0;
var rollCount = 0;

function rollDice {
  rollCount++;
  dice1=Math.floor(Math.random()*6)+1;
  dice2=Math.floor(Math.random()*6)+1;
  diceTotal=dice1+dice2
}


function resetForm() {
  clearErrors();
  document.forms["numberFun"]["num1"].value="";
  document.getElementById("results").style.display="none";
  document.getElementById("submitButton").innerText="Submit";
  document.forms["numberFun"]["num1"].focus();
}
