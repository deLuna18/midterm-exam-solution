// QUESTION 4

let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInputName = document.getElementById('todo-input-name');
const todoInputDescription = document.getElementById('todo-input-description');
const todoList = document.getElementById('todo-list');

// Render Todos
function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <strong>${todo.name}</strong>: ${todo.description}
            <button onClick="editTodo(${index})">Edit</button>
            <button onClick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}
    
// Add a todo
function addTodo(event) {
    event.preventDefault();
    const newTodoName = todoInputName.value.trim();
    const newTodoDescription = todoInputDescription.value.trim();
    
    if (newTodoName && newTodoDescription) {
        const newTodo = {
            id: Date.now(), 
            name: newTodoName,
            description: newTodoDescription
        };
        todos.push(newTodo);
        todoInputName.value = ''; 
        todoInputDescription.value = ''; 
        renderTodos();
    }
}
    
// Edit a todo
function editTodo(index) {
    const todoToEdit = todos[index];
    const updatedName = prompt('Edit the name of your todo:', todoToEdit.name);
    const updatedDescription = prompt('Edit the description of your todo:', todoToEdit.description);
    
    if (updatedName !== null && updatedDescription !== null) {
        todos[index].name = updatedName.trim();
        todos[index].description = updatedDescription.trim();
        renderTodos();
    }
}
    
// Delete todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}
    
todoForm.addEventListener("submit", addTodo);
    
renderTodos();
