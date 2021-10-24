import React from 'react';
import Homepic from './../public/assets/img/homepic.png';

export default class Home extends React.Component{

  render(){

    return(
    <>
    <div className="row">
    <div className="col-md-5 col-lg-6 full-width last-md my-auto center-xs start-md top-xs pos-relative" style={{paddingLeft:"100px"}}>
      <h1 className="text-primary font-weight-bold pb-2">Belajar Investasi</h1>
      <h1 className="text-warning font-weight-bold pb-2">Super Praktis</h1>
      <h4 className="text-info">Cara Belajar Investasi dan Saham</h4>
      <h4 className="text-info">paling mudah untuk anak muda</h4>
      <h4 className="text-info pb-4">dengan fitur komprehensif</h4>
      <div class="row">
        <div class="col-lg-4">
            <a className="btn btn-lg btn-primary text-center text-white font-weight-bold" href="#" style={{width:"200px"}}>Mulai Sekarang</a>
        </div>
        <div class="col">
            <a className="btn btn-lg btn-outline-primary btn-light text-primary text-center text-white font-weight-bold" href="#" style={{width:"200px"}}>Login</a>
        </div>
      </div>

    </div>

    <div className="col-md-7 col-lg-6 full-width d-flex fx-column center-md start-xs">
      <img src={Homepic} alt="Homepic" height="500" />
    </div>
      </div>
    </>
    )
  }
}