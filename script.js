//Rock, Paper, Scissors game script

let matchStrings = {
    'tie': 'ties with',
    'lose': 'loses to',
    'win': 'beats'
}

function getPlayerChoice() {
    let choice = prompt('Chose: rock, paper, or scissors')
    choice = choice[0].toUpperCase() + choice.substr(1).toLowerCase();
    return choice;
}

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choiceNum = randRange(3);
    let choice = choices[choiceNum];
    console.log('Computer choice: ' + choice);
    return choice;
}

//Return a number from 1 to stop, inclusive
function randRange(stop) {
    return Math.floor(Math.random() * stop);
}

function getMatchResult(pchoice, cchoice) {
    if (pchoice === cchoice) {
        return 'tie';
    } else if ((pchoice === 'Rock' && cchoice === 'Paper') ||
               (pchoice === 'Scissors' && cchoice === 'Rock') ||
               (pchoice === 'Paper' && cchoice === 'Scissors')) {
        return 'lose';
    } else {
        return 'win';
    }
}

//One round of the game. Returns true if player scores a point
function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let matchResult = getMatchResult(playerChoice, computerChoice);

    console.log(`${playerChoice} ${matchStrings[matchResult]} ${computerChoice}.`)
    return matchResult === 'win'? true : false;
}

function game() {
    //Display Intro
    console.log('Lets play a game of Rock, Paper, Scissors!');

    const maxRounds = 3;
    let currentRound = 0;
    let score = 0;

    while(currentRound < maxRounds){
        currentRound++;
        console.log(`Current round: ${currentRound}. Score: ${score}`);

        if (playRound()) {
            score++;
        }
    }
    console.log('Final score: ' + score);
    if (score > 1) {
        console.log('You win!')
    } else {
        console.log('You lost. Better luck next time!')
    }
}

//game();