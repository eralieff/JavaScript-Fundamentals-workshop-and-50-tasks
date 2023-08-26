// Задание #1

// 1. Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
// 2. Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:
// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”
// 3. Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
// 4. Выведите циклом все названия свойств и их значения, которые есть у объекта john.

const john = {
        name: "John",
        age: 21,
        pet: "dog",
    },
    ann = {
        name: "Ann",
        age: 18,
        pet: "cat",
    };

function getPersonInfo(person) {
    console.log(
        `Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`
    );
}

getPersonInfo(john);
getPersonInfo(ann);

function incrementAge(person) {
    person.age++;
}

incrementAge(john);
getPersonInfo(john);
incrementAge(ann);
getPersonInfo(ann);

for (const key in john) {
    console.log(key, john[key]);
}
