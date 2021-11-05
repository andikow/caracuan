import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Home from './page/home.js';
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
