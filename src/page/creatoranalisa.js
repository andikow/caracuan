import React from 'react';
import Poto from './../public/assets/img/creator.png';
import Potobg from './../public/assets/img/bgcreator.jpg';

export default class Creator extends React.Component{

  render(){

    return(
    <>
      <div className="row"  style={{paddingLeft:"70px", paddingRight:"70px", paddingTop:"40px", paddingBottom:"40px"}}>
      <div className="aside pb-4 bg-light col-xs-12 col-sm-4 col-md-3 text-primary">
        <img src={Poto} alt="Poto" height="150" style={{marginTop: "30px", borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
        <div style={{textAlign:'center'}}>
        <h5 className="pt-4 font-weight-bold">Vandarina Risca</h5>
        <p>@vandarinarisca</p>
         <h6 className="font-weight-bold">Pengikut : 100</h6>
         <h6 className="font-weight-bold">Performa : 85%</h6>
         <p>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star-half-alt mr-2"></i>
         (24 penilaian)
         </p>
        </div>
      </div>
      <div className="container col-xs-12 col-sm-8 col-md-9">
      <img src={Potobg} alt="Potobg" height="225" width="100%" />
      <div className="row">
        <div className="col py-2">
            <a className="btn btn-primary text-center mx-2 text-white font-weight-bold" href="#">Beranda</a>
            <a className="btn btn-outline-primary text-primary text-center font-weight-bold" href="#">Post</a>
            <a className="btn btn-outline-primary mx-2 text-primary text-center font-weight-bold" href="#">Analisa</a>
        </div>
        <div className="col py-2" style={{textAlign: 'right'}}>
          <a className="btn btn-outline-primary mx-2 text-primary text-center font-weight-bold" href="#"><i className="fa fa-user-plus"></i> Ikuti</a>
          <a className="btn btn-outline-primary text-primary text-center font-weight-bold" href="#"><i className="fa fa-share"></i> Bagikan</a>
          <a className="btn btn-outline-danger mx-2 text-center font-weight-bold" href="#"><i style={{color:"#BE1E2D"}} className="fa fa-exclamation-triangle"></i></a>
        </div>
      </div>
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





      </div>
      </div>
    </>
    )
  }
}
