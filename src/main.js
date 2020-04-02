import {createInfoTemplate} from './components/info';
import {createViewTabsTemplate} from './components/view-tabs';
import {createFiltersTemplate} from './components/filters';
import {createSortingTemplate} from './components/sorting';
import {createAddOrEditTemplate} from './components/event-add-edit';
import {createContentListTemplate, createContentItemTemplate} from './components/content-list';
import {createEventTemplate} from './components/content-event';

const EVENT_POINTS_QUANTITY = 3;
const headElement = document.querySelector(`.trip-main`);
const controlsElement = headElement.querySelector(`.trip-controls`);
const contentElement = document.querySelector(`.trip-events`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const cleanInnerMarkup = (element) => {
  element.innerHTML = ``;
};

render(headElement, createInfoTemplate(), `afterbegin`);
cleanInnerMarkup(controlsElement);
render(controlsElement, createViewTabsTemplate());
render(controlsElement, createFiltersTemplate());
render(contentElement, createSortingTemplate());
render(contentElement, createAddOrEditTemplate());
render(contentElement, createContentListTemplate());

const contentList = contentElement.querySelector(`.trip-days`);
render(contentList, createContentItemTemplate());

const contentEventsList = contentList.querySelector(`.trip-events__list`);
for (let i = 0; i < EVENT_POINTS_QUANTITY; i++) {
  render(contentEventsList, createEventTemplate());
}
