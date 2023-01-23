const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let playerSelection = 'rock';
playerSelection = playerSelection.toLowerCase()
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return `You Lose! Paper beats Rock`;
    } else if (
        playerSelection == 'paper' && computerSelection == 'rock'){
            return `You Win! Paper beats Rock`;
    } else if (
        playerSelection == 'rock' && computerSelection == 'scissors'){
            return `You Win! Rock beats Scissors`;
    } else if (
        playerSelection == 'scissors' && computerSelection == 'rock'){
            return `You Lose! Rock beats Scissors`;
     } else if (
        playerSelection == 'paper' && computerSelection == 'scissors'){
            return `You Lose! Scissors beats Paper`; 
    } else if (
        playerSelection == 'scissors' && computerSelection == 'paper'){
            return `You Win! Scissors beats Paper`;
    } else {
        return `It's a tie!`;
    }
}