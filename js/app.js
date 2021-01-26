let playerScore = 0;
let computerScore = 0;
var playerChoice;

const playBtn = document.querySelector(".prematch button");
const shapeBtns = document.querySelectorAll(".match .buttons");
//console.log(shapeBtns);

function startGame() {
  const prematchScreen = document.querySelector(".prematch");
  const matchScreen = document.querySelector(".match");

  prematchScreen.classList.add("fadeOut");
  matchScreen.classList.remove("fadeOut");

  playGame();
}

function playGame() {
  let playerHand = document.querySelector(".player-hand");
  let computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  shapeBtns.forEach((shapeBtn) => {
    shapeBtn.addEventListener("click", function (event) {
      const playerChoice = event.target.textContent;
      const computerChoice = randomShape();

      setTimeout(() => {
        findWinner(playerChoice, computerChoice);

        playerHand.src = `./img/${playerChoice}.png`;
        computerHand.src = `./img/${computerChoice}.png`;
      }, 2000);

      console.log(playerChoice, computerChoice);
      playerHand.style.animation = "shakePlayerHand 2s ease";
      computerHand.style.animation = "shakeComputerHand 2s ease";
    });
  });

  hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });
}

function randomShape() {
  const shapes = ["rock", "paper", "scissors"];
  const shapeIndex = Math.floor(Math.random() * 3);
  const computerShape = shapes[shapeIndex];
  return computerShape;
}

function findWinner(playerChoice, computerChoice) {
  const winner = document.querySelector(".winner");

  if (playerChoice === computerChoice) {
    winner.textContent = "Draw. Wanna try again?";
    return;
  }
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = "You won!";
      playerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer wins!";
      computerScore++;
      updateScore();
      return;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      winner.textContent = "You won!";
      playerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer wins!";
      computerScore++;
      updateScore();
      return;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      winner.textContent = "You won!";
      playerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer wins!";
      computerScore++;
      updateScore();
      return;
    }
  }
}

function updateScore() {
  const player = document.querySelector(".player-score p");
  const computer = document.querySelector(".computer-score p");
  player.textContent = playerScore;
  computer.textContent = computerScore;
}

function btnTimeout() {
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  setTimeout(function () {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  }, 2000);
}

playBtn.addEventListener("click", startGame);
