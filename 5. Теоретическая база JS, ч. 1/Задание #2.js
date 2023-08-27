// Задание #2

// Напишите функцию func(), которая принимает num, min, max:

// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.

function func(num, min, max) {
    return num < min
        ? min ** 2
        : num > max
        ? max ** 2
        : num < max - (max - min) / 2
        ? num ** 2
        : Math.floor(num);
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8
