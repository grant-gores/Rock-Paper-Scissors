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

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

const gameMessage = document.querySelector("div");
const humanResult = document.getElementById("human-score");
const computerResult = document.getElementById("computer-score");

// Write the logic to play a single round
function playRound(getHumanChoice , computerChoice){
    if(humanScore === 5) {
        return gameMessage.innerText ="You Win! Reload Page to Play Again!";
    }
    else if(computerScore === 5){
        return gameMessage.innerText ="You Lose! Reload Page to Play Again!";
    }
    else{
        if (getHumanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++;
            return gameMessage.innerText = "You win! Rock beats Scissors";
        } 
        else if (getHumanChoice === "Rock" && computerChoice === "Paper"){
            computerScore++;
            return gameMessage.innerText ="You lose! Paper beats Rock";
        }
        else if (getHumanChoice === "Rock" && computerChoice === "Rock"){
            return gameMessage.innerText ="You Tie! Rock can't beat Rock!";
        }
        else if (getHumanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++;
            return gameMessage.innerText ="You win! Paper beats Rock";
        }
        else if (getHumanChoice === "Paper" && computerChoice === "Scissors"){
            computerScore++;
            return gameMessage.innerText ="You lose! Scissors beats Paper";
        }
        else if (getHumanChoice === "Paper" && computerChoice === "Paper"){
            return gameMessage.innerText ="You Tie! Paper can't beat Paper!";
        }
        else if (getHumanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++;
            return gameMessage.innerText ="You win! Scissors beats Paper";
        }
        else if (getHumanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++;
            return gameMessage.innerText ="You lose! Rock beats Scissors";
        }
        else if (getHumanChoice === "Scissors" && computerChoice === "Scissors"){
            return gameMessage.innerText ="You Tie! Scissors can't beat Scissors!";
        }
    }
}

// Access Rock, Paper and Scissors buttons
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let getHumanChoice = button.innerText;
    let computerChoice = getComputerChoice(); // Get the computer's choice
    playRound(getHumanChoice, computerChoice); // Pass both arguments
    humanResult.innerText = humanScore;
    computerResult.innerText = computerScore;
    if(humanScore === 5) {
        return gameMessage.innerText ="You Win! Reload Page to Play Again!";
    }
    else if(computerScore === 5){
        return gameMessage.innerText ="You Lose! Reload Page to Play Again!";
    }
    else{
        return;
    }
});
});


