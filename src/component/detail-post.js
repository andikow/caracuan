import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import Iframe from 'react-iframe';

class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTopik:[],
      kelasID : this.props.location.pathname.split("/")[4],
      kelas:'',
      memberID:'',
      postID:16,
      doneDetail:[],
      data:[],
      invoice_url:'',
      sudahLangganan:false,
      isPaid:false,
    };
  }
  async componentDidMount() {
    this.setState({
      isPaid: false
    });

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/token`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials:'include'
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      this.setState({
        token: data.accessToken
      });
      const decoded = jwt_decode(this.state.token);
      this.setState({
        name: decoded.name,
        memberID:decoded.memberID,
        expire:decoded.exp
      })
    })
    .catch((error)=>{
      this.props.history.push({
        pathname:"/login",
        state: this.props.location.pathname
      })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kreator/` + this.state.memberID + '/',
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
        data: res[0]
      });
      console.log(this.state.data);
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/id/` + this.state.kelasID + '/',
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
          kelas: res[0]
        });
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanTopik/${this.state.kelasID}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {this.setState({ dataTopik:data })});

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/materiselesaibaca/${this.state.memberID}/${this.state.kelasID}/`,
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
          doneDetail: res
        });
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

    var data = {
        kelasID:this.state.kelasID,
        memberID:this.state.memberID,
      }
    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/cekinvoice`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res=>{
        if(res.status === "PAID" || res.status === "SETTLED"){
          this.setState({
            isPaid: true
          });
        }
      })
      .catch((err) =>{})

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/cekkelas/${this.state.memberID}/${this.state.kelasID}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials:'include'
        })
      .then(res=>{
          return res.json()
        })
      .then(data=>{
        if(data.length > 0){
          this.setState({
            sudahLangganan: true,
            isPaid:true,
          });
        }
      })
    console.log(this.state.dataTopik);
    console.log(this.state.kelas);
    console.log(this.state.doneDetail);
    }

  async checkout(){
      var data = {
        kelasID:this.state.kelasID,
        memberID:this.state.memberID,
        email:this.state.data.Email,
        name:this.state.data.Name,
        phone:this.state.data.Phone,
        judul:this.state.kelas.judul,
        harga:this.state.kelas.harga,
        currentpath:`http://localhost:3000/#${this.props.location.pathname.slice(0, this.props.location.pathname.lastIndexOf('/'))}`,
      }
      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/cetakinvoice`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res=>{
        this.setState({
          invoice_url: res.invoice_url,
        });
      })


    }

  langgananKelasGratis(){
    var data = {
      kelasID:this.state.kelasID,
      memberID:this.state.memberID,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelasgratis`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res=>{
      this.setState({
        sudahLangganan: true,
        isPaid:true,
      });
    })
  }


  render() {
    return (
    <>
    {/*Modal Pembayaran*/}
    <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title m-auto" id="exampleModalLabel">Dukung Analismu!</h5>
            <button type="button" class="close m-0 p-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body m-0 p-0" style={{height:"100vh"}}>

            <Iframe url={this.state.invoice_url}
            width="100%"
            height="100%"
            overflow="auto"
            display="block"
            frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
    {/* End Modal Pembayaran*/}

    {/*Modal Kelas Gratis*/}
    <div class="modal fade" id="modalKelasGratis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title m-auto">Selamat!</h3>
          </div>
          <div class="modal-body m-auto">
            <h5>Anda sudah bisa mulai belajar kelas ini.</h5>
          </div>
          <div class="modal-footer">
            <button onClick={() => this.langgananKelasGratis()} type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
          </div>
        </div>
      </div>
    </div>
    {/* End Modal Kelas Gratis*/}

    <div class="row">
      {
        this.state.kelas.jenisKelas == "Gratis" ?
        this.state.sudahLangganan ?
        <div></div> :
        <div class="col-12 mt-2">
          <div class="alert alert-warning" role="alert">
            Anda belum memulai kelas ini! Klik <a href="#" data-toggle="modal" data-target="#modalKelasGratis"><u>disini</u></a>  untuk mulai belajar.
          </div>
        </div> :
        this.state.isPaid ?
        <div></div> :
        <div class="col-12 mt-2">
          <div class="alert alert-warning" role="alert">
            Anda belum berlangganan kelas ini! Traktir <button onClick={() => this.checkout()} type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#paymentModal"><i className="far fa-donate" style={{color:"white"}}></i></button> untuk berlangganan.
          </div>
        </div>
      }
      <div class="col-12 mb-2">
        <h2>{this.state.kelas.judul}</h2>
      </div>
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
                  <p style={{color:"black"}}>{this.state.kelas.deskripsi}</p>
                </div>
              </div>
            </div>
            <div class="row col-12">

              <div class="card-body">
                <h5 class="card-title">Tujuan Pembelajaran</h5>
                <ul>
                  {this.state.kelas.tujuan1 ? <li>{this.state.kelas.tujuan1}</li> : ''}
                  {this.state.kelas.tujuan2 ? <li>{this.state.kelas.tujuan2}</li> : ''}
                  {this.state.kelas.tujuan3 ? <li>{this.state.kelas.tujuan3}</li> : ''}
                  {this.state.kelas.tujuan4 ? <li>{this.state.kelas.tujuan4}</li> : ''}
                </ul>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="row ">
              <div class="col-12">

                <div id="accordion">
                  {this.state.dataTopik.map((data, index)=>
                    <div class="card">
                      <div class="card-header" id={"heading" + index}>
                        <h5 class="mb-0">
                          <button class="btn btn-link" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                            {data.namaTopik}
                          </button>
                        </h5>
                      </div>

                      <div id={"collapse" + index} class="collapse show" aria-labelledby={"heading" + index} data-parent="#accordion">
                        <div class="list-group">
                          {
                            data.judul.map((judul, index)=>

                            <a href={"/#/post/" + data.materiID[index]} id = {data.materiID[index]} class={this.state.isPaid ? "list-group-item list-group-item-action border" : "list-group-item list-group-item-action border disabled"}>
                              <div class="row justify-content-between">
                                <div class="col">
                                  {judul}
                                </div>
                                {
                                  this.state.doneDetail.findIndex(done => done.materiID == data.materiID[index]) > -1 ?
                                  <div class="col-2 p-0"> <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai</div>:
                                  <div class="col-2 p-0"> <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai</div>
                                }
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
        </>
    );
  }
}

export default withRouter(DetailPost);
