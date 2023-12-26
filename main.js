//Best Of 5 Game of Rock, Paper, Scissors

let playerWins = 0;
let computerWins = 0;
const GAME_OPTIONS = ['ROCK', 'PAPER', 'SCISSORS']

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3); //Selects index
  return GAME_OPTIONS[randomInt]; //Selects a option from the array
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) { //When both are equal its a tie
    displayGameStatus(playerSelection, computerSelection, 'tie');
    return 'tie';
  }
  if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ||  //One of three winning conditions must be true for a win
     playerSelection == 'SCISSORS' && computerSelection == 'PAPER' ||
     playerSelection == 'PAPER' && computerSelection == 'ROCK') {
    playerWins++;
    updateScore();
    displayGameStatus(playerSelection, computerSelection, 'win');
    return 'win';
  }
  computerWins++;
  updateScore(); 
  displayGameStatus(playerSelection, computerSelection, 'loss');
  return 'loss' //If it isn't a win or a tie it must be a loss
}

function displayGameStatus(playerChoice, computerChoice, outcome){
  let display = '';
  playerChoice = capitalizeWord(playerChoice);
  computerChoice = capitalizeWord(computerChoice);
  switch (outcome) {
    case 'tie':
      display+= 'Great minds think alike. Both of you picked ' + playerChoice;
      changeDisplay(display);
      break;
    case 'win':
      if (playerWins == 5) {
        displayGameWin();
        resetGame();
      }
      else {
        display+= 'Good job! '+ playerChoice + ' beats ' + computerChoice + '.'
        changeDisplay(display);
      }
      break;
    case 'loss':
      if (computerWins == 5) {
        displayGameLoss();
        resetGame();
      }
      else {
        display+= 'Nice try. '+ computerChoice + ' beats ' + playerChoice + '.'
        changeDisplay(display);
      }
      break;
    }
  return display;
}


function updateScore () {
  displayPlayerScore[0].textContent = playerWins;
  displayComputerScore[0].textContent = computerWins;
}
function changeDisplay (text) {
  displayGame[0].textContent = text;
}

function displayGameWin() {
  changeDisplay('Congrats! You won 5 times. Select a button to play again.');
}

function displayGameLoss() {
  changeDisplay('Oof... You lost 5 times. Select a button to play again.');
}

function resetGame() {
  updateScore();
  playerWins = 0;
  computerWins = 0;

}

function capitalizeWord (word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const rockButton = document.getElementsByClassName('rock-btn');
rockButton[0].addEventListener('click', () => {
  playRound("ROCK", getComputerChoice());
})

const scissorsButton = document.getElementsByClassName('scissors-btn');
scissorsButton[0].addEventListener('click', () => {
  playRound("SCISSORS", getComputerChoice());
})

const paperButton = document.getElementsByClassName('paper-btn');
paperButton[0].addEventListener('click', () => {
  playRound("PAPER", getComputerChoice());
})

const displayGame = document.getElementsByClassName('game-status');
const displayPlayerScore = document.getElementsByClassName('player-score');
const displayComputerScore = document.getElementsByClassName('cpu-score');
