// Задание #2

// Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. Если массив пустой, то возвращается значение undefined.

const findMaxValue = (array) => (array.length ? Math.max(...array) : undefined);

const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined
