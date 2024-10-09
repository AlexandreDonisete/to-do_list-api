const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Fetch and display tasks
async function fetchTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();

    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.name}
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add a new task
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;

    const response = await fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: taskName }),
    });

    const newTask = await response.json();
    taskForm.reset();
    fetchTasks(); // Refresh the task list
});

// Delete a task
async function deleteTask(id) {
    await fetch(`/tasks/delete/${id}`, {
        method: 'DELETE',
    });
    fetchTasks(); // Refresh the task list
}

// Initial fetch
fetchTasks();
