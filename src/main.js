import {createSiteMenuTemplate} from '../src/components/site-menu.js';
import {createFilterTemplate} from '../src/components/filter.js';
import {createBoardTemaplate} from '../src/components/board.js';
import {createBoardTaskTemplate} from '../src/components/board-task.js';
import {createBoardFilterTemplate} from '../src/components/board-filter.js';
import {createCardTemplate} from '../src/components/card.js';
import {createEditFormTemplate} from '../src/components/edit-form.js';

import {createLoadMoreBtnTemplate} from '../src/components/load-btn.js';

const render = (container, component, position = `beforeend`) => {
  document.querySelector(container).insertAdjacentHTML(position, component);
};


render(`.main__control`, createSiteMenuTemplate(), `beforeend`);
render(`.main`, createSearchTemplate(), `beforeend`);
render(`.main`, createFilterTemplate(), `beforeend`);
render(`.main`, createBoardTemaplate(), `beforeend`);
render(`.board`, createBoardFilterTemplate(), `beforeend`);
render(`.board`, createBoardTaskTemplate(), `beforeend`);
