import {createTitle,
  createForm,
  createTable} from './create.js';

export const renderTodo = (app) => {
  const title = createTitle();
  const form = createForm();
  const table = createTable();

  app.append(title, form, table);

  return {
    form,
    table,
  };
};
