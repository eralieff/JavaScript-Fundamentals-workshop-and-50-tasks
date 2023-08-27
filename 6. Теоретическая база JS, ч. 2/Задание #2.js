// Задание #2

// Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";

console.log(countWords(sentence)); // 4

function countWords(sentence) {
    return sentence.trim().split(" ").length;
}
