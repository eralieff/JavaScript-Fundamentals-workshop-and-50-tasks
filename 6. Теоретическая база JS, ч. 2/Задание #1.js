// Задание #1

// Дан объект машины.

// Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта.

/* 
<article>
    <div>
        <h2>Hendai Solaris</h2>
        <span>sedan</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>320</span>
    </div>
    <div>
        <span>Color:</span>
        <span>red</span>
    </div>
</article>
*/

const car = {
    name: "Hendai Solaris",
    type: "sedan",
    maxSpeed: "320",
    color: "red",
};

function generateCarHTML(carObject) {
    return `
    <article>
        <div>
            <h2>${carObject.name}</h2>
            <span>>${carObject.type}</span>
        </div>
        <div>
            <span>Maximum speed:</span>
            <span>>${carObject.maxSpeed}</span>
        </div>
        <div>
            <span>Color:</span>
            <span>>${carObject.color}</span>
        </div>
    </article>
    `;
}

console.log(generateCarHTML(car));
