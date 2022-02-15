import React, { Component } from "react";
import $ from "jquery";
import './../public/assets/css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Akademi from './akademi.js';
import Mengikuti from './mengikuti.js';
import Transaksi from './transaksi.js';
import Pengaturan from './pengaturan.js';

class Sidebarmember extends Component {

  render(){
    return (
      <>
      <div class="wrapper">
              <nav id="sidebar">

                  <ul class="list-unstyled components">
                    <NavLink to="/dashboard/akademi">
                      <li class ="active">
                          <a href="#">Akademi</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/mengikuti">
                      <li>
                        <a href="#">Mengikuti</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/transaksi">
                      <li>
                        <a href="#">Transaksi</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/pengaturan">
                    <li>
                      <a href="#">Pengaturan</a>
                    </li>
                    </NavLink>
                  </ul>

                  <ul class="list-unstyled CTAs">
                      <li>
                          <a href="#" class="download">Masuk Sebagai Analis</a>
                      </li>
                      <li>
                          <a href="#" class="article">Keluar</a>
                      </li>
                  </ul>
              </nav>
              <HashRouter>
              <Route exact path="/dashboard/akademi" component={Akademi}/>
              <Route path="/dashboard/mengikuti" component={Mengikuti}/>
              <Route path="/dashboard/transaksi" component={Transaksi}/>
              <Route path="/dashboard/pengaturan" component={Pengaturan}/>
              </HashRouter>

          </div>

      </>
    );
  }
}

export default Sidebarmember;
