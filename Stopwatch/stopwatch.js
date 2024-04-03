document.querySelector('.js-start-button').addEventListener('click', () => {
  let timer = 0;
  const timerId = setInterval(() => {
    document.querySelector('.js-display-timer').innerHTML = timer;
    timer++;
  }, 1000);

  document.querySelector('.js-stop-button').addEventListener('click', () => {
    clearTimeout(timerId);
  });

  document.querySelector('.js-reset-button').addEventListener('click', () => {
    document.querySelector('.js-display-timer').innerHTML = '';
  });
});
