function getComputerChoice() {
    values = ["rock", "paper", "scissors"]

    return values[Math.floor(Math.random() * 3)]
}


function getHumanChoice() {
    return prompt('Rock, Paper, or Scissors?: ')
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Tie!');
    }
    else if (humanChoice == 'rock' & computerChoice == 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    else if (humanChoice == 'rock' & computerChoice == 'scissors') {
        console.log('You win! rock beats scissors');
        humanScore++;
    }
    else if (humanChoice == 'paper' & computerChoice == 'rock') {
        console.log('You win! Paper beats Rock');
        humanScore++;
    }
    else if (humanChoice == 'paper' & computerChoice == 'scissors') {
        console.log('You lose! scissors beats paper');
        computerScore++;
    }
    else if (humanChoice == 'scissors' & computerChoice == 'paper') {
        console.log('You win! scissors beats paper');
        humanScore++;
    }
    else {
        console.log('You lose! rock beats scissors');
        computerScore++;
    }
}
    

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        const result = playRound(humanSelection, computerSelection);
        // console.log(result);
    }
}


playGame();