let computerSelection;
// let playerSelection;
// const playerSelection = "Rock";

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerSelection = "Rock";
    } else if (randomNumber === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors"
    }
   
    console.log(`Random number ${randomNumber} stands for ${computerSelection}.`)
    return computerSelection;
};
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        console.log(`The computer selected 'Rock'.`)
        return `Rock`;
    } else if (randomNumber === 1) {
        console.log(`The computer selected 'Paper'.`)
        return `Paper`;
    } else {
        console.log(`The computer selected 'Scissors'.`)
        return `Scissors`;
    }
};

function playRound(playerSelection, computerSelection) {
    const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelectionCapitalized != computerSelection) {
        return `You Lose! ${computerSelection} beats ${playerSelectionCapitalized}`
    } else {
        return `You Win!`
    }
};

computerPlay(); 
// Random number 0 stands for "Rock"
// Random number 1 stands for "Paper"
// Random number 2 stands for "Scissors"

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5 ; i++) {
        const playerSelection = prompt(`Enter "Rock", "Paper" or "Scissors".`, `Rock`);
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    };
};

game();
