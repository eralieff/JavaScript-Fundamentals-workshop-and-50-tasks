// Задание #2

// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

function sum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
