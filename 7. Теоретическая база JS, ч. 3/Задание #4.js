// Задание #4

// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false.

// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево.

const isPalindrome = (str) =>
    str.toLowerCase() === str.split("").reverse().join("");

console.log(isPalindrome("level")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false

// function isPalindrome(word) {
//     let halfLength = Math.floor(word.length / 2);

//     for (let i = 0; i < halfLength; i++) {
//         if (word[i] !== word[word.length - i - 1]) return false;
//     }
//     return true;
// }
