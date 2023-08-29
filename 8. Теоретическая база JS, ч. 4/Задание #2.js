// Задание #2

// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

const date1 = new Date("2027-06-01");
const date2 = new Date("2027-06-10");
const difference = getDateDifference(date1, date2);
console.log(difference); // 9

function getDateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInDays = Math.round(diffInMilliseconds / oneDay);

    return diffInDays;
}
