fetch('/api/tasks')
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById('task-list');
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task.title;
            taskList.appendChild(taskItem);
        });
    });
