import logo from './logo.svg';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Headercreator from './component/headercreator.js';
import Creatorpost from './page/creatorpost.js';

function App() {
  return (
    <HashRouter>
      <Headercreator />
      <Creatorpost />
    </HashRouter>
  );
}

export default App;
