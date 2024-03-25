const array1 = ['hello', 'hello', 'egg', 'nsearch', 'egg', 'egg'];
/*
for (let i = 0; i < array1.length; i++) {
  if (array1[i] === 'search') {
    console.log(i);
    break;
  } else if (i === array1.length - 1) {
    console.log(-1);
  }
}

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      console.log(i);
      break;
    } else if (i === array.length - 1) {
      console.log(-1);
    }
  }
}

findIndex(array1, 'search');

function removeEgg(foods) {
  const newFoods = [];
  let eggCount = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      // check the array to see how many eggs there are nad if 2 or more than
      eggCount++;
      if (eggCount >= 3) {
        newFoods.push(foods[i]);
      } else {
        continue;
      }
    } else {
      newFoods.push(foods[i]);
    }
  }
  console.log(newFoods);
}

function removeEgg(foods) {
  const reverseArray = foods.slice().reverse();
  const newFoods = [];
  let eggCount = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      // check the array to see how many eggs there are nad if 2 or more than
      eggCount++;
      if (eggCount >= 3) {
        newFoods.push(foods[i]);
      } else {
        continue;
      }
    } else {
      newFoods.push(foods[i]);
    }
  }
  console.log(newFoods);
}

removeEgg(array1);

for (let i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}*/

function findIndex(array, word) {
  let wordCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      wordCount++;
    }
  }
  return wordCount;
}

function unique(array) {
  const newArray = [];

  //   look through the array and see if it is in the array multiple times

  for (let i = 0; i < array.length; i++) {
    const arrayIndex = findIndex(array, array[i]);
    console.log(arrayIndex);
    if (arrayIndex > 1 && newArray.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

unique(array1);
