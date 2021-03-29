import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderManager from './modules/Header/manager/index';
import PageManager from './modules/Page/manager/index';
import FooterManager from './modules/Footer/manager/index';
import { DarkThemeProvider } from './utils/DarkThemeProvider'

const App = () => (
  <Provider store={store}>
    <DarkThemeProvider themedComponents={
      <>
        <HeaderManager />
        <PageManager />
        <FooterManager />
      </>
    }>
    </DarkThemeProvider>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
