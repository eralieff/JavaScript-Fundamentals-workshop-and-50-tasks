// Задание #4

// Напишите функцию isWeekends(), которая проверяет, является ли указанная дата выходным днем.

const date1 = new Date("2027-07-10"); // Суббота
const date2 = new Date("2027-07-12"); // Понедельник

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0;

console.log(isWeekend(date1)); // true
console.log(isWeekend(date2)); // false
