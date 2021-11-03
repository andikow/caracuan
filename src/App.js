import logo from './logo.svg';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Headercreator from './component/headercreator.js';
import Creatoranalisa from './page/creatoranalisa.js';

function App() {
  return (
    <HashRouter>
      <Headercreator />
      <Creatoranalisa />
    </HashRouter>
  );
}

export default App;
