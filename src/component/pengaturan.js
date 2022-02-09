import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';

class Pengaturan extends Component {
  render() {
    return (
      <>
      <div class="row">
        <div class="d-flex col-lg-12">
        <h2 className="mx-4 my-4 text-primary">Pengaturan</h2>
        <div class="align-items-center">
          <img src={Poto} alt="Poto" height="150" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
        </div>

        </div>
        <div class="d-flex col-lg-12">

        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
