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
                  <NavLink to="/dashboard">
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
                      <NavLink to="/saldo">
                      <li>
                          <a href="#">Saldo</a>
                      </li>
                      </NavLink>
                      <NavLink to="/post">
                      <li>
                          <a href="#">Post</a>
                      </li>
                      </NavLink>
                      <NavLink to="/analisasaya">
                      <li>
                          <a href="#">Analisa Saya</a>
                      </li>
                      </NavLink>
                      <NavLink to="/pengikut">
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
                          <a href="#" class="download">Masuk Sebagai Member</a>
                      </li>
                      <li>
                          <a href="#" class="article">Keluar</a>
                      </li>
                  </ul>
              </nav>
              <HashRouter>
              <Route path="/dashboard" component={Dashboardcreator}/>
              <Route path="/saldo" component={Saldo}/>
              <Route path="/post" component={Post}/>
              <Route path="/analisasaya" component={AnalisaSaya}/>
              <Route path="/pengikut" component={Pengikut}/>
              </HashRouter>

          </div>

      </>
    );
  }
}

export default Sidebar;
