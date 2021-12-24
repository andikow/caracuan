import React, { Component } from "react";
import $ from "jquery";
import './../public/assets/css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Akademi from './akademi.js';
import Mengikuti from './mengikuti.js';
import Transaksi from './transaksi.js';

class Sidebarmember extends Component {

  render(){
    return (
      <>
      <div class="wrapper">
              <nav id="sidebar">

                  <ul class="list-unstyled components">
                    <NavLink to="/akademi">
                      <li class ="active">
                          <a href="#">Akademi</a>
                      </li>
                    </NavLink>
                    <NavLink to="/mengikuti">
                      <li>
                        <a href="#">Mengikuti</a>
                      </li>
                    </NavLink>
                    <NavLink to="/transaksi">
                      <li>
                        <a href="#">Transaksi</a>
                      </li>
                    </NavLink>
                    <li>
                      <a href="#">Pengaturan</a>
                    </li>
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
              <Route exact path="/akademi" component={Akademi}/>
              <Route path="/mengikuti" component={Mengikuti}/>
              <Route path="/transaksi" component={Transaksi}/>
              </HashRouter>

          </div>

      </>
    );
  }
}

export default Sidebarmember;
