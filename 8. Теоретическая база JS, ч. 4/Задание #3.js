// Задание #3

// Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной.

const targetDate = new Date("2027-12-31T23:59:59");
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

function getTimeUntilDate(date) {
    const now = new Date();
    const timeDifference = date - now;

    if (timeDifference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(timeDifference / oneDay);
    const hours = Math.floor((timeDifference % oneDay) / oneHour);
    const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

    return { days, hours, minutes, seconds };
}
