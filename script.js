//Rock, Paper, Scissors game script
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}. This match is a tie!`;
    }
    if((playerSelection === 'rock' && computerSelection === 'paper') ||
       (playerSelection === 'scissors' && computerSelection === 'rock') ||
       (playerSelection === 'paper' && computerSelection === 'scissors')){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    const maxRounds = 3;
    let currentRound = 0;
    let wins = 0;
    while(currentRound < maxRounds){
        currentRound++;
        console.log('Lets play a round of Rock, Paper, Scissors');
        console.log(`Current round: ${currentRound}. Wins: ${wins}`)
        let playerInput = prompt('Chose: rock, paper, or scissors');
        let matchResult = playRound(playerInput, getComputerGuess());
        if(matchResult.split(' ')[1] === 'win!') {
            wins++;
        }
        console.log(matchResult);
    }
}

function getComputerGuess(){
    let _guesses = ['rock', 'paper', 'scissors'];
    let _guessNum = randRange(3);
    let _guess = _guesses[_guessNum];
    console.log(_guess);
    return _guess
}

//Return a number from 1 to stop, inclusive
function randRange(stop) {
    return Math.floor(Math.random() * stop) + 1;
}

game();