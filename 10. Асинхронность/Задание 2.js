// Задание #2

// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу.

// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API.

const listToDo = document.getElementById("list");

async function start() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        render(data);
    } catch (error) {
        listToDo.style.color = "red";
        listToDo.textContent = error.message;
    }
}

function render(todos = []) {
    const html = todos.map(toHTML).join("");
    listToDo.innerHTML = html;
}

function toHTML(todo) {
    return `
        <li class="list-group-item">${todo.title}</li>
    `;
}

start();
