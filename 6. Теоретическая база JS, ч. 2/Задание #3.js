// Задание #3

// Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";

const initials = getInitials(fullName);

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((value) => value[0] + ".")
        .join(" ");
}

console.log(initials); // "J. D."
