//Best Of 5 Game of Rock, Paper, Scissors


let playerWins = 0;
let computerWins = 0;
const GAME_OPTIONS = ['ROCK', 'PAPER', 'SCISSORS']

function getPlayerChoice() {
  return prompt('What is your choice?').toUpperCase();
}

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  return GAME_OPTIONS[randomInt];
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) { //When both are equal its a tie
    return 'tie';
  }
  if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ||  //One of three winning conditions must be true for a win
     playerSelection == 'SCISSORS' && computerSelection == 'PAPER' ||
     playerSelection == 'PAPER' && computerSelection == 'ROCK') {
    playerWins++;
    return 'win';
  }
  if(playerSelection != 'ROCK' && playerSelection != 'SCISSORS' && playerSelection != 'PAPER') { //User must pick one of the three options
    return 'invalid';
  }
  computerWins++;
  return 'loss' //If it isn't a win or a tie it must be a loss
}



function displayGameStatus(playerChoice, computerChoice, outcome){
  if (outcome == 'invalid') {return 'Invalid option. Please pick either Rock, Paper or Scissors.'}
  let display = 'It\'s a ' + outcome + '. ';
  playerChoice = capitalizeWord(playerChoice)
  computerChoice = capitalizeWord(computerChoice)
  switch (outcome) {
    case 'tie':
      display+= 'Both of you picked ' + playerChoice;
      break;
    case 'win':
      display+= ''+ playerChoice + ' beats ' + computerChoice + '.'
      break;
    case 'loss':
      display+= ''+ computerChoice + ' beats ' + playerChoice + '.'
      break;
    }
  return display;
}

function displayCurrentScore(){
  return 'You: ' + playerWins + '. Computer: ' + computerWins; 
}

function capitalizeWord (word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}



while (playerWins < 5 && computerWins < 5) {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let outcome = playRound(playerChoice, computerChoice);
  console.log(displayGameStatus(playerChoice, computerChoice, outcome));
  console.log(displayCurrentScore());
} 
if (playerWins == 5) {console.log('Congrats on the win!')}
else {console.log ('You lost! Nice try.')}


