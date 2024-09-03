import {createTitle,
        createButtonsGroup,
        createForm,
        createTable} from './create.js';

export const renderTodo = (app) => {
    const title = createTitle();
    const form = createForm();
    const buttonGroup = createButtonsGroup([
        {
          classname: 'btn btn-primary me-3',
          type: 'submit', 
          text:  'Сохранить',
        
        },
        {
          classname: 'btn btn-warning',
          type: 'reset', 
          text:  'Очистить',
        },
      ]);
    const table = createTable();
  
  
    app.append(title, form, buttonGroup, table);
  
    return {
      list: table.tbody,
      btnAdd: buttonGroup.btns[0],
      btnDel: buttonGroup.btns[1],
      formOverlay: form,
    };
  };