

const container = document.querySelector('.app-container');
container.classList.add('vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column');


export const createTitle = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Todo App';

  return h3;
};

export const createButtonsGroup = params => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');


  const btns = params.map(({className, type, text}) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = className;
    return button;
  });

  btnWrapper.append(...btns);

  return {
    btnWrapper,
    btns,
  };
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  form.insertAdjacentHTML('beforeend', `
    <label class="form-group me-3 mb-0">
        <input type="text" class="form-control"
        placeholder="ввести задачу" name="task">
      </label>
    `);

  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary me-3',
      type: 'submit',
      disabled: 'disabled',
      text: 'Сохранить',

    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);


  const [saveButton] = buttonGroup.btns;
  saveButton.disabled = true;


  form.append(...buttonGroup.btns);


  const input = form.querySelector('input[name="task"]');


  const updateSaveButtonState = () => {
    if (input.value.trim() === '') {
      saveButton.disabled = true;
    } else {
      saveButton.disabled = false;
    }
  };

  input.addEventListener('input', updateSaveButtonState);

  form.addEventListener('reset', () => {
    setTimeout(updateSaveButtonState, 0);
  });

  return form;
};

export const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
    `);

  const tbody = document.createElement('tbody');
  tbody.insertAdjacentHTML('beforeend', `
      <tr class="table-light">
            <td>1</td>
            <td class="task">
              Купить слона
            </td>
            <td>В процессе</td>
            <td>
              <button class="btn btn-danger">
                Удалить
              </button>
              <button class="btn btn-success">
                Завершить
              </button>
              <button class="btn btn-edit">
                Редактировать
              </button>
            </td>
          </tr>

          <tr class="table-success">
            <td>2</td>
            <td class="text-decoration-line-through">
              Помыть кота
            </td>
            <td>Выполнена</td>
            <td>
              <button class="btn btn-danger">
                Удалить
              </button>
              <button class="btn btn-success">
                Завершить
              </button>
              <button class="btn btn-edit">
                Редактировать
              </button>
            </td>
          </tr>
      `);

  table.append(thead, tbody);
  tableWrapper.append(table);

  return tableWrapper;
};
