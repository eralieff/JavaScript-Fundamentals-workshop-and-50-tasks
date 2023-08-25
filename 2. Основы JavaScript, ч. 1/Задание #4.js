// Задание #4

// Выведите в консоль следующие выражения:

// typeof 'Hello'
// typeof 10
// typeof {}
// typeof null
// typeof undefined
// typeof true
// typeof []
// typeof (() => {})
// Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.

console.log(typeof "Hello"); // "" - это string
console.log(typeof 10); // числа без ничего number
console.log(typeof {}); // {} - это объект
console.log(typeof null); // null - это официально историческая ошибка typeof
console.log(typeof undefined); // undefined - то есть ничего не присвоено
console.log(typeof true); // boolean - это значения true, false
console.log(typeof []); // [] - new Array() - Object
console.log(typeof (() => {})); // Стрелочная функция
