'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введи число: ');
  if (isNaN(input)) {
    console.log(input);
    alert('Неправильный ввод, попрбуй еще раз!');
  } else if (input === null) {
    break;
  } else {
    numbers.push(input);
    console.log(numbers);
  }
} while (input !== null);

for (const number of numbers) {
  let num = Number(number);

  total += num;
}

console.log(`Общая сумма чисел равна: ${total}`);
alert(`Общая сумма чисел равна: ${total}`);
