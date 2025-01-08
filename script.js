// Step 1:
// Game will be played out against a computer, write a function that randomly returns “rock”, “paper” or “scissors”.
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(); // Get a random number between 0 and 2

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("Computers Choice: " + getComputerChoice()); // Call the function and print the result

// Step 2:
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.
function promptChoice(){
     return parseInt(prompt("Enter '1' for Rock, '2' for Paper, or '3' for Scissors: "));
}

function getHumanChoice() {
    let getHumanChoice = promptChoice(); // Get prompted choice

    if (getHumanChoice === 1) {
        return "Rock";
    } else if (getHumanChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("Humans Choice: " + getHumanChoice()); // Call the function and print the result

