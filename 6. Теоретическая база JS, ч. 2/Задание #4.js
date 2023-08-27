// Задание #4

// Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.

function generateGoogleString(countOfO) {
    return countOfO < 3 ? "Google" : `G${"o".repeat(countOfO)}gle`;
}

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
