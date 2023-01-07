document.getElementById('rock').onclick = playerChoice;
document.getElementById('paper').onclick = playerChoice;
document.getElementById('scissors').onclick = playerChoice;

function playerChoice() {
    var user = this.id;
    console.log("User: " + user);
}

    function getComputerChoice() {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    return (myArray[Math.floor(Math.random() * myArray.length)]);
}

let playerSelection = playerChoice();
let computerSelection = getComputerChoice();

console.log("Player selection:", playerSelection);
console.log("Computer selection:", computerSelection);

const win ='You won this round!'
const lose = 'You lost this round!'
const tie = "It's a tie!"

let playerScore = 0;
let computerScore = 0;
let tieScore= 0;

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        tieScore++;
        return tie;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            return lose;
        } else {
            playerScore++;
            return win;}
    } else if (playerSelection === 'Paper') {
        if (computerSelection ==='Rock') {
            playerScore++;
           return win;
        } else {
            computerScore++;
            return lose;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return lose;
        } else {
            playerScore++;
            return win;
        }
    } else {
        alert('Please choose from Rock, Paper, and Scissors only');
    }
}

console.log(playRound(playerSelection, computerSelection));




console.log("Your final score is " +playerScore +" wins " +computerScore +" loses and " +tieScore +" draws.");
score=playerScore+computerScore+tieScore;
console.log("You played this game " +score +" times.\n -------\nGame over.");