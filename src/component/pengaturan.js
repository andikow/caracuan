import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';

class Pengaturan extends Component {
  render() {
    return (
      <>
      <div class="container">
        <div class="row">
          <h2 className="col-12 mx-4 my-4 text-primary">Pengaturan</h2>
        </div>
        <div class="row">
          <div class="col-4" style={{backgroundColor:'#455544'}}>
            <div class="align-items-center">
              <img src={Poto} alt="Poto" height="150" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
            </div>
          </div>
          <div class="col-8" style={{backgroundColor:'#ccc'}}>

          </div>

          <div class="d-flex col-lg-12">

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
