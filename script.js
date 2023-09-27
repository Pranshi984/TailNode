function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const todoItem = document.createElement('div');
        todoItem.className = 'todo';
        todoItem.innerHTML = `
            <span>${todoText}</span>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}
