function getComputerChoice() {
    values = ["rock", "paper", "scissors"]

    return values[Math.floor(Math.random() * 3)]
}


let humanScore = 0;
let computerScore = 0;

const txt = document.createElement('div');
const score = document.createElement('div');
const winnerAnnouncement = document.createElement('div');

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        txt.textContent = "Tie!";
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        txt.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        txt.textContent = "You win! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        txt.textContent = "You win! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        txt.textContent = "You lose! scissors beats paper";
        computerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        txt.textContent = "You win! scissors beats paper";
        humanScore++;
    }
    else {
        txt.textContent = "You lose! rock beats scissors";
        computerScore++;
    }
    btn.appendChild(txt);
    score.textContent = `Your Score: ${humanScore} | Computer Score ${computerScore}`
    txt.appendChild(score);
    
    if (humanScore == 5) {
        winnerAnnouncement.textContent = 'You win the game!';
        txt.appendChild(winnerAnnouncement);
    }    
    if (computerScore == 5) {
        winnerAnnouncement.textContent = 'You lose the game!';
        txt.appendChild(winnerAnnouncement);
    }
}
    

const btn = document.querySelector('#container');

btn.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'btnRock':
            playRound('rock', getComputerChoice())
            break;
        case 'btnPaper':
            playRound('paper', getComputerChoice())
            break;
        case 'btnScissors':
            playRound('scissors', getComputerChoice())
            break;
    }
});