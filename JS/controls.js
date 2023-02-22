function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    const result = choices[random].toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    console.log(computerSelection);
    if(player == computerSelection){
        console.log("Draw!");
    } else{
        //Player selected Rock
        if ((player == "rock") && (computerSelection == "paper")){
            console.log("You lose! Paper beats Rock");
        }else{
            if((player == "rock") && (computerSelection == "scissors")){
                console.log("You win! Rock beats Scissors");
            }
        }
        //Player selected Paper
        if ((player == "paper") && (computerSelection == "scissors") ){
            console.log("You lose! Scissors beats Paper");
        }else{
            if((player == "paper") && (computerSelection == "rock")){
                console.log("You win! Paper beats Rock");
            }
        }
        //Player selected scissors
        if ((player == "scissors") && (computerSelection == "rock") ){
            console.log("You lose! Rock beats Scissors");
        }else{
            if((player == "scissors") && (computerSelection == "paper")){
                console.log("You win! Scissors beats Paper");
            }
        }
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice(); 
playRound(playerSelection, computerSelection);