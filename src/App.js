import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Header from './component/header.js';
import HeaderCreator from './component/headercreator.js';
import Sidebar from './component/sidebar.js';
import DashboardCreator from './component/dashboardcreator.js';

function App() {
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
}

export default App;
