document.addEventListener("DOMContentLoaded", function() {
    const choices = document.querySelectorAll(".choices button");
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");

    choices.forEach(choice => {
        choice.addEventListener("click", function() {
            const userChoice = this.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
            computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
            resultDisplay.textContent = `Result: ${result}`;
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if (
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const choices = document.querySelectorAll(".choices button");
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");

    choices.forEach(choice => {
        choice.addEventListener("click", function() {
            const userChoice = this.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
            computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
            resultDisplay.textContent = `Result: ${result}`;
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if (
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
