function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    const result = choices[random];
    console.log(result);
}

getComputerChoice();