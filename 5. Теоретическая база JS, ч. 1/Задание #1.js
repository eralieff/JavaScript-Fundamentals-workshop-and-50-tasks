// Задание #1

// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(25));
