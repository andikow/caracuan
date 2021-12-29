import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto1 from './../public/assets/img/analis1.jpg';
import Poto2 from './../public/assets/img/analis2.jpg';
import Poto3 from './../public/assets/img/analis3.jpg';
import Poto4 from './../public/assets/img/analis4.jpg';
import Poto5 from './../public/assets/img/analis5.png';
import Poto6 from './../public/assets/img/analis6.png';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import DetailPost from './detail-post.js';

class Mengikuti extends Component {
  render() {
    return (
    <>
    <div class="container">
      <div className="row">
        <h2 className="col-12 m-1 mb-4 text-primary">Mengikuti</h2>
        <div class="row ml-2">
          <h5  className="col-auto m-1 pr-0 text-primary">Menampilkan</h5>
          <div class="dropdown col">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:80}}>
              30
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item">30</a>
              <a class="dropdown-item">60</a>
              <a class="dropdown-item">100</a>
            </div>
          </div>
          <div class="col">
            <h5 className="col-auto m-1 px-0 text-primary">Data</h5>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-end mr-4">
        <h5 className="col-auto m-3 px-0 text-primary">Cari</h5>
        <input type="text" class="form-control my-2" placeholder="Cari Analis" style={{width:200}} />
      </div>
      <div class="row py-4 justify-content-center m-0">
      <div class="col-lg-3 col-sm-6 mx-4">
              <div class="card" style={{height:70}}>
                <div class="row">
                    <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                      <img src={Poto1} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                    </div>
                    <div class="col">
                    <div class="row mr-auto">
                      <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Teras Saham</p>
                    </div>
                    <div class="row mr-auto">
                      <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>Paham Investasi-Melek Saham</p>
                    </div>
                    </div>
          </div>
          </div>
    </div>
      <div class="col-lg-3 col-sm-6 mx-4">
              <div class="card"  style={{height:70}}>
                <div class="row">
                    <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                      <img src={Poto2} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                    </div>
                    <div class="col">
                    <div class="row mr-auto">
                      <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Basic Academy Investor</p>
                    </div>
                    <div class="row mr-auto">
                      <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>Trader & Investor Saham</p>
                    </div>
                    </div>
          </div>
          </div>
    </div>
    <div class="col-lg-3 col-sm-6 mx-4">
            <div class="card"  style={{height:70}}>
              <div class="row">
                  <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                    <img src={Poto3} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                  </div>
                  <div class="col">
                  <div class="row mr-auto">
                    <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Kuliah Investasi</p>
                  </div>
                  <div class="row mr-auto">
                    <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>Edukasi Saham</p>
                  </div>
                  </div>
        </div>
        </div>
  </div>
  <div class="col-lg-3 col-sm-6 mx-4">
          <div class="card"  style={{height:70}}>
            <div class="row">
                <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                  <img src={Poto4} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                </div>
                <div class="col">
                <div class="row mr-auto">
                  <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Saham Milenial</p>
                </div>
                <div class="row mr-auto">
                  <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>Anak Milenial Harus Ngerti Saham</p>
                </div>
                </div>
      </div>
      </div>
  </div>
  <div class="col-lg-3 col-sm-6 mx-4">
          <div class="card"  style={{height:70}}>
            <div class="row">
                <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                  <img src={Poto5} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                </div>
                <div class="col">
                <div class="row mr-auto">
                  <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Saham ID</p>
                </div>
                <div class="row mr-auto">
                  <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>investorsaham.id</p>
                </div>
                </div>
      </div>
      </div>
  </div>
  <div class="col-lg-3 col-sm-6 mx-4">
          <div class="card"  style={{height:70}}>
            <div class="row">
                <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                  <img src={Poto6} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                </div>
                <div class="col">
                <div class="row mr-auto">
                  <p  class="text-primary font-weight-bold mb-0" style={{fontSize:13}}>Kapten Saham</p>
                </div>
                <div class="row mr-auto">
                  <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>Membeli Saham Gold Chip Berfundamental Baik!</p>
                </div>
                </div>
      </div>
      </div>
  </div>
    </div>
    <div class="row">
      <div class="col">
        <h5  className="col-auto m-1 text-primary">Menampilkan 1 sampai 6 dari 6 data</h5>
      </div>
      <div class="col d-flex justify-content-end mr-4">
        <a className="btn btn-primary text-center mx-2 text-white" href="#" style={{width:"100px", borderRadius:"10%"}}>Sebelum</a>
        <a className="btn btn-info text-center text-white font-weight-bold" href="#" style={{width:"50px"}}>1</a>
        <a className="btn btn-primary text-center mx-2 text-white" href="#" style={{width:"100px", borderRadius:"10%"}}>Sesudah</a>
      </div>
    </div>
    </div>
    </>
    )
  }
}

export default Mengikuti;
