function playGame() {
  // Variables to keep track of the players' scores
  let humanScore = 0;
  let computerScore = 0;
  // Variable to keep track of the number of rounds played
  let roundsPlayed = 0;

  // Function to play a round
  function playRound() {
    // Display the current round number
    console.log(`Round ${roundsPlayed + 1} of 5`);

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

    const getHumanChoice = function () {
      let choice;
      while (true) {
        choice = prompt(
          "Rock, Paper, Scissors. What's your choice?"
        ).toLowerCase();
        // Validate the input
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
          return choice; // Return the valid choice
        } else {
          alert("Not a valid choice. Type again: rock, paper, or scissors."); // Alert for invalid input
        }
      }
    };

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Your choice:", humanChoice);
    console.log("Computer's choice:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log(`We both chose ${humanChoice}. It's a DRAW!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("Computer Wins!");
      computerScore++;
    }

    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
  }

  // Loop until one of the players reaches 3 points or 5 rounds are played
  while (humanScore < 3 && computerScore < 3 && roundsPlayed < 5) {
    playRound();
    roundsPlayed++;
  }

  console.log("Game is Over!");
  console.log(
    "Final score - Your score: " +
      humanScore +
      ", Computer's score: " +
      computerScore
  );

  // Declare the winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You Win!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else {
    console.log("The game ended in a draw after 5 rounds.");
  }
}

// Call the function to start the game
playGame();
