document.addEventListener('DOMContentLoaded', () => {
  const addTaskForm = document.querySelector('.add-task-form');
  const taskInput = document.querySelector('.task-input');
  const taskList = document.querySelector('.task-list');

  let tasks = [];

  function addTask(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `<span class="task-text">${task}</span>
                          <button class="edit-btn">Edit</button>
                          <button class="delete-btn">Delete</button>`;
    taskList.appendChild(taskItem);
    tasks.push(taskItem);
  }

  function editTask(taskItem, newTaskText) {
    const taskText = taskItem.querySelector('.task-text');
    taskText.textContent = newTaskText;
  }

  function deleteTask(taskItem) {
    taskItem.remove();
    tasks = tasks.filter(item => item !== taskItem);
  }

  addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
      addTask(newTask);
      taskInput.value = '';
    }
  });

  taskList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
      const taskItem = e.target.closest('.task-item');
      deleteTask(taskItem);
    }

    if (e.target.classList.contains('edit-btn')) {
      const taskItem = e.target.closest('.task-item');
      const taskText = taskItem.querySelector('.task-text');
      const newTaskText = prompt('Enter the new task text:');
      if (newTaskText !== null && newTaskText !== '') {
        editTask(taskItem, newTaskText);
      }
    }
  });
});