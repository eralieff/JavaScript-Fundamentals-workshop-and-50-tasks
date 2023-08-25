// Задание #4

// 1. Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

// 2. Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

/*
function sayHello(name = "someone") {
    return `Hello, ${name}!`;
}

console.log(sayHello("Berik"));
*/

let sayHello = (name = "someone") => `Hello, ${name}!`;

console.log(sayHello("Berik"));
