function getComputerChoice() {
    let n = Math.floor(Math.random()*3);

    return mapNtoChoice(n)
}

function mapNtoChoice(n) {
    switch (n) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
             return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let state;

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {state = "lose";}
            else if (computerSelection === "scissors") {state = "win";}
            break;
        case "paper":
            if (computerSelection === "scissors") {state = "lose";}
            else if (computerSelection === "rock") {state = "win";}
            break;
        case "scissors":
            if (computerSelection === "rock") {state = "lose";}
            else if (computerSelection === "paper") {state = "win";}
            break;
    }

    return state;
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    while ((computerScore < 5) && (playerScore < 5)) {
        let playerSelection = prompt("Enter a value: ");
        let computerSelection = getComputerChoice();

        console.log("Your choice: ", playerSelection);
        console.log("Computer choice: ", computerSelection);

        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            playerScore++;
            console.log("You win! Score: Computer ", computerScore, " - Player: ", playerScore);
        }

        else if (result === "lose") {
            computerScore++;
            console.log("You win! Score: Computer ", computerScore, " - Player: ", playerScore);
        }
        else if (result === "tie") {
            console.log("It's a tie! Computer: ", computerScore, " - Player: ", playerScore);
        }
    }
    console.log("End of Game!");
}

game();