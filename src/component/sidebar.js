import React, { Component } from "react";
import './../public/assets/css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dashboardcreator from './dashboardcreator.js';
import Saldo from './saldo.js';
import DaftarMateri from './daftarmateri.js';
import UbahMateri from './ubahmateri.js';
import Materi from './materi.js';
import Kelas from './kelas.js';
import AnalisaSaya from './analisasaya.js';
import Pengikut from './pengikut.js';
import Pengaturan from './pengaturan.js';

class Sidebar extends Component {

  render(){
    return (
    <>
    <div class="wrapper">
      <nav id="sidebar" style={{height:"90vh"}}>

        <ul class="list-unstyled components">
          <NavLink to="/dashboardcreator/">
            <li>
              <a href="#">Dashboard</a>
            </li>
          </NavLink>
          <NavLink to="/dashboardcreator/saldo">
            <li>
              <a href="#">Saldo</a>
            </li>
          </NavLink>
          <NavLink to="/dashboardcreator/kelas">
            <li>
              <a href="#">Kelas</a>
            </li>
          </NavLink>

            <li>
            <a href="#dropdownmateri" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Materi</a>
            <ul class="collapse list-unstyled" id="dropdownmateri">
              <li>
                <NavLink to="/dashboardcreator/buatmateri">Buat Materi</NavLink>
              </li>
              <li>
                <NavLink to="/dashboardcreator/daftarmateri">Daftar Materi</NavLink>
              </li>
            </ul>
            </li>
          <NavLink to="/dashboardcreator/analisasaya">
            <li>
              <a href="#">Analisa Saya</a>
            </li>
          </NavLink>
          <NavLink to="/dashboardcreator/pengikut">
            <li>
              <a href="#">Pengikut</a>
            </li>
          </NavLink>
          <NavLink to="/dashboardcreator/pengaturan">
          <li>
            <a href="#">Pengaturan</a>
          </li>
          </NavLink>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a href="#/dashboard/akademi" class="download">Masuk Sebagai Member</a>
          </li>
          <li>
            <a href="#" class="article">Keluar</a>
          </li>
        </ul>
      </nav>
      <HashRouter>
        <Route exact path="/dashboardcreator/" component={Dashboardcreator}/>
        <Route path="/dashboardcreator/saldo" component={Saldo}/>
        <Route path="/dashboardcreator/kelas" component={Kelas}/>
        <Route path="/dashboardcreator/buatmateri" component={Materi}/>
        <Route path="/dashboardcreator/ubahmateri/:materiID" component={UbahMateri}/>
        <Route path="/dashboardcreator/daftarmateri" component={DaftarMateri}/>
        <Route path="/dashboardcreator/analisasaya" component={AnalisaSaya}/>
        <Route path="/dashboardcreator/pengikut" component={Pengikut}/>
        <Route path="/dashboardcreator/pengaturan" component={Pengaturan}/>
      </HashRouter>

    </div>

    </>
    );
  }
}

export default Sidebar;
