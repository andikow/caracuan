import React, { Component } from "react";
import $ from "jquery";
import './../public/assets/css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dashboardcreator from './dashboardcreator.js';
import Saldo from './saldo.js';
import Post from './post.js';
import AnalisaSaya from './analisasaya.js';
import Pengikut from './pengikut.js';

class Sidebar extends Component {

  render(){
    return (
      <>
      <div class="wrapper">
              <nav id="sidebar">

                  <ul class="list-unstyled components">
                    <NavLink to="/dashboardcreator/">
                      <li class ="active">
                          <a href="#">Dashboard</a>
                      </li>
                    </NavLink>
                    <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Halaman</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                    </li>
                    <NavLink to="/dashboardcreator/saldo">
                      <li>
                        <a href="#">Saldo</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboardcreator/post">
                      <li>
                        <a href="#">Post</a>
                      </li>
                    </NavLink>
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
                    <li>
                      <a href="#">Pengaturan</a>
                    </li>
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
              <Route path="/dashboardcreator/post" component={Post}/>
              <Route path="/dashboardcreator/analisasaya" component={AnalisaSaya}/>
              <Route path="/dashboardcreator/pengikut" component={Pengikut}/>
              </HashRouter>

          </div>

      </>
    );
  }
}

export default Sidebar;
