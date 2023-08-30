"use strict";

const inputUser = document.getElementById("filter");
const listUsers = document.getElementById("list");
let USERS = [];

async function start() {
    list.textContent = "Loading...";
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        USERS = data;
        setTimeout(() => render(data), 2500);
    } catch (error) {
        list.style.color = "red";
        list.textContent = error.message;
    }
}

function render(users = []) {
    if (users.length === 0) {
        listUsers.innerHTML = "No matched users!";
    } else {
        const html = users.map(toHTML).join("");
        listUsers.innerHTML = html;
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `;
}

start();

inputUser.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) =>
        user.name.toLowerCase().includes(value)
    );
    render(filteredUsers);
});
