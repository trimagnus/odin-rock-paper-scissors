//Rock, Paper, Scissors game script

function getComputerChoice(){
    let choices = ['rock', 'raper', 'scissors'];
    let choiceNum = randRange(3);
    let choice = choices[choiceNum];
    //console.log('Computer choice: ' + choice);
    return choice;
}

//Return a number from 1 to stop, inclusive
function randRange(stop) {
    return Math.floor(Math.random() * stop);
}

function getMatchResult(pchoice, cchoice) {
    if (pchoice === cchoice) {
        return 'tie';
    } else if ((pchoice === 'rock' && cchoice === 'paper') ||
               (pchoice === 'scissors' && cchoice === 'rock') ||
               (pchoice === 'paper' && cchoice === 'scissors')) {
        return 'lose';
    } else {
        return 'win';
    }
}

const playerScoreText = document.getElementById('player-score');
const playerScoreTextParent = playerScoreText.parentNode;
const cpuScoreText = document.getElementById('cpu-score');
const cpuScoreTextParent = cpuScoreText.parentNode;

let pScore = 0;
let cScore = 0;

const updateScoreBoard = () => {
    playerScoreText.textContent = pScore;
    cpuScoreText.textContent = cScore;
};

const playRound = (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const matchResult = getMatchResult(playerChoice, computerChoice);
    if(matchResult === 'win') {
        pScore++;
    } else if (matchResult === 'lose') {
        cScore++;
    }
    updateScoreBoard();
    let endGame = false;
    if(pScore === 5){
        playerScoreTextParent.classList.add('winner');
        cpuScoreTextParent.classList.add('loser');
        endGame = true;
    } else if(cScore === 5) {
        playerScoreTextParent.classList.add('loser');
        cpuScoreTextParent.classList.add('winner');
        endGame = true;
    }
    if(endGame) {
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
        });
    }
};

const buttons = document.querySelectorAll('.rps-button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});