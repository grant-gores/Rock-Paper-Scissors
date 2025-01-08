# Rock-Paper-Scissors
Odin Project: Rock Paper Scissors Project
pseudocode 
<!-- Step 1: -->
<!-- Game will be played out against a computer, write a function that randomly returns “rock”, “paper” or “scissors”. -->

function getRandomInt() {
    return number between 0,1,2
}

<!-- Function to return random rock, paper scissor result -->
function getComputerChoice() {
let computerChoice = getRandomInt(); 
if computerChoice === 0
return "Rock";
else if computerChoice === 1
else
return "Scissors";

<!-- // Call the function and print the result -->
console log getComputerChoice

<!-- Step 2: -->
<!-- Your game will be played by a human player. You will write a function that takes the user choice and returns it. -->

FUNCTION promptChoice()
     Return Choice = PARSEINT(PROMPT("Enter '1' for Rock, '2' for Paper, or '3' for Scissors?: "));

<!-- Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs. -->
FUNCTION getHumanChoice
let getHumanChoice = promptChoice(); 
if getHumanChoice === 1
return "Rock";
else if getHumanChoice === 2
else
return "Scissors";

<!-- // Call the function and print the result -->
console log getHumanChoice

