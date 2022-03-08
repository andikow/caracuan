import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBagian:[],
      topikID : this.props.location.pathname.split("/")[4],
      topik:'',
    };
  }
  componentDidMount() {
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanBagian/${this.state.topikID}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {this.setState({ dataBagian:data })});

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/topik/id/` + this.state.topikID + '/',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials:'include'
      })
      .then(res=>{
        return res.json();
      })
      .then(res=>{
        this.setState({
          topik: res[0]
        });
        console.log(this.state.topik.judul);
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

    }
  render() {
    return (
    <div class="row">
      <h2 class="m-2 p-2">{this.state.topik.judul}</h2>
      <div class="row col-12">
        <div class="col-12">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Informasi</a>
              <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Akademi</a>
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

                  <div id="accordion">
                    {this.state.dataBagian.map((data, index)=>
                      <div class="card">
                        <div class="card-header" id={"heading" + index}>
                          <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                              {data.namaBagian}
                            </button>
                          </h5>
                        </div>

                        <div id={"collapse" + index} class="collapse show" aria-labelledby={"heading" + index} data-parent="#accordion">
                          <div class="list-group">
                            {
                              data.judul.map((judul, index)=>

                              <a href={"/#/post/" + data.postID[index]} id = {data.postID[index]} class="list-group-item list-group-item-action border">
                                <div class="row justify-content-between">
                                  <div class="col">
                                    {judul}
                                  </div>
                                  <div class="col-2 p-0">
                                    <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai
                                  </div>
                                </div>
                              </a>
                              )}
                          </div>
                        </div>
                        </div>
                        )}
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
