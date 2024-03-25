let calculation = localStorage.getItem('calculation') || '';

window.onload = storeCalculation;

function storeCalculation() {
  localStorage.getItem('calculation', calculation);
  document.querySelector('.js-display-calculation').innerHTML = calculation;
}

function updateCalculation(number) {
  if (number === 'clear') {
    calculation = '';
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
  } else if (number === '=') {
    calculation = eval(calculation);
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
  } else {
    calculation = calculation += number;
    console.log(calculation);
  }
  localStorage.setItem('calculation', calculation);

  document.querySelector('.js-display-calculation').innerHTML = calculation
    ? ''
    : 0;
}
