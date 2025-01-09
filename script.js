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

// console.log("Computers Choice: " + getComputerChoice()); // Call the function and print the result

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

// console.log("Humans Choice: " + getHumanChoice()); // Call the function and print the result

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;


// Step 5: Write the logic to play a single round
function playRound(humanChoice , computerChoice){
    if (humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore++;
        return console.log("You win! Rock beats Scissors");
    } 
    else if (humanChoice === "Rock" && computerChoice === "Paper"){
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice === "Rock" && computerChoice === "Rock"){
        return console.log("You Tie! Go Again!");
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
        return console.log("You win! Paper beats Rock");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        computerScore++;
        return console.log("You lose! Scissors beats Paper");
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper"){
        return console.log("You Tie! Go Again!");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore++;
        return console.log("You win! Scissors beats Paper");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        computerScore++;
        return console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors"){
        return console.log("You Tie! Go Again!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);

