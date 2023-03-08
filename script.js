function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return `Rock`;
    } else if (randomNumber === 1) {
        return `Paper`;
    } else {
        return `Scissors`;
    }
};

function playRound(playerSelection, computerSelection) {
    const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelectionCapitalized != computerSelection) {
        return `You Lose!`
    } else {
        return `You Win!`
    }
};

function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5 ; i++) {
        const playerSelection = prompt(`Enter "Rock", "Paper" or "Scissors".`, `Rock`);
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult === `You Win!`) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        // Show results of each round
        console.log(`Round ${i + 1}:`)
        console.log(`Player selection: ${playerSelection}, computer selection: ${computerSelection}.`)
        console.log(`Round result: ${roundResult}`)
        console.log(`Player score: ${playerScore}, computer score: ${computerScore}`)
    };

    // Show the winner
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won the game.`)
    } else {
        console.log(`Bad luck, try again some time.`)
    }
};

game();