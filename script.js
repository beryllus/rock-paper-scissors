let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = getRandomNumber(3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const getHumanChoice = () => {
    let input;
    do {
        input = prompt("Rock, paper or scissors?").toLowerCase();
    } while (input !== "rock" && input !== "scissors" && input !== "paper");
    return input;
}

const playRound = (humanChoice, computerChoice) => {
    console.log(computerChoice);
    const choices = ["rock", "paper", "scissors", "rock", "paper"];
    const computerIndex = choices.indexOf(computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (choices[computerIndex+2] === humanChoice) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Human wins!");
        humanScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());