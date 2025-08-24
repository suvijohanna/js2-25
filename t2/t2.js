'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = prompt(`Enter number ${i + 1}:`);
  numbers.push(num);
}

for (let num of numbers) {
  console.log(`${num}`);
}

let length = numbers.length;
console.log(`Length of array: ` + length);

const numToCheck = prompt(`Enter a number to search:`);

if (numbers.includes(numToCheck)) {
  alert(`The number ${numToCheck} is included in the array.`);
} else {
  alert(`The number ${numToCheck} is not included in the array.`);
}

console.log(`Contents of the array: ` + numbers);

numbers.pop();

console.log(`Updated contents of the array: ` + numbers);

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);

console.log(`Sorted contents of the array: ` + numbers);
