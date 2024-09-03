// export const createContainer = () => {
//   const container = document.createElement('div');
//   container.classList.add('app-container');
//   return container;
// };

const container = document.querySelector('.app-container');
container.style.cssText = `
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

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
  form.classList.add('d-flex');
  form.insertAdjacentHTML('beforeend', `
    <label class="form-group me-3 mb-0">
        <input type="text" class="form-control" placeholder="ввести задачу">
      </label>
    `);

    const buttonGroup = createButtonsGroup([
      {
        className: 'btn btn-primary me-3',
        type: 'submit', 
        text:  'Сохранить',
      
      },
      {
        className: 'btn btn-warning',
        type: 'reset', 
        text:  'Очистить',
      },
    ]);

    form.append(...buttonGroup.btns);


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
            </td>
          </tr>
      `);

      table.append(thead, tbody);
      tableWrapper.append(table);

      return table;
};