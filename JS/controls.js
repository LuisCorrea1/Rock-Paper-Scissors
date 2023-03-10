let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    const result = choices[random].toLowerCase();
    return result;
}

//Get the div element to print the results
const printResult = document.querySelector('.container');


function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    if (player == computerSelection) {
        printResult.textContent = 'Draw!!';
    } else {
        //Player selected Rock
        if ((player == "rock") && (computerSelection == "paper")) {
            printResult.textContent = "You lose! Paper beats Rock";
            computerWin++;
        } else {
            if ((player == "rock") && (computerSelection == "scissors")) {
                printResult.textContent = "You win! Rock beats Scissors";
                playerWin++;
            }
        }
        //Player selected Paper
        if ((player == "paper") && (computerSelection == "scissors")) {
            printResult.textContent = "You lose! Scissors beats Paper";
            computerWin++;
        } else {
            if ((player == "paper") && (computerSelection == "rock")) {
                printResult.textContent = "You win! Paper beats Rock";
                playerWin++;
            }
        }
        //Player selected scissors
        if ((player == "scissors") && (computerSelection == "rock")) {
            printResult.textContent = "You lose! Rock beats Scissors";
            computerWin++;
        } else {
            if ((player == "scissors") && (computerSelection == "paper")) {
                printResult.textContent = "You win! Scissors beats Paper"
                playerWin++;
            }
        }
    }

    if(playerWin===5) alert("You win!!");
    if(computerWin===5) alert ("Computer Wins!")
}

const buttons = document.querySelectorAll('#btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.value;
        playRound(playerSelection, computerSelection);
        updateScores();
    });
});

function updateScores() {
    document.getElementById("playerScore").textContent = playerWin;
    document.getElementById("computerScore").textContent = computerWin;
}

    
    
    
