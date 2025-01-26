const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const yourScore = document.getElementById('player-score')
const compScore = document.getElementById('computer-score')
const output = document.getElementById('play')

const choices = ['rock', 'paper', 'scissors']

function compChoice(){
    const randNum = Math.floor(Math.random()*3);
    const choice = choices[randNum];
    return choice;
};

let humanScore = 0
let computerScore = 0

rock.addEventListener('click', () => {
    getWinner('rock', compChoice())
});
paper.addEventListener('click', () => {
    getWinner('paper', compChoice())
});
scissors.addEventListener('click', () => {
    getWinner('scissors', compChoice())
});    

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        output.innerHTML = "It's a draw!";
        output.style.backgroundColor = 'orange'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        yourScore.innerHTML = humanScore;
        output.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You Win!`;
        output.style.backgroundColor = 'green'
    } else {
        computerScore++;
        compScore.innerHTML = computerScore;
        output.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You Lose!`;
        output.style.backgroundColor = 'red'
    }
}



