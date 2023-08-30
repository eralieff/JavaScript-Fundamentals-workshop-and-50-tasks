// Задание #3

// Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:

// addFriend() — принимает имя нового друга и добавляет его в массив friends;
// showFriends() — выводит в консоль строку со всеми друзьями через запятую.
// Сделайте так, чтобы код ниже работал:

class Person {
    constructor() {
        this.friends = [];
    }

    addFriend(firstName) {
        this.friends.push(firstName);
    }

    showFriends() {
        console.log(this.friends.join(", "));
    }
}

const person = new Person("asdf");
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь
