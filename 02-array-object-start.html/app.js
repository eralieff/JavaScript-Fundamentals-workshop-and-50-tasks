"use strict";

const inputNote = document.getElementById("title");
const addNoteBtn = document.getElementById("create");
const list = document.getElementById("list");

const notes = [
    {
        text: "Починить проблему с отображением данных на главной странице.",
        status: "inProgress",
    },
    {
        text: "Разработать интерфейс для загрузки и скачивания файлов.",
        status: "inProgress",
    },
    {
        text: "Создать систему уведомлений для пользователей.",
        status: "done",
    },
];

function renderNotes() {
    for (const note of notes) {
        generateNote(note);
    }
}

function generateNote(note) {
    list.insertAdjacentHTML(
        "beforeend",
        `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>${note.text}</span>
            <span>
                <span class="btn btn-small btn-success" data-action="confirm">&check;</span>
                <span class="btn btn-small btn-danger" data-action="delete">&times;</span>
            </span>
        </li>
    `
    );
}

renderNotes();

addNoteBtn.onclick = function () {
    if (inputNote.value.length != 0) {
        generateNote(inputNote.value);
    }
};

list.addEventListener("click", function (event) {
    let btn = event.target;

    if (btn.dataset.action === undefined) return;

    if (!btn.closest("li")) return;

    if (btn.dataset.action == "confirm") {
        console.log("CONFIRM!");
    } else if (btn.dataset.action == "delete") {
        btn.closest("li").remove();
    }
});
