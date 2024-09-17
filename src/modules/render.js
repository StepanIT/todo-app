import {createTitle,
  createForm,
  createTable} from './create.js';

export const renderTodo = (app) => {
  const title = createTitle();
  const form = createForm();
  const table = createTable();
  const tbody = table.querySelector('tbody');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input[name="task"]');
    const taskText = input.value.trim();

    if (taskText === '') return;


    const newRow = document.createElement('tr');
    newRow.classList.add('table-light');

    const index = tbody.children.length + 1;

    newRow.innerHTML = `
      <td>${index}</td>
      <td class="task">${taskText}</td>
      <td>В процессе</td>
      <td>
        <button class="btn btn-danger">Удалить</button>
        <button class="btn btn-success">Завершить</button>
      </td>
    `;

    tbody.appendChild(newRow);

    form.reset();
  });

  app.append(title, form, table);

  return {

  };
};
