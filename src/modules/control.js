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
        'text-decoration-line-through' : ''}"
        contenteditable="false">${task.text}</td>
        <td>${task.status}</td>
        <td>
          <button class="btn btn-danger">Удалить</button>
          <button class="btn btn-success">Завершить</button>
          <button class="btn btn-edit">Редактировать</button>
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

    if (taskText) {
      const newTask = {
        text: taskText,
        status: 'В процессе',
      };

      tasks.push(newTask);
      saveTasksToStorage(tasks);
      renderTasks();

      form.reset();
    }
  });


  tbody.addEventListener('click', (e) => {
    const target = e.target;
    const row = target.closest('tr');
    const index = Array.from(tbody.children).indexOf(row);

    if (target.classList.contains('btn-danger')) {
      const question = confirm('Вы уверены, что хотите удалить задачу?');
      if (question) {
        tasks.splice(index, 1);
        saveTasksToStorage(tasks);
        renderTasks();
      }
      return;
    }

    if (target.classList.contains('btn-success')) {
      tasks[index].status = tasks[index].status === 'В процессе' ?
      'Выполнена' : 'В процессе';
      saveTasksToStorage(tasks);
      renderTasks();
      return;
    }

    if (target.classList.contains('btn-edit')) {
      const taskCell = row.querySelector('.task');
      taskCell.contentEditable = taskCell.contentEditable === 'true' ?
      'false' : 'true';

      if (taskCell.contentEditable === 'false') {
        tasks[index].text = taskCell.textContent.trim();
        saveTasksToStorage(tasks);
        renderTasks();
      }
    }
  });
  tbody.addEventListener('blur', (e) => {
    const target = e.target;
    if (target.classList.contains('task') && target.isContentEditable) {
      const row = target.closest('tr');
      const index = Array.from(tbody.children).indexOf(row);
      tasks[index].text = target.textContent.trim();
      saveTasksToStorage(tasks);
      renderTasks();
    }
  }, true);
};
