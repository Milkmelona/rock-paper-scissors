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


function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            console.log('You lost! Paper beats Rock.');
        } else {
            console.log('You won! Rock beats Scissors.');
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection ==='Rock') {
            console.log('You won! Paper beats Rock.');
        } else {
            console.log('You lost! Scissors beat Paper.');
        }
    } else {
        if (computerSelection === 'Rock') {
            console.log('You lost! Rock beats Scissors.');
        } else {
            console.log('You won! Scissors beat Paper.');
        }
        }
}

playRound(playerSelection, computerSelection);
