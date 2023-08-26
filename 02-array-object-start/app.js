"use strict";

const inputNote = document.getElementById("title");
const addNoteBtn = document.getElementById("create");
const list = document.getElementById("list");

const notes = [
    {
        text: "Починить проблему с отображением данных на главной странице.",
        done: false,
    },
    {
        text: "Разработать интерфейс для загрузки и скачивания файлов.",
        done: false,
    },
    {
        text: "Создать систему уведомлений для пользователей.",
        done: true,
    },
];

function renderNotes() {
    list.textContent = "";
    for (let i = 0; i < notes.length; i++) {
        generateNote(notes[i], i);
    }
}

function generateNote(note, index) {
    list.insertAdjacentHTML(
        "beforeend",
        `
        <li
            class="list-group-item d-flex justify-content-between align-items-center" data-index="${index}"
        >
            <span class="${note.done ? "text-decoration-line-through" : ""}">${
            note.text
        }</span>
            <span>
                <span class="btn btn-small btn-${
                    note.done ? "warning" : "success"
                }" data-action="confirm">&check;</span>
                <span class="btn btn-small btn-danger" data-action="delete">&times;</span>
            </span>
        </li>
    `
    );
}

renderNotes();

inputNote.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addNoteBtn.onclick();
    }
});

addNoteBtn.onclick = function () {
    if (inputNote.value.length != 0) {
        const newNote = { text: inputNote.value, done: false };
        notes.push(newNote);
        renderNotes();
        inputNote.value = "";
    }
};

list.addEventListener("click", function (event) {
    let btn = event.target;

    if (btn.dataset.action === undefined) return;

    if (!btn.closest("li")) return;

    const currentIndex = Number(btn.closest("li").dataset.index);

    if (btn.dataset.action == "confirm") {
        notes[currentIndex].done = !notes[currentIndex].done;
        renderNotes();
    } else if (btn.dataset.action == "delete") {
        notes.splice(currentIndex, 1);
        renderNotes();
        if (notes.length === 0) {
            list.insertAdjacentHTML("beforeend", "<p>Нет заметок</p>");
        }
    }
});
