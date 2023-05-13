// declare all fixed variables const
const userScore = document.querySelector('.playerscore')
const compScore = document.querySelector('.computerscore')
const currentmessage = document.querySelector('.currentmessage')
const images = Array.from(document.querySelectorAll('.card-image'))
const playAgain = document.querySelector('button')

// Set player scores
let playerScore = 0
let computerScore = 0

// User chooses one of the three images
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
      return;
    }
    console.log(image.dataset.image)
    game(image.dataset.image);
  })
);

// Game Functionality
function getComputerChoice() {
    let res = ['rock' , 'paper', 'scissor']
    let randomNumber = Math.floor(Math.random()*3)
    return res[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    // make input case-insensitive
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock'
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissor') {
        return 'You Win! Rock beats Scissor'
    }

    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock'
    }

    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissor') {
        return 'You Lose! Scissor beats Paper'
    }

    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'paper') {
        return 'You Win! Scissor beats Paper'
    }

    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissor'
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        return 'Tie'
    }
    
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        return 'Tie'
    }

    else if (playerSelection.toLowerCase() == 'scissor' && computerSelection == 'scissor') {
        return 'Tie'
    }
}

function game(userSelection) {
    let result = playRound(userSelection, getComputerChoice())

    if (result.slice(4,7) == 'Win') {
        playerScore++;
    }

    else if (result.slice(4,8) == 'Lose') {
        computerScore++;
    }
    
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    currentmessage.textContent = result;

    if (playerScore == 5 && computerScore < 5) {
        currentmessage.textContent = 'YOU BABY!';
    }    

    else if (playerScore < 5 && computerScore == 5) {
        currentmessage.textContent = 'YOU LOSE!'
    }
}

playAgain.addEventListener('click', () => {
    playerScore = 0
    computerScore = 0
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    currentmessage.textContent = 'Begin.'
});
