import {renderTodo} from './render.js';
import {initControls} from './control.js';

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);

  // Запрашиваем имя пользователя
  const username = prompt('Введите ваше имя');
  if (username) {
    localStorage.setItem('username', username);
  }

  // Рендерим todo и загружаем задачи для текущего пользователя
  const {form, table} = renderTodo(app);
  initControls(form, table);
};

window.todoInit = init;


