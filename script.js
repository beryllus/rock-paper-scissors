let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = getRandomNumber(2);
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
