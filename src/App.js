import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';
import Header from './component/header.js';
import Footer from './component/footer.js';

import Berita from "./page/berita.js";
import Saham from "./page/saham.js";
import JadiAnalis from "./page/jadianalis.js";

import Home from './page/home.js';
import CariCreator from './page/caricreator.js';
import Creator from './page/creator.js';
import MainPost from './page/mainpost.js';
import DetailPost from './component/detail-post.js';

import Login from './page/login.js';
import Register from './page/register.js'

import HeaderMember from './component/headermember.js';
import Sidebarmember from './component/sidebarmember.js';

import Headercreator from './component/headercreator.js';
import Sidebar from './component/sidebar.js';

function App() {
  return (
    <HashRouter>
    {/*<Route exact path="/" component={Home}/>
    <Route path="/cari" component={CariCreator}/>
    <Route path="/berita" component={Berita}/>
    <Route path="/saham" component={Saham}/>
    <Route path="/jadianalis" component={JadiAnalis}/>
    <Route path="/creator" component={Creator}/>
    <Route path="/andika/1" component={MainPost}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>*/}
    <Headercreator/>
    <Sidebar/>

    </HashRouter>
  );
}

export default App;
