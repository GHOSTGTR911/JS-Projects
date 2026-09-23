let tasks = [];

const form = document.getElementById("add-form");
const input = document.getElementById("task-input");
const listEl = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");
const emptyMsg = document.getElementById("empty-msg");

function loadTasks() {
    const saved = localStorage.getItem("tasks.json");
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch {
            tasks = [];
        }
    }
}

function saveTasks() {
    localStorage.setItem("tasks.json", JSON.stringify(tasks, null, 2));
}

function displaytasks() {
    listEl.innerHTML = "";
    emptyMsg.classList.toggle("hidden", tasks.length > 0);
    clearBtn.classList.toggle("hidden", tasks.length === 0);
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement("div");
        task.className = "task";

        const text = document.createElement("span");
        text.textContent = i + 1 + ": " + tasks[i];

        const delBtn = document.createElement("button");
        delBtn.className = "delete-btn";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => deletetask(i));

        task.appendChild(text);
        task.appendChild(delBtn);
        listEl.appendChild(task);
    }
}

function addtask(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task === "") return;
    tasks.push(task);
    input.value = "";
    saveTasks();
    displaytasks();
}

function deletetask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks();
        displaytasks();
    }
}

form.addEventListener("submit", addtask);
clearBtn.addEventListener("click", () => {
    tasks = [];
    saveTasks();
    displaytasks();
});

loadTasks();
displaytasks();
