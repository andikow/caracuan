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
               <label class="text-primary">Nama</label>
               <input  type="text" class="form-control my-2" placeholder="Vandarina Risca" />
            </div>
            <div class="form-group">
               <label class="text-primary">Tanggal Lahir</label>
               <input  type="date" class="form-control my-2" />
            </div>
            <div class="form-group">
               <label class="text-primary">No. Handphone</label>
               <input type="text" class="form-control my-2" placeholder="085624742052" />
            </div>
            <div class="form-group">
               <label class="text-primary">Email</label>
               <input type="text" class="form-control my-2" placeholder="vandarina.risca@gmail.com" />
            </div>
            <div class="pt-4 form-group">
              <p class="pt-4 text-primary">Ganti Password</p>
               <label class="text-primary">Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
               <label class="text-primary">Konfirmasi Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
               <p className="text-primary" style={{fontSize:14}}>Lupa Password?</p>
            </div>
            <div class="d-flex my-2">
              <button className="btn btn-primary text-center text-white ml-auto font-weight-bold" href="#" style={{width:"150px"}}>Simpan</button>
            </div>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
