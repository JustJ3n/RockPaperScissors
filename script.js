function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

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