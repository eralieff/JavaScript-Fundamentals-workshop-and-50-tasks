// Задание #1

// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

const birthDate = new Date("1990-05-20");
const age = calculateAge(birthDate);

console.log(age);

function calculateAge(birthDate) {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let age = currentYear - birthYear;

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    return age;
}
