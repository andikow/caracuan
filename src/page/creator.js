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
          <a className="btn btn-outline-danger mx-2 text-center font-weight-bold" href="#"><i className="fa fa-exclamation-triangle"></i></a>
        </div>
      </div>
      <div className="row">
        <div className="col-8 py-2">
          <h5 className="font-weight-bold text-primary">Aktivitas</h5>
          <form>
            <div className="bg-light py-3 px-4">
              <input type="text" className="form-control font-weight-bold" placeholder="Nama (opsional)" style={{width:'350px'}} />
              <input type="text" className="form-control font-weight-bold my-2" placeholder="Pesan dukungan"  style={{width:'350px'}} />
              <a className="btn btn-primary text-center mx-2 text-white font-weight-bold" href="#">Kirim Pesan</a>
            </div>
          </form>

        </div>
        <div className="col-4 py-2">
          <h5 className="font-weight-bold text-primary">Tentang</h5>
          <p className="text-primary">Swing Trader, mencari saham dengan fundamental yang baik!</p>
          <div className="row">
            <h5 className="font-weight-bold text-primary">Sosial & Tautan</h5>
            <a className="btn btn-outline-success btn-block my-2 text-success text-center font-weight-bold" href="#"><i className="fab fa-instagram"></i> Instagram</a> <br />
            <a className="btn btn-outline-primary text-primary btn-block text-center font-weight-bold" href="#"><i className="fab fa-twitter"></i> Twitter</a> <br />
            <a className="btn btn-outline-danger text-danger my-2 btn-block text-center font-weight-bold" href="#"><i className="fab fa-youtube"></i> Youtube</a>
          </div>

        </div>
      </div>
      </div>
      </div>
    </>
    )
  }
}
