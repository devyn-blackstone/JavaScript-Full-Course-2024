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

['make dinner', 'wash dishes', 'watch survivor'].forEach((value, index) => {
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

const regularFunction = function (param, param2) {
  console.log('hello');
  return 5;
};

const arrowFunction = (param, param2) => {
  console.log('hello');
  return 5;
};

arrowFunction();

const oneParam = (param) => {
  // when using arrow function with only 1 paramater you do not have to include the () round brackets to establish the function
  console.log(param + 1);
};

oneParam(2);

const oneLine = () => 2 + 3;
// when only 1 line you do not have to have the {} curly brackets around the function AND you do not have to include the word "return"

console.log(oneLine());

const object2 = {
  method: () => {},
  method() {},
  // this is the shorthand method syntax for writing a function in an object
};
// can use arrow function in an object

const buttonElement = document.querySelector('.js-click-button');

buttonElement.addEventListener('click', () => {
  console.log('click');
});
// takes 2 paramaters (1,2):
// 1 is the event, what are you "listening" for
// 2 is the function we want to happen when the event is done

buttonElement.removeEventListener('click', () => {});
// this will remove the function when the event is done

const array = [1, -3, 5];

console.log(
  array.filter((value, index) => {
    if (value >= 0) {
      return true;
    } else {
      return false;
    }
  })
);
