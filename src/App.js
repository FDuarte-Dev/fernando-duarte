import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderManager from './modules/Header/manager/index';
import PageManager from './modules/Page/manager/index';
import FooterManager from './modules/Footer/manager/index';
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";
import { DarkThemeProvider } from './utils/DarkThemeProvider'

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const App = () => (
  <Provider store={store}>
    <DarkThemeProvider themedComponents={
      <Container className="App">
        <HeaderManager />
        <PageManager />
        <FooterManager />
      </Container>
    }>
    </DarkThemeProvider>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
