// Задание #6

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:

function createCounter(value) {
    return {
        inc: () => value++,
        dec: () => value--,
        get: () => value,
    };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
