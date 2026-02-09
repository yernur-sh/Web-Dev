const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    // 1. Жаңа элемент жасау
    const li = document.createElement('li');
    li.className = 'todo-item';

    // 2. Чекбокс жасау
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        span.classList.toggle('done', checkbox.checked);
    };

    // 3. Мәтін жасау
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    // 4. Өшіру батырмасы (trash icon)
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function() {
        li.remove();
    };

    // 5. Тізімге қосу
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = ""; // Енгізу өрісін тазалау
}

addBtn.addEventListener('click', addTask);

// Enter батырмасын басуды қадағалау
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});