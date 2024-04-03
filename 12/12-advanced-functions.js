// function greeting() {
//   console.log('hrllo');
// }

const greeting = () => console.log('hello');

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

// function display(param) {
//   console.log(param);
// }

const display = (param) => console.log(param);

display(2);

function run(param) {
  param();
}

run(function () {
  console.log('ay');
});
// passing a function into another function

// const run = () => console.log('ay');

// run();

setTimeout(function () {
  console.log('timeout');
  console.log('time out2');
  //   synchronous code - run line by line
}, 3000);
// asynchronous code - doesnt wait for this to finish before going to the next code
// setTimeout(() => {
//   console.log('timeout');
//   console.log('time out2');
// }, 3000);

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

// const runTwice = () => console.log('12b');

runTwice(add);

// find the element with the class of js-start-button to "finished" after 1 second
const startButton = document.querySelector('.js-start-button');

startButton.addEventListener('click', () => {
  // when you click the button with the js-start-button class, change the items within the <button>THIS</button>
  startButton.innerHTML = 'LOADING...';

  setTimeout(function () {
    startButton.innerHTML = 'FINISHED!';
  }, 1000);
  // run the setTimeout function which changes the HTML after 1sec
});

let timeoutId;

const displayButton = document.querySelector('.js-display-button');
const displayMessage = document.querySelector('.js-display-message');

displayButton.addEventListener('click', () => {
  displayMessage.innerHTML = 'ADDED';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    displayMessage.innerHTML = '';
  }, 2000);
});

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

document
  .querySelector('.js-add-message-button')
  .addEventListener('click', () => {
    messages++;
  });

document
  .querySelector('.js-remove-message-button')
  .addEventListener('click', () => {
    if (messages > 0) {
      messages--;
    }
  });

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

const array = [1, -3, -1];

console.log(
  array.filter(
    (value, index) => {
      if (value >= 0) {
        return true;
      } else {
        return false;
      }
    }
    // this can also be written like this:
    // return value >= 0;
    // this reads: return true if statement is true else false
  )
);

// array.map((value, index)=> {});

console.log(
  array.map((value, index) => {
    return value * 2;
  })
);
// better way to write this:
// array.map((value) => value * 2)
// since only using 1 param dont need the "index" param
// since only 1 line of code we dont need the {}curly brackets or the "return"

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));

let count = 0;

const countPositive = (nums) => {
  if (nums > 0) {
    count++;
  }
  console.log(count);

  return count;
};

array.forEach(countPositive);

const addNum = (array, num) => array.map((value) => value + num);

console.log(addNum(array, 2));

let eggCount = 0;
const removeEgg = (foods) =>
  foods.filter((value) => {
    if (value === 'egg') {
      eggCount++;
      if (eggCount > 2) {
        return value;
      }
      // filter through the array and count 2 eggs, once you have counted 2 then add the next one to the array
      // filter through foods and when you see egg - skip it, when you see egg again - skip it, when you see egg next, add it
    } else if (value != 'egg') {
      return value;
    }
  });

console.log(removeEgg(['egg', 'milk', 'egg', 'egg', 'egg']));
