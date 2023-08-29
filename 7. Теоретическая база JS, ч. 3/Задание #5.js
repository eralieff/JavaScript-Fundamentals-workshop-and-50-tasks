// Задание #5

// Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов.

const removeDuplicates = (arr) => new Array(...new Set(arr));

// const removeDuplicates = arr =>
//   array.filter((value, index) => array.indexOf(value) === index);

const numbers1 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

const numbers2 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

const emptyArray = [];
console.log(removeDuplicates(emptyArray)); // []

// function removeDuplicates(array) {
//     const newArray = [];
//     array.forEach((element) => {
//         if (!newArray.includes(element)) newArray.push(element);
//     });
//     return newArray;
// }
