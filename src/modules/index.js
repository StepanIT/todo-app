import {renderTodo} from './render.js';

{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
    
        const {
            list,
            btnAdd,
            btnDel,
            formOverlay,
          } = renderTodo(app);
    
        }
      window.todoInit = init;
}

