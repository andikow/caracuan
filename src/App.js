import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import HeaderMember from './component/headermember.js';
import Sidebarmember from './component/sidebarmember.js';

function App() {
  return (
    <HashRouter>
      <HeaderMember />
      <Sidebarmember />
    </HashRouter>
  );
}

export default App;
