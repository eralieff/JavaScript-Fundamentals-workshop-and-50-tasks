// Задание #5

// Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false.

const isLeapYear = (year) =>
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
