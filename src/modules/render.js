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

  tbody.addEventListener('click', (e) => {
    const target = e.target;

   if(target.classList.contains('btn-danger')) {
      const row = target.closest('tr');
      row.remove();

      Array.from(tbody.children).forEach((row, index) => {
        row.children[0].textContent = index + 1;
      });
    }
  });
  
  
  tbody.addEventListener('click', (e) => {
    const target = e.target;

   if(target.classList.contains('btn-success')) {

      const row = target.closest('tr');
      const taskCell = row.querySelector('.task');
      const statusCell = row.children[2];

      taskCell.classList.toggle('text-decoration-line-through');
      if (statusCell.textContent === 'В процессе') {
        statusCell.textContent = 'Выполнена';
        row.classList.remove('table-light');
        row.classList.add('table-success');
      } else {
        statusCell.textContent = 'В процессе';
        row.classList.remove('table-success');
        row.classList.add('table-light');
      }
    }
  });
  




  app.append(title, form, table);

  return {

  };
};
