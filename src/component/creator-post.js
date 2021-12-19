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
                              <NavLink to="/#/creator/post/1"><button class="btn btn-info btn-sm">Free</button></NavLink>
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
