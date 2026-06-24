const getComputerChoice = () => {
    const randomNumber = getRandomNumber(2);
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}