const apiEndpoint = 'http://localhost:8000/todos';

fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    renderTodoList(data);
  })
  .catch(error => console.error('Error fetching todo list data:', error));

function renderTodoList(data, filter = 'all') {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    const filteredData = data.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'todo') return !todo.completed;
        if (filter === 'done') return todo.completed;
    });

    filteredData.forEach((todo) => {
        const todoHtml = `
        <li class="my-3 py-3 shadow list-group-item" id="list${todo.id}">
          <div class="row">
            <div class="col-1">
              <input class="" type="checkbox" id="check${todo.id}" ${todo.completed ? 'checked' : ''} onclick="completed(${todo.id})">
              <span class="h4">${todo.id}.</span>
            </div>
            <div class="col-6">
              <span class="h4 ${todo.completed ? 'text-decoration-line-through' : ''}" id="text${todo.id}">${todo.name}</span>
            </div>
            <div class="col-4">
              <button class="btn btn-success" onclick="editList(${todo.id})">Edit</button>
              <button class="btn btn-danger" onclick="deleteList(${todo.id})">Delete</button>
            </div>
          </div>
        </li>
      `;
        list.innerHTML += todoHtml;
    });
}

document.getElementById('addButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const lastTodoId = document.querySelectorAll('#todo-list li').length;
        const newTodoId = lastTodoId + 1;

        const newTodo = { id: newTodoId, name: inputText, completed: false };

        fetch(apiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Todo added:', data);
                renderTodoList(data.todos);
            })
            .catch(error => console.error('Error adding todo:', error));
        document.getElementById('inputText').value = '';
    }
});

function completed(id) {
    const checkbox = document.getElementById(`check${id}`);
    const current = document.getElementById(`text${id}`);
    const classExit = current.classList.contains('text-decoration-line-through');
    if (classExit) {
        current.classList.remove('text-decoration-line-through');
    } else {
        current.classList.add('text-decoration-line-through');
    }
    
    const apiUpdateEndpoint = `${apiEndpoint}/${id}`;
    fetch(apiUpdateEndpoint, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: checkbox.checked }),
    })
        .then(response => response.json())
        .then(data => console.log('Todo updated:', data))
        .catch(error => console.error('Error updating todo:', error));
}

function editList(id) {
    const currentText = document.getElementById(`text${id}`);
    const newText = prompt('Wanna change list?', currentText.innerHTML);
    if (newText) {
        currentText.innerHTML = newText;

        const apiUpdateEndpoint = `${apiEndpoint}/${id}`;
        fetch(apiUpdateEndpoint, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newText }),
        })
            .then(response => response.json())
            .then(data => console.log('Todo updated:', data))
            .catch(error => console.error('Error updating todo:', error));
    }
}

function deleteList(id) {
    const current = document.getElementById(`text${id}`).innerHTML;
    const deleteConfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteConfirm) {
        const list = document.getElementById('todo-list');
        const listItem = document.getElementById(`list${id}`);
        list.removeChild(listItem);

        const apiDeleteEndpoint = `${apiEndpoint}/${id}`;
        fetch(apiDeleteEndpoint, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => console.log('Todo deleted:', data))
            .catch(error => console.error('Error deleting todo:', error));
    }
}