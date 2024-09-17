import {saveTasksToStorage, getTasksFromStorage} from './serviceStorage.js';

export const initControls = (form, table) => {
  const tbody = table.querySelector('tbody');
  const tasks = getTasksFromStorage();


  const renderTasks = () => {
    tbody.innerHTML = '';
    tasks.forEach((task, index) => {
      const newRow = document.createElement('tr');
      newRow.classList.add(task.status === 'Выполнена' ?
        'table-success' : 'table-light');
      newRow.innerHTML = `
        <td>${index + 1}</td>
        <td class="task ${task.status === 'Выполнена' ?
        'text-decoration-line-through' : ''}">${task.text}</td>
        <td>${task.status}</td>
        <td>
          <button class="btn btn-danger">Удалить</button>
          <button class="btn btn-success">Завершить</button>
        </td>
      `;
      tbody.appendChild(newRow);
    });
  };

  renderTasks();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input[name="task"]');
    const taskText = input.value.trim();

    const newTask = {
      text: taskText,
      status: 'В процессе',
    };

    tasks.push(newTask);
    saveTasksToStorage(tasks);
    renderTasks();

    form.reset();
  });

  tbody.addEventListener('click', (e) => {
    const target = e.target;
    const row = target.closest('tr');
    const index = Array.from(tbody.children).indexOf(row);

    if (target.classList.contains('btn-danger')) {
      tasks.splice(index, 1);
      saveTasksToStorage(tasks);
      renderTasks();
    }

    if (target.classList.contains('btn-success')) {
      tasks[index].status = tasks[index].status === 'В процессе' ?
      'Выполнена' : 'В процессе';
      saveTasksToStorage(tasks);
      renderTasks();
    }
  });
};
