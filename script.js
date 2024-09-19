// Select UI Buttons elements
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const startButton = document.querySelector("#start");

// Select Score span elements

let playerScoreElement = document.querySelector("#playerScore");
let computerScoreElement = document.querySelector("#computerScore");

// Select Choices p element

let choices = document.querySelector("#choices");

// Select roundWinner p element

let roundWinner = document.querySelector("#roundWinner");

// Select gameWinner p element

let gameWinner = document.querySelector("#gameWinner");

// Trackers
let humanScore = 0;
let computerScore = 0;

// Add event listeners
rockButton.addEventListener("click", function () {
  playRound("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});

startButton.addEventListener("click", function () {
  startGame();
});

// Function to play a round

function playRound(playerSelection) {
  const getComputerChoice = function () {
    // Generate a random integer between 0 and 2
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      default:
        return "scissors";
    }
  };

  const computerChoice = getComputerChoice();

  choices.textContent = `You pick ${playerSelection} | Computer picks ${computerChoice}`;

  if (playerSelection === computerChoice) {
    roundWinner.textContent = `We both picked ${playerSelection}. It's a DRAW!`;
  } else if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ) {
    roundWinner.textContent = "You win this round!";
    humanScore++;
  } else {
    roundWinner.textContent = "Computer wins this round!";
    computerScore++;
  }

  playerScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  checkGameWinner();
}

// Function to check if there's a game winner

function checkGameWinner() {
  if (humanScore >= 5) {
    gameWinner.textContent = "You are the winner!";
    disableButtons();
  } else if (computerScore >= 5) {
    gameWinner.textContent = "Computer wins the game!";
    disableButtons();
  }
}

// Function to disable buttons after game ends
function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// Function to start a new game

function startGame() {
  humanScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  gameWinner.textContent = "";
  roundWinner.textContent = "";
  choices.textContent = "";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}
