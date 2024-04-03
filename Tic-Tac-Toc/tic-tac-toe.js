const array1 = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let count = 1;

// how to win:
// if array1[0].[0],[1],[2] === 'x' or 'o'
// if array1[1].[0],[1],[2] === 'x' or 'o'
// if array1[2].[0],[1],[2] === 'x' or 'o'
// if array1[0].[0] array1[1].[0] array1[2].[0] === 'x' or 'o'
// if array1[0].[1] array1[1].[1] array1[2].[1] === 'x' or 'o'
// if array1[0].[2] array1[1].[2] array1[2].[2] === 'x' or 'o'
// if array1[0].[0] array1[1].[1] array1[2].[2] === 'x' or 'o'
// if array1[0].[2] array1[1].[1] array1[2].[0] === 'x' or 'o'
let playerX = true;

document.querySelector('.js-top-left').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-top-left').innerHTML = 'x';
    array1[0][0] = 'x';
  } else {
    document.querySelector('.js-top-left').innerHTML = 'o';
    array1[0][0] = 'o';
  }
  win(array1);
});

document.querySelector('.js-top-middle').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-top-middle').innerHTML = 'x';
    array1[0][1] = 'x';
  } else {
    document.querySelector('.js-top-middle').innerHTML = 'o';
    array1[0][1] = 'o';
  }
  win(array1);
});

document.querySelector('.js-top-right').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-top-right').innerHTML = 'x';
    array1[0][2] = 'x';
  } else {
    document.querySelector('.js-top-right').innerHTML = 'o';
    array1[0][2] = 'o';
  }
  win(array1);
});

document.querySelector('.js-middle-left').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-middle-left').innerHTML = 'x';
    array1[1][0] = 'x';
  } else {
    document.querySelector('.js-middle-left').innerHTML = 'o';
    array1[1][0] = 'o';
  }
  win(array1);
});

document.querySelector('.js-middle').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-middle').innerHTML = 'x';
    array1[1][1] = 'x';
  } else {
    document.querySelector('.js-middle').innerHTML = 'o';
    array1[1][1] = 'o';
  }
  win(array1);
});

document.querySelector('.js-middle-right').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-middle-right').innerHTML = 'x';
    array1[1][2] = 'x';
  } else {
    document.querySelector('.js-middle-right').innerHTML = 'o';
    array1[1][2] = 'o';
  }
  win(array1);
});

document.querySelector('.js-bottom-left').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-bottom-left').innerHTML = 'x';
    array1[2][0] = 'x';
  } else {
    document.querySelector('.js-bottom-left').innerHTML = 'o';
    array1[2][0] = 'o';
  }
  win(array1);
});

document.querySelector('.js-bottom-middle').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-bottom-middle').innerHTML = 'x';
    array1[2][1] = 'x';
  } else {
    document.querySelector('.js-bottom-middle').innerHTML = 'o';
    array1[2][1] = 'o';
  }
  win(array1);
});

document.querySelector('.js-bottom-right').addEventListener('click', () => {
  if (playerX) {
    document.querySelector('.js-bottom-right').innerHTML = 'x';
    array1[2][2] = 'x';
  } else {
    document.querySelector('.js-bottom-right').innerHTML = 'o';
    array1[2][2] = 'o';
  }
  win(array1);
});

const win = (array) => {
  if (array[0][0] === 'x' && array[0][1] === 'x' && array[0][2] === 'x') {
    document.querySelector('.js-winner').innerHTML = 'X Wins';
  } else if (
    array[0][0] === 'o' &&
    array[0][1] === 'o' &&
    array[0][2] === 'o'
  ) {
    document.querySelector('.js-winner').innerHTML = 'O Wins';
  } else if (
    array[1][0] === 'x' &&
    array[1][1] === 'x' &&
    array[1][2] === 'x'
  ) {
    document.querySelector('.js-winner').innerHTML = 'X Wins';
  } else if (
    array[1][0] === 'o' &&
    array[1][1] === 'o' &&
    array[1][2] === 'o'
  ) {
    document.querySelector('.js-winner').innerHTML = 'O Wins';
  } else if (
    array[2][0] === 'x' &&
    array[2][1] === 'x' &&
    array[2][2] === 'x'
  ) {
    document.querySelector('.js-winner').innerHTML = 'X Wins';
  } else if (
    array[2][0] === 'o' &&
    array[2][1] === 'o' &&
    array[2][2] === 'o'
  ) {
    document.querySelector('.js-winner').innerHTML = 'O Wins';
  } else if (
    array[0][0] === 'x' &&
    array[1][1] === 'x' &&
    array[2][2] === 'x'
  ) {
    document.querySelector('.js-winner').innerHTML = 'X Wins';
  } else if (
    array[0][0] === 'o' &&
    array[1][1] === 'o' &&
    array[2][2] === 'o'
  ) {
    document.querySelector('.js-winner').innerHTML = 'O Wins';
  } else if (
    array[0][2] === 'x' &&
    array[1][1] === 'x' &&
    array[2][0] === 'x'
  ) {
    document.querySelector('.js-winner').innerHTML = 'X Wins';
  } else if (
    array[0][2] === 'o' &&
    array[1][1] === 'o' &&
    array[2][0] === 'o'
  ) {
    document.querySelector('.js-winner').innerHTML = 'O Wins';
  } else if (count === 9) {
    document.querySelector('.js-winner').innerHTML = 'No Winners';
  } else {
    if (playerX) {
      document.querySelector('.js-winner').innerHTML = 'Player O, Your Turn';
    } else {
      document.querySelector('.js-winner').innerHTML = 'Player X, Your Turn';
    }
  }

  if (playerX) {
    playerX = false;
  } else {
    playerX = true;
  }
  count++;
};
