import { Route, HashRouter } from "react-router-dom";
import './App.css';
import  './public/assets/fontawesome/css/all.css';
import './public/assets/bootstrap/css/bootstrap.css';

import Berita from "./page/berita.js";
import Saham from "./page/saham.js";
import JadiAnalis from "./page/jadianalis.js";

import Home from './page/home.js';
import CariCreator from './page/caricreator.js';
import Creator from './page/creator.js';
import MainPost from './page/mainpost.js';

import Login from './page/login.js';
import Register from './page/register.js'

import HeaderMember from './component/headermember.js';
import Sidebarmember from './component/sidebarmember.js';

import Headercreator from './component/headercreator.js';
import Sidebar from './component/sidebar.js';

import Tentang from './page/tentang.js';
import Bantuan from './page/bantuan.js';
import Syaratketentuan from './page/syaratketentuan.js';
import Kebijakanprivasi from './page/kebijakanprivasi.js';

function App() {
  return (
    <HashRouter>
    <Route exact path="/" component={Home}/>
    <Route path="/cari" component={CariCreator}/>
    <Route path="/berita" component={Berita}/>
    <Route path="/saham" component={Saham}/>
    <Route path="/jadianalis" component={JadiAnalis}/>
    <Route path="/creator" component={Creator}/>
    <Route exact path="/post/:postID" component={MainPost}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path ="/dashboard" component={HeaderMember}/>
    <Route path ="/dashboard" component={Sidebarmember}/>
    <Route path ="/dashboardcreator" component ={Headercreator}/>
    <Route path ="/dashboardcreator" component ={Sidebar}/>
    <Route path="/tentang" component={Tentang}/>
    <Route path="/bantuan" component={Bantuan}/>
    <Route path="/syaratketentuan" component={Syaratketentuan}/>
    <Route path="/kebijakanprivasi" component={Kebijakanprivasi}/>
    </HashRouter>
  );
}

export default App;
