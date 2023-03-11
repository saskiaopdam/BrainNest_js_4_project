function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return `rock`;
            break;
        case 1:
            return `paper`;
            break;
        case 2:
            return `scissors`;
            break;
    }
};

function playRound(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection === `rock` && computerSelection === `scissors`:
        case playerSelection === `scissors` && computerSelection === `paper`:
        case playerSelection === `paper` && computerSelection === `rock`:
            return `You Win! ${playerSelection} beats ${computerSelection}.`
        case computerSelection === `rock` && playerSelection === `scissors`:
        case computerSelection === `scissors` && playerSelection === `paper`:
        case computerSelection === `paper` && playerSelection === `rock`:
            return `You Lose! ${computerSelection} beats ${playerSelection}.`
        case playerSelection === computerSelection:
            return `It's a tie!`
    }
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numTies = 0;

    // Play 5 rounds
    for (let i = 0; i < 5 ; i++) {
        let playerSelection = prompt(`Please enter "rock", "paper" or "scissors".`, `rock`).toLowerCase();

        // Validate player's selection
        while (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`) {
            playerSelection = prompt(`Invalid choice. Please enter "rock", "paper" or "scissors".`, `rock`).toLowerCase();
        }

        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        
        if (roundResult.startsWith(`You Win!`)) {
            playerScore += 1;
        } else if (roundResult.startsWith(`You Lose!`)) {
            computerScore += 1;
        } else {
            numTies += 1;
        }

        // Show results of each round
        console.log(`Round ${i + 1}:`)
        console.log(`Player selection: ${playerSelection}, computer selection: ${computerSelection}.`)
        console.log(`Round result: ${roundResult}`)
        console.log(`Player score: ${playerScore}, computer score: ${computerScore}, ties: ${numTies}.`)
    };

    // Show the winner
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won the game.`)
    } else {
        console.log(`Bad luck, try again some time.`)
    }
};

game();