import React from 'react';
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/creatorpost1.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";

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
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src={Poto1} />
                    <div class="card-block">
                        <div class="card-text font-weight-bold">
                            Belajar Saham dari Awal untuk Pemula
                        </div>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col">
                          <i className="far fa-heart text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 76</span></i>
                        </div>
                        <div class="col">
                          <i className="far fa-comments-alt text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 12</span></i>
                        </div>
                        <div class="col">
                          <button class="btn btn-info btn-sm">Free</button>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                    <div class="card card-inverse card-info">
                        <img class="card-img-top" src={Poto1} />
                        <div class="card-block">
                            <div class="card-text font-weight-bold">
                                Belajar Saham dari Awal untuk Pemula
                            </div>
                        </div>
                        <div class="card-footer">
                          <div class="row">
                            <div class="col">
                              <i className="far fa-heart text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 76</span></i>
                            </div>
                            <div class="col">
                              <i className="far fa-comments-alt text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 12</span></i>
                            </div>
                            <div class="col">
                              <button class="btn btn-info btn-sm">Free</button>
                            </div>
                          </div>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div class="card card-inverse card-info">
                            <img class="card-img-top" src={Poto1} />
                            <div class="card-block">
                                <div class="card-text font-weight-bold">
                                    Belajar Saham dari Awal untuk Pemula
                                </div>
                            </div>
                            <div class="card-footer">
                              <div class="row">
                                <div class="col">
                                  <i className="far fa-heart text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 76</span></i>
                                </div>
                                <div class="col">
                                  <i className="far fa-comments-alt text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 12</span></i>
                                </div>
                                <div class="col">
                                  <button class="btn btn-info btn-sm">Free</button>
                                </div>
                              </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                            <div class="card card-inverse card-info">
                                <img class="card-img-top" src={Poto1} />
                                <div class="card-block">
                                    <div class="card-text font-weight-bold">
                                        Belajar Saham dari Awal untuk Pemula
                                    </div>
                                </div>
                                <div class="card-footer">
                                  <div class="row">
                                    <div class="col">
                                      <i className="far fa-heart text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 76</span></i>
                                    </div>
                                    <div class="col">
                                      <i className="far fa-comments-alt text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 12</span></i>
                                    </div>
                                    <div class="col">
                                      <button class="btn btn-info btn-sm">Free</button>
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
