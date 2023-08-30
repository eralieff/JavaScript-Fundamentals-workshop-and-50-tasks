// Задание #1

// Определите порядок вывода в следующем фрагменте кода без его запуска.

console.log("a"); // 1
new Promise((resolve, reject) => {
    console.log("b"); // 2
    setTimeout(() => {
        console.log("c"); // 5
        resolve();
    }, 0);
}).then(() => console.log("d")); // 6

console.log("e"); // 3
setTimeout(() => console.log("f"), 0); // 7
console.log("g"); // 4

// Определите для себя, почему вывод произошел именно в таком порядке.
