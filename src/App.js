import logo from './logo.svg';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Header from './component/header.js';
import Creator from './page/creator.js';

function App() {
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
}

export default App;
