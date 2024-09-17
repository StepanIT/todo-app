import {renderTodo} from './render.js';
import {initControls} from './control.js';

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);

  const username = prompt('Введите ваше имя');
  if (username) {
    localStorage.setItem('username', username);
  }

  const {form, table} = renderTodo(app);
  initControls(form, table);
};

window.todoInit = init;


