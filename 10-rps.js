const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissors') {
      result = 'tie';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'scissors') {
      result = 'you lose';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissors') {
      result = 'you win';
    }
  } else if (playerMove === 'Reset Score') {
    score.losses = 0;
    score.ties = 0;
    score.wins = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = 'Game Reset';
    updateScoreElement();
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
  ).innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon" /><img
    src="./images/${computerMove}-emoji.png"
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
console.log(score.losses);

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
