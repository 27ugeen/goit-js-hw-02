'use strict';

const checkForSpam = function(str) {
  const strLowercase = str.toLowerCase();

  const removChar = function(str) {
    const res = str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

    return res;
  };

  const strForCheck = removChar(strLowercase);

  const words = strForCheck.split(' ');

  const wordSpam = 'spam';
  const wordSale = 'sale';

  //===============можно так================
  // for (const word of words) {
  //   if (word === wordSpam || word === wordSale) {
  //     return true;
  //   }
  // }
  // return false;

  //========= а можно так ================
  return words.includes(wordSpam) || words.includes(wordSale);
};
// какой вариант лучше?

// Вызовы функции для проверки работоспособности твоей реализации.
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
