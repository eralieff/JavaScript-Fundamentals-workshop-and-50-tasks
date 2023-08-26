// Задание #3

// 1. Создайте пустой массив names.
// 2. Добавьте в него 5 любых имен.
// 3. Выведите массив в консоль.
// 4. Уберите из начала и конца массива по 1 элементу.
// 5. Снова выведите массив в консоль.

const names = [];

names.push("Berik");
names.push("Aizhan");
names.push("Nurtilek");
names.push("Yerasyl");
names.push("Akylbek");

console.log(names);

names.shift();
names.pop();

console.log(names);
