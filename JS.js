const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" ) {
       return userInput; 
    } else {
        console.log("Error: you introduced invalid word");
    } 
} 


const getComputerChoice = () => {
    let randomNumber = Math.floor (Math.random () * 3);
    switch (randomNumber) {
        case 0:
            return "paper";
        case 1:
            return "scissors";
        case 2:
            return "rock";
        default:
            break;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is tie.";
    } else {
    if (userChoice == "rock") {
        if (computerChoice == "paper") {
            return "The computer won.";
        } else {
            return "Great, you won!";
        }
    }
    if (userChoice == "paper") {
        if (computerChoice =="scissors") {
            return "The computer won.";
        } else {
            return "Great, you won!";
        }
    }
    if (userChoice == "scissors") {
        if (computerChoice == "rock") {
            return "The computer won.";
        } else {
            return "Great, you won!";
        }
    }
    }
}

function playGame() {
    let userChoice = getUserChoice("paper");
    let computerChoice = getComputerChoice();
    console.log(`You choised: ${userChoice}`);
    console.log(`The computer choised: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();