import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderManager from './modules/Header/manager/index';
import PageManager from './modules/Page/manager/index';
import FooterManager from './modules/Footer/manager/index';

function App() {
  return (
    <div className="App">
      <HeaderManager />
      <PageManager />
      <FooterManager />
    </div>
  );
}

export default App;
