'use strict';

const numbers = [];
let cont = true;

while (cont) {
  const number = prompt(`Anna luku tai kirjoita 'done'`);
  if (number === `done`) {
    alert(`lopetit ohjelman!`);
    cont = false;
  }
  numbers.push(number);
}

console.log(numbers);

document.getElementById('target').innerHTML = `Tasaluvut: `;
for (const number of numbers) {
  if (number % 2 === 0) {
    document.getElementById('target').innerHTML += number + `, `;
  }
  else {
    document.getElementById('target').innerHTML = `Ei tasalukuja`;
  }
}
