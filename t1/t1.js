'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

for (let fruit of fruits) {
  console.log(`${fruit}`);
}

let length = fruits.length;
let lastfruit = fruits[fruits.length - 1];

console.log(`How many fruits? ` + length);
console.log(`Element at Index 2: ` + fruits[2]);
console.log(`Last element: ` + lastfruit);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(vegetable);
}

console.log('Vegetables entered:');
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

const veggieList = vegetables.length;

console.log(`How many vegetables? ` + veggieList);
