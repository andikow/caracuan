import React from 'react';
import Logo from './../public/assets/img/logo_cover_white.png';
import { NavLink } from "react-router-dom";

import Home from './../page/home.js';

import Login from './../page/login.js';

export default class Header extends React.Component{

  render(){

    return(
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="col-lg-3 d-flex">
      <NavLink to="/"><img src={Logo} alt="Logo" height="50px" />
      </NavLink>
      </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <button class="btn btn-outline-light btn-sm my-auto rounded-circle" type="search"><i className="fa fa-search fa-sm text-white font-weight-bold"></i></button>
            <NavLink to="/cari">
              <a className="nav-item nav-link active text-white font-weight-bold" href="" style={{paddingLeft:"20px"}}>Cari Kreator<span className="sr-only">(current)</span>
              </a>
            </NavLink>
            <NavLink to="/berita">
              <a className="nav-item nav-link active text-white" href="" style={{paddingLeft:"20px"}}>Berita<span className="sr-only">(current)</span>
              </a>
            </NavLink>
            <NavLink to="/saham">
              <a className="nav-item nav-link text-white" href="" style={{paddingLeft:"20px"}}>Saham
              </a>
            </NavLink>
            <NavLink to="/login">
              <a className="nav-item nav-link text-white" href="" style={{paddingLeft:"20px"}}>Jadi Analis
              </a>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
    )
  }
}
