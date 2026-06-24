

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



const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    const playRound = (humanChoice, computerChoice) => {
        const choices = ["rock", "paper", "scissors", "rock", "paper"];
        const computerIndex = choices.indexOf(computerChoice);
        if (humanChoice === computerChoice) {
            return "Draw!";
        } else if (choices[computerIndex + 2] === humanChoice) {
            computerScore++;
            return `${computerChoice} beats ${humanChoice}, Computer wins!`;
        } else {
            humanScore++;
            return `${humanChoice} beats ${computerChoice}, Human wins!`
        }
    }
    while (humanScore < 5 && computerScore < 5) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore === 5){
        console.log("Human won!");
    } else {
        console.log("Computer won!");
    }
}

playGame();