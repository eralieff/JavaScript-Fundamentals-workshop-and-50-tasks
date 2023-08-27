// Задание #4

// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition.

// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

// Примечание. Нельзя использовать приведение числа к строке.

function getNumberDigit(number, digitPosition) {
    if (digitPosition < 0) {
        return undefined; // Некорректная позиция
    }

    let divisor = 1;
    let num = number;

    while (num >= 10) {
        num = Math.floor(num / 10);
        divisor *= 10;
    }

    for (let i = 0; i < digitPosition; i++) {
        divisor /= 10;
    }

    if (num === 0 || divisor < 1) {
        return undefined; // Позиция больше, чем число цифр в числе
    }

    return Math.floor((number / divisor) % 10);
}

console.log(getNumberDigit(123, 0)); // 1
console.log(getNumberDigit(123, 1)); // 2
console.log(getNumberDigit(123, 2)); // 3
console.log(getNumberDigit(1, 2)); // undefined
