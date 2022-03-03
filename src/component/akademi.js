import React, { Component } from "react";
import { Route , HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/akademi1.jpg';
import Poto2 from './../public/assets/img/akademi2.jpg';
import Poto3 from './../public/assets/img/akademi3.jpg';
import Poto4 from './../public/assets/img/akademi4.jpg';
import Poto5 from './../public/assets/img/akademi5.jpg';
import Poto6 from './../public/assets/img/akademi6.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import DetailPost from './detail-post.js';

class CreatorPost extends Component {
  render() {
    return (
      <div>
        <h2 className="mx-4 my-4 text-primary">Kelas Yang Dipelajari</h2>

      <div className="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src={Poto1} />
                    <div class="card-block">
                        <div class="card-text text-primary">
                          <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Belajar Saham dari Awal untuk Pemula
                        </div>

                    </div>
                    <div class="card-footer">
                      <div class="col">
                        <button class="btn btn-warning btn-sm">Lulus</button>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                    <div class="card card-inverse card-info">
                        <img class="card-img-top" src={Poto2} />
                        <div class="card-block">
                            <div class="card-text text-primary">
                              <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Cara Trading di Saham Sideways
                            </div>

                        </div>
                        <div class="card-footer">
                          <div class="col">
                            <button class="btn btn-warning btn-sm">Lulus</button>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                        <div class="card card-inverse card-info">
                            <img class="card-img-top" src={Poto3} />
                            <div class="card-block">
                                <div class="card-text text-primary">
                                  <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Ilmu Analisa Teknikal Candle Tahunan Saham
                                </div>

                            </div>
                            <div class="card-footer">
                              <div class="col">
                                <button class="btn btn-warning btn-sm">Lulus</button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                            <div class="card card-inverse card-info">
                                <img class="card-img-top" src={Poto4} />
                                <div class="card-block">
                                    <div class="card-text text-primary">
                                      <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Memperkirakan pergerakan harga saham bulan depan
                                    </div>

                                </div>
                                <div class="card-footer">
                                  <div class="col">
                                    <button class="btn btn-warning btn-sm">Lulus</button>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                                <div class="card card-inverse card-info">
                                    <img class="card-img-top" src={Poto5} />
                                    <div class="card-block">
                                        <div class="card-text text-primary">
                                          <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Ilmu AVERAGE DOWN yang benar tanpa asalan
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                      <div class="col">
                                        <button class="btn btn-warning btn-sm">Lulus</button>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 mx-4">
                                    <div class="card card-inverse card-info">
                                        <img class="card-img-top" src={Poto6} />
                                        <div class="card-block">
                                            <div class="card-text text-primary">
                                              <span style={{fontSize:11}}> Oleh: Kapten Saham</span> <br />  Perbedaan Investor dan Trader Saham
                                            </div>

                                        </div>
                                        <div class="card-footer">
                                          <div class="col">
                                            <button class="btn btn-warning btn-sm">Lulus</button>
                                          </div>
                                        </div>
                                    </div>
                                </div>

                        <HashRouter>
                          <Route path="/creator/post/1" component={DetailPost}/>
                        </HashRouter>
      </div>
      <div class="row">
      </div>
        </div>
    );
  }
}

export default CreatorPost;
