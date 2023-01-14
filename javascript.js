
//sets up the start page
let startQuestion = document.getElementById("question");
startQuestion.style.fontSize = "50px";
startQuestion.style.fontWeight = "800";
startQuestion.style.marginBottom = "60px";

let i = 0;
let question = 'Do you wanna play a game?';
let speed = 40;

function typeQuestion() {
    if (i < question.length) {
        startQuestion.innerHTML += question.charAt(i);
        i++;
        setTimeout(typeQuestion, speed);
    }
}
typeQuestion();

let introContainer = document.getElementById('introcontainer');
let startbtn = document.querySelector('#startbtn');

startbtn.addEventListener("click",() => {
  introContainer.style.opacity = 0;
  introContainer.style.transform='scale(0)';
  window.setTimeout(function(){introContainer.style.display= 'none';}, 600);
  buttons = document.querySelectorAll('.playSelection').forEach(item => {
    item.addEventListener("click", playButtonSound);
  })
});
// sets up button click audio
function playButtonSound(){
  const buttonSound = document.querySelector('#buttonsound');
  buttonSound.play();
}
startButtonSound = document.querySelector('#startbtn').addEventListener("click", playButtonSound);

//player selects from the options by clicking the image
document.addEventListener("click", playerSelectionListener);
function playerSelectionListener(event) {
  let rock = "ROCK";
  let paper = "PAPER";
  let scissors = "SCISSORS";
  console.log(event.target);
  if (event.target.classList.contains("imgOption") && event.target.id === "rockimg"){
    playRound(rock);
    console.log("PLAYER: ROCK"); 
  }
  else if (event.target.classList.contains("imgOption") && event.target.id === "paperimg"){
    playRound(paper);
    console.log("PLAYER: PAPER"); 
  }
  else if (event.target.classList.contains("imgOption") && event.target.id === "scissorsimg"){
    playRound(scissors);
    console.log("PLAYER: SCISSORS"); 
  }
}
// function to generate computerSelection
function getComputerChoice() {
    let myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return (myArray[Math.floor(Math.random() * myArray.length)])
}
// global variables for scores
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {

  computerSelection = getComputerChoice();
  console.log(`COMPUTER: ${computerSelection}`)

  let playerSelectionString = String(playerSelection)
  let playerSelectionUpper = playerSelectionString.toUpperCase();
  // for visual effects
      if (playerSelectionUpper === computerSelection) {
              console.log("TIE!"); 
              playerScore++;
              computerScore++;
              const playerTotalScore = document.querySelector('.playerTotalScore').innerHTML=`Score: ${playerScore}`;
              const computerTotalScore = document.querySelector('.computerTotalScore').innerHTML=`Score: ${computerScore}`;
              scoring(playerTotalScore, computerTotalScore);
      } else if (playerSelectionUpper === 'ROCK') {
              playerSelectedRock.style.fontWeight = 'bold';
          if (computerSelection === 'PAPER') {
              console.log("LOST!"); 
              computerScore++;
              const computerTotalScore = document.querySelector('.computerTotalScore').innerHTML=`Score: ${computerScore}`;
              scoring(playerScore, computerScore);
          } else {
            console.log("WON!"); 
              playerScore++;
              const playerTotalScore = document.querySelector('.playerTotalScore').innerHTML =`Score: ${playerScore}`;
              scoring(playerScore,computerScore);
          }
      } else if (playerSelectionUpper === 'PAPER') {
          if (computerSelection ==='ROCK') {
            console.log("WON!"); 
              playerScore++;
              const playerTotalScore = document.querySelector('.playerTotalScore').innerHTML=`Score: ${playerScore}`;
              scoring(playerScore,computerScore);
          } else {
              console.log("LOST!"); 
              computerScore++;
              const computerTotalScore = document.querySelector('.computerTotalScore').innerHTML=`Score: ${computerScore}`;
              scoring(playerScore,computerScore);
          }
      } else if (playerSelectionUpper === 'SCISSORS') {
          if (computerSelection === 'ROCK') {
              console.log("LOST!"); 
              computerScore++;
              const computerTotalScore = document.querySelector('.computerTotalScore').innerHTML=`Score: ${computerScore}`;
              scoring(playerScore,computerScore);
          } else {
              console.log("WON!"); 
              playerScore++;
              const playerTotalScore = document.querySelector('.playerTotalScore').innerHTML=`Score: ${playerScore}`;
              scoring(playerScore,computerScore);
          }
  }
}  

function scoring(playerScore,computerScore) {
// if draw
if (playerScore === computerScore) {
     const comment =  document.querySelector('.comments').innerHTML = 'Ooh, draw! \&#128526';
  }
// if player's current score is higher
else if (playerScore > computerScore) {
         if (computerScore === 0) {
         const comment =  document.querySelector('.comments').innerHTML = 'Nice Start! \&#128521';
         }
         else {
         const comment =  document.querySelector('.comments').innerHTML = 'You are doing great! \&#128585';
         }
}
// if computer's current score is higher
else if (computerScore > playerScore) {
          if  (playerScore === 0) {
          const comment =  document.querySelector('.comments').innerHTML = 'Not a good start, huh? \&#128574';
          }
          else {
          const comment =  document.querySelector('.comments').innerHTML = 'Wow, you kinda suck at this \&#128581';  
          }        
}


}