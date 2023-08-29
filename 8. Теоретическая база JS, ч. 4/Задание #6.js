// Задание #6

// Напишите функцию, которая возвращает последнее число месяца.

const getLastDayOfMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31
