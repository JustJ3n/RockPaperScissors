function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
