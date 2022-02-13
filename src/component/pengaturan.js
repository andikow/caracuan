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
          <div class="col-4">
            <div class="align-items-center">
              <img src={Poto} alt="Poto" height="150" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
              <p class="text-primary text-align-center">Upload Image</p>
            </div>
          </div>
          <div class="col-8">
            <div class="form-group">
               <label class="text-primary">Nama Lengkap</label>
               <input  type="text" class="form-control my-2" placeholder="Nama Lengkap" />
            </div>
            <div class="form-group">
               <label class="text-primary">Tanggal Lahir</label>
               <input  type="date" class="form-control my-2"  />
            </div>
            <div class="form-group">
               <label class="text-primary">No. Handphone</label>
               <input type="text" class="form-control my-2" placeholder="No. Handphone" />
            </div>
            <div class="form-group">
               <label class="text-primary">Email</label>
               <input type="text" class="form-control my-2" placeholder="Email" />
            </div>
            <div class="form-group">
               <label class="text-primary">Password</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
