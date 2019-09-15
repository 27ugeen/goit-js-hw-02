'use strict';

//================================================
// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     const word = words[i];
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };
//==============================================

const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

// Вызовы функции для проверки работоспособности твоей реализации.
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
