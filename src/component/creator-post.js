import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/creatorpost1.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import DetailPost from './detail-post.js';

class CreatorPost extends Component {
  render() {
    return (
    <div className="row">

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title m-auto" id="exampleModalLabel">Dukung Vandarina Risca</h5>
              <button type="button" class="close m-0 p-0" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-body bg-outline-secondary mt-0">
                   <p class="card-text m-0 font-weight-bold">Es Krim</p>
                   <p class="card-text m-0 font-weight-bold">Rp 4.999 / unit</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body bg-outline-secondary mt-0">
                   <p class="card-text text-center font-weight-bold">Pilih Metode Pembayaran</p>
                   <div id="accordion" >
                     <div class="card">
                       <div class="card-header" id="headingOne">
                         <h5 class="mb-0">
                           <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             Gopay
                           </button>
                         </h5>
                       </div>

                       <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">

                         <div class="list-group">
                           <a href="/#/andika/1" class="list-group-item list-group-item-action border">
                             <div class="row justify-content-between">
                               <div class="col-3">
                                 Gopay
                               </div>
                               <div class="col p-0">
                                 Siapkan aplikasi GO-JEK atau Scanner QRIS anda
                               </div>
                             </div>
                           </a>
                           <a href="#" class="list-group-item list-group-item-action border">
                             <div class="row justify-content-between">
                               <div class="col-3">
                                 Ovo
                               </div>
                               <div class="col p-0">
                                 Siapkan perangkat anda yang terpasang OVO
                               </div>
                             </div>
                           </a>
                           <a href="#" class="list-group-item list-group-item-action border">
                             <div class="row justify-content-between">
                               <div class="col-3">
                                 Dana
                               </div>
                               <div class="col p-0">
                                 Siapkan perangkat anda yang terpasang Dana 
                               </div>
                             </div>
                           </a>
                         </div>

                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Bayar dengan GoPay</button>
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
                <NavLink to="/creator/post/1"><button class="btn btn-info btn-sm">Free</button></NavLink>
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
                <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">1 <i className="far fa-ice-cream" style={{color:"white"}}></i></button>
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

      <HashRouter>
        <Route path="/creator/post/1" component={DetailPost}/>
      </HashRouter>
    </div>
    );
  }
}

export default CreatorPost;
