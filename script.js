let userScore = 0;
let compScore = 0;
let gameOver = '';
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const restartBtn = document.getElementById("restartBtn");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${(userChoice)}${smallUserWord} beats ${(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${(userChoice)}${smallUserWord} loses to ${(computerChoice)}${smallCompWord}. You lost... 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}


function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${(userChoice)}${smallUserWord} equals ${(computerChoice)}${smallCompWord}. It's a draw. 🤯`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    if (gameOver === false) { // if game0ver is false - run the user choice + comp choice through the switch case possibilities
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                win(userChoice, computerChoice); 
                isGameOver(); // check to see if either user or comp is at 5 points 
                break;
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                lose(userChoice, computerChoice);
                isGameOver(); //check to see if either user or comp is at 5 points 
                break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                draw(userChoice, computerChoice); 
                break;
            } 
         } else {  // if gameOver is true
            disableClick(); // disable click - thus will not run the game function 
        } 
    };    

//add click event listeners for user choice which will run the game function 
function enableClick() { 
    rock_div.addEventListener('click' , () => game("Rock"));
    paper_div.addEventListener('click', () => game("Paper"));
    scissors_div.addEventListener('click', () => game("Scissors"));
    gameOver = false; // assign gameOver value to false
}

//remove click event listeners for user choice to prevent game function from running
function disableClick() {
    rock_div.removeEventListener('click', () => game ("Rock"));
    paper_div.removeEventListener('click', () => game("Paper"));
    scissors_div.removeEventListener('click', () => game("Scissors"));
}

//reset game 
resetBtn.addEventListener('click', resetGame); //add 'click' event listener to reset button
function resetGame() {
    userScore = 0;  //score back to 0 point
    compScore = 0;  //score back to 0 point
    result_p.innerHTML = '⭐️First to score 5 points wins⭐️' 
    userScore_span.innerHTML= 0;
    computerScore_span.innerHTML= 0;
    enableClick(); // re adding the click event listeners 
 };     

//Create a function that checks if user or comp score is at 5 points.
// First one to reach 5 points, update appropriate result text and set gameOver value as true. 
//If not, return to the game function to continue playing the rounds.
function isGameOver() {
    if(userScore_span.innerHTML === '5' && userScore_span.innerHTML > computerScore_span.innerHTML) {
        result_p.innerHTML = 'You Win! Hurray 🎉';
        gameOver = true;
    } else if (computerScore_span.innerHTML === '5' && computerScore_span.innerHTML > userScore_span.innerHTML) {
        result_p.innerHTML = 'You Lose...💩 Better Luck Next Time!';
        gameOver = true;
    } else {
        return;
    }
};
