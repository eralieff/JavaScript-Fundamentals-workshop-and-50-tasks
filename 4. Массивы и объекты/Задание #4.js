// Задание #4

// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

// function generateHTMLList(names) {
//     let htmlString = "<ul>";

//     for (let i = 0; i < names.length; i++) {
//         htmlString += `<li>${names[i]}</li>`;
//     }

//     htmlString += "</ul>";
//     return htmlString;
// }

// const generatedHTML = generateHTMLList(names);

// console.log(generatedHTML);

const generateHTMLList = (arr) =>
    `<ul>${arr.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const generatedHTML = generateHTMLList(names);

console.log(generatedHTML);
