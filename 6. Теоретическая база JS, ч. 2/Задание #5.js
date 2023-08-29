// Задание #5

// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке.

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4

function countVowels(string) {
    const vowels = [
        "A",
        "E",
        "I",
        "O",
        "U",
        "А",
        "Е",
        "Ё",
        "И",
        "О",
        "У",
        "Ы",
        "Э",
        "Ю",
        "Я",
    ];

    let count = 0;

    for (const s of string.toUpperCase()) {
        if (vowels.includes(s)) count++;
    }

    return count;
}
