// const todoList = [
//   {
//     name: 'item 1',
//     dueDate: '09/22/1990',
//   },
//   { name: 'item 2', dueDate: '09/22/1990' },
// ];

const todoList = JSON.parse(localStorage.getItem('todoListKey')) || [];

renderTodoList();

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function renderTodoList() {
  let todoListHTML = '';
  // holds the list with the HTML elements
  todoList.forEach((todo, index) => {
    const { name, dueDate } = todo;
    // pull the items out of the list and store in their own variable

    const html = `
  <div>${name}</div> 
  <div>${dueDate}</div> 
  <button class="delete-button js-delete-todo-button"
  >DELETE</button>
  `;
    // when you click the delete button it removes the [i] item and shows the updated todoList without that item
    todoListHTML += html;
    // every time we run this code update the todolist with this new
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  // const array1 = ['a', 'b', 'c'];

  // array1.forEach((element, index) => console.log(element, index));

  document
    .querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  // looks through the document for an item with a class value of js-input

  const name = inputElement.value;
  //   grabbing the value from that element (a built in feature)

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    // name: name,
    // dueDate: dueDate
    // shorthand Property syntax
    name,
    dueDate,
  });
  //   push new value to end of array
  localStorage.setItem('todoListKey', JSON.stringify(todoList));
  inputElement.value = '';
  //  changing the info held in the value field to blank

  renderTodoList();
}

// const nums = [10, 20, 30];

// nums[2] = 99;

// console.log(nums);

// function getLastValue(array) {
//   const lastValue = array[array.length - 1];
//   console.log(lastValue);
// }

// getLastValue(nums);
// getLastValue(['good', 'job', 'devyn']);

// function arraySwap(array) {
//   const lastValue = array[array.length - 1];
//   const firstValue = array[0];

//   array[0] = lastValue;
//   array[array.length - 1] = firstValue;

//   console.log(array);
// }

// arraySwap(nums);
// arraySwap(['first', 'second', 'third', 'fourth']);

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }
// // let i = 0;
// // while (i <= 10) {
// //   console.log(i);
// //   i += 2;
// // }

// // let i = 5;
// // while (i >= 0) {
// //   console.log(i);
// //   i--;
// // }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];

// /*const newArray = [];
// for (let i = 0; i < array1.length; i++) {
//   newArray.push(array1[i] + 1);
//   console.log(newArray);
// }

// function addOne(array) {
//   array = [1,2,3,4]
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] + 1);
//     console.log(newArray);
//   }
// }

// addOne(array1);

// function addNum(array, num) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] + num);
//     console.log(newArray);
//   }
// }

// addNum(array1, 2);

// function addArrays(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     newArray[i] = array1[i] + array2[i];
//     console.log(newArray);
//   }
// }

// addArrays(array1, array2);

// function countPositive(nums) {
//   let positiveNums = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       positiveNums++;
//     }
//   }
//   console.log(positiveNums);
// }

// countPositive(array1);*/

// function minMax(nums) {
//   // look through array for smallest number, if [1,2,3], compare 1 -> 2, 1 is smaller, store that number, then compare stored number with next index
//   let minNum;
//   let maxNum;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < minNum || !minNum) {
//       // 1<2
//       minNum = nums[i];
//       //   =1
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxNum || !maxNum) {
//       // 1<2
//       maxNum = nums[i];
//       //   =1
//     }
//   }

//   console.log(minNum);
//   console.log(maxNum);
// }

// minMax(array1);
// minMax([3, 7, 0]);

// function countWords(words) {
//   const wordCount = {};

//   for (let i = 0; i < words.length; i++) {
//     if (wordCount.hasOwnProperty(words[i])) {
//       wordCount[words[i]]++;
//     } else {
//       wordCount[words[i]] = 1;
//     }
//   }
//   console.log(wordCount);
// }

// countWords(['hello', 'good', 'morning', 'good', 'morning']);
