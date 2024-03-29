function greeting() {
  console.log('hrllo');
}

greeting();

const num = 2;

const function1 = function () {
  // function name not needed - annoynomous function
  console.log('hello');
};

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function () {
    console.log('ello');
  },
};

object1.fun();

function display(param) {
  console.log(param);
}

display(2);

function run(param) {
  param();
}

run(function () {
  console.log('ay');
});
// passing a function into another function

setTimeout(function () {
  console.log('timeout');
  console.log('time out2');
  //   synchronous code - run line by line
}, 3000);
// asynchronous code - doesnt wait for this to finish before going to the next code

console.log('next line');
// takes 2 paramaters (funciton, time before performing in ms)

// setInterval(function () {
//   console.log('interval');
// }, 3000);
// built in function that takes 2 param(function, number in ms)

['make dinner', 'wash dishes', 'watch survivor'].forEach(function (
  value,
  index
) {
  if (value === 'wash dishes') {
    return;
  }
  console.log(index);
  console.log(value);
});

const add = function () {
  console.log(2 + 3);
};

add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log('12b');
});

runTwice(add);

function changeButton() {
  // find the element with the class of js-start-button to "finished" after 1 second
  document.querySelector('.js-start-button').innerHTML = 'LOADING...';
  setTimeout(function () {
    document.querySelector('.js-start-button').innerHTML = 'FINISHED!';
  }, 1000);
}
let timeoutId;

function displayMessage() {
  document.querySelector('.js-display-message').innerHTML = 'ADDED';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    document.querySelector('.js-display-message').innerHTML = '';
  }, 2000);
}

let messages = 2;
setInterval(function () {
  const title = document.title;

  if (title === 'Advanced Functions' && messages > 0) {
    document.querySelector(
      '.js-page-title'
    ).innerHTML = `(${messages}) Messages`;
  } else {
    document.querySelector('.js-page-title').innerHTML = 'Advanced Functions';
  }
}, 1000);

// onclick, run a function that adds 1 to messages or removes from messages

function messageCount(param) {
  if (param === 'add') {
    messages++;
  } else if (param === 'remove' && messages > 0) {
    messages--;
  }
}
