import { createStore } from 'redux';
import { reducer } from './reducer';

const persistedPage = localStorage.getItem('page');
const persistedTheme = localStorage.getItem('theme');

let initialState = {
  theme: persistedTheme ? JSON.parse(persistedTheme) : 'light',
  page: persistedPage ? JSON.parse(persistedPage) : 'home'
};

export const store = createStore(reducer, initialState);

store.subscribe(() => {
    const page = store.getState().page;
    const theme = store.getState().theme;
  
    localStorage.setItem('page', JSON.stringify(page));
    localStorage.setItem('theme', JSON.stringify(theme));
  });