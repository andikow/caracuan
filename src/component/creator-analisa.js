import React, { Component } from "react";

import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/creatorpost1.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";

class CreatorAnalisa extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-auto ml-2 py-2 flex-wrap">
            <img src={Poto} alt="Poto" height="50" style={{borderRadius: "100%", display:'block'}} />
        </div>
        <div className="col">
          <div className="row py-2" style={{height:"30px"}}>
            <p className="text-primary font-weight-bold">Vandarina Risca</p>
          </div>
          <div className="row">
            <p className="text-secondary">3 Nov 21, 15:00</p>
          </div>
          <div className="row">
            <p className="text-primary"><b>IHSG</b> sampai 31 Desember 2021, apakah bisa ke 6700?<br /><br /> <b>BBCA BBRI BMRI BBTN</b></p>
        </div>
        <div className="row">
          <div className="card" style={{width:"500px"}}>
          <div className="card-body">
            <p className="text-primary" style={{fontSize:"11px"}}>PREDIKSI BULLISH</p>
            <h5 className="text-primary card-title">IHSG <span className="text-secondary" style={{fontSize:"11px"}}>Index Harga Saham Gabungan</span></h5>
            <h3 className="text-primary card-title">6,700 <span className="text-secondary" style={{fontSize:"11px"}}>Target Harga</span></h3>
            <div className="row">
              <div className="col">
                <p className="text-primary" style={{fontSize:"11px"}}>Harga Awal <br />6,133</p>
              </div>
              <div className="col">
                <p className="text-primary" style={{fontSize:"11px"}}>Kenaikan <br /> <span className="text-success">+9.24%</span></p>
              </div>
              <div className="col">
                <p className="text-primary" style={{fontSize:"11px"}}>Waktu <br />90 hari (tersisa 90 hari lagi)</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a className="btn btn-outline-danger btn-block text-danger font-weight-bold" href="#"><i className="fa fa-chevron-circle-down"></i> Tidak Setuju</a>
              </div>
              <div className="col">
                <a className="btn btn-outline-success btn-block text-success font-weight-bold" href="#"><i className="fa fa-chevron-circle-down"></i> Setuju</a>
              </div>

            </div>
          </div>
        </div>
        </div>
        </div>

      </div>
    );
  }
}

export default CreatorAnalisa;
