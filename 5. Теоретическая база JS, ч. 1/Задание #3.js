// Задание #3

// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.

// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

function isPerfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) sum += i;
    }

    return sum === number;
}

console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(16)); // false
