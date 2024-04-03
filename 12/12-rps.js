let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let autoPlayOn = false;
let intervalId;

// const autoPlay = () => {}
document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
  if (!autoPlayOn) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1500);
    autoPlayOn = true;
  } else {
    clearInterval(intervalId);
    autoPlayOn = false;
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
    if (!autoPlayOn) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1500);
      autoPlayOn = true;
    } else {
      clearInterval(intervalId);
      autoPlayOn = false;
      document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
    }
  }
});

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  playGame('reset');
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'Backspace') {
    document.querySelector('.js-reset-score-buttons').innerHTML =
      '<button>Yes</button><button>No</button>';
    playGame('reset');
  }
});
// looks in the entire body of the HTML for the event

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissors') {
      result = 'tie';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'scissors') {
      result = 'you lose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissors') {
      result = 'you win';
    }
  } else if (playerMove === 'reset') {
    document.querySelector('.js-reset-score-buttons').innerHTML =
      '<button class="js-yes-reset-button">Yes</button><button class="js-no-reset-button">No</button>';
    document
      .querySelector('.js-yes-reset-button')
      .addEventListener('click', () => {
        score.losses = 0;
        score.ties = 0;
        score.wins = 0;
        localStorage.removeItem('score');

        document.querySelector('.js-result').innerHTML = '';
        document.querySelector('.js-moves').innerHTML = 'Game Reset';
        updateScoreElement();
        document.querySelector('.js-reset-score-buttons').innerHTML = '';
        return;
      });
    document
      .querySelector('.js-no-reset-button')
      .addEventListener('click', () => {
        document.querySelector('.js-reset-score-buttons').innerHTML = '';
      });
    return;
  }

  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector(
    '.js-moves'
  ).innerHTML = `You <img src="../images/${playerMove}-emoji.png" class="move-icon" /><img
    src="../images/${computerMove}-emoji.png"
    class="move-icon"
  />Computer`;
  // local storage only supports strings so we have to convert to JSON to store it

  // alert(
  //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  //   Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  // );
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
updateScoreElement();
