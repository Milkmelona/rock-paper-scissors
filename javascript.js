    function getComputerChoice() {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    return (myArray[Math.floor(Math.random() * myArray.length)]);
}


function playerChoice() {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    return playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1).toLowerCase();
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

function game() {
for (let i = 0; i <4; i++) {
    
playerChoice = prompt('Rock, Paper, or Scissors?');
playerSelection = playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1).toLowerCase();

myArray = ['Rock', 'Paper', 'Scissors'];
computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
console.log("Player selection:", playerSelection);
console.log("Computer selection:", computerSelection);

console.log(playRound(playerSelection, computerSelection));
}
     if (playerScore > computerScore) {
        return 'You won this game. Congratulations!';
    }
    else if (playerScore == computerScore) {
        return "It's a tie!";
    } else {
        return 'You lost this game. Better luck next time!';
    }
}
console.log(game());

console.log("Your final score is " +playerScore +" wins " +computerScore +" loses and " +tieScore +" draws.");
score=playerScore+computerScore+tieScore;
console.log("You played this game " +score +" times.\n -------\nGame over.");