// Задание #1

// Создайте класс Circle, который имеет поле radius, а также метод getArea(), высчитывающий площадь круга и округляющий её до двух знаков после запятой.

// Сделайте так, чтобы код ниже работал:

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
}

const circle = new Circle(5);

console.log(circle.getArea()); // "78.54"
