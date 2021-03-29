import { createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const persistedPage = localStorage.getItem('page');
const persistedTheme = localStorage.getItem('theme');

let initialState = {
  theme: persistedTheme ? JSON.parse(persistedTheme) : 'light',
  page: persistedPage ? JSON.parse(persistedPage) : 'home'
};

export const store = createStore(reducer, initialState, composeWithDevTools());

store.subscribe(() => {
    const page = store.getState().page;
    const theme = store.getState().theme;
  
    if (page) {
        localStorage.setItem('page', JSON.stringify(page));
    }
    if (theme) {
        localStorage.setItem('theme', JSON.stringify(theme));
    }
});
