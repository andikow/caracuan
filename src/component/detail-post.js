import React, { Component } from "react";

class DetailPost extends Component {
  render() {
    return (
    <div class="row">
      <h2 class="m-2 p-2">Belajar Saham dari Awal untuk Pemula</h2>
      <div class="row col-12">
        <div class="col-12">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Informasi</a>
              <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Silabus</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row col-12 m-auto p-0">

                <div class="card-body card bg-white">
                  <div class="m-2">
                    <h5 class="card-title">Deskripsi</h5>
                    <p style={{color:"black"}}>Memahami bagaimana cara untuk mendapatkan keuntungan dari saham bagi pemula</p>
                  </div>
                </div>
              </div>
              <div class="row col-12">

                <div class="card-body">
                  <h5 class="card-title">Tujuan Pembelajaran</h5>
                  <ul>
                    <li>Mengetahui Basic Technical Analysis dan Candlestick untuk Trading</li>
                    <li>Mengetahui bagaimana cara ENTRY hingga menentukan Target Price</li>
                    <li>Mampu menggunakan TrendLine untuk Trading jangka pendek</li>
                    <li>Mampu melakukan Prediksi Trend dan membaca Pola harga yang akan terjadi</li>
                    <li>Pemahaman dasar mengenai Fibonacci Analysis dan Support Resistance</li>
                    <li>Mengetahui Cara Membuat System Trading yang benar</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="row ">
                <div class="col-12">
                  <div id="accordion" >
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Mengenal TrendLine
                          </button>
                        </h5>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">

                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                1. Apa itu Trendline
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai
                              </div>
                            </div>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                2. Cara Menggambar Trendline
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai
                              </div>
                            </div>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                3. Merevisi Trendline
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
                              </div>
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Cara Entry yang Benar
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">

                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                1. Apa itu Entry
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
                              </div>
                            </div>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                2. Entri Pasar dan Antri Pasar
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
                              </div>
                            </div>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Menggunakan Fibonacci
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">

                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                1. Sejarah Fibonacci
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
                              </div>
                            </div>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                2. Cara Menggambar Fibonacci
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
                              </div>
                            </div>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                3. Memanfaatkan Fibonacci Untuk Entry dan Exit
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai
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
          </div>
        </div>

      </div>
    </div>
    );
  }
}

export default DetailPost;
