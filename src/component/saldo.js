import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import 'datatables.net';
import HashLoader from "react-spinners/HashLoader";
var moment = require('moment');
const override: React.CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "red",
};

class Saldo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      token: '',
      expire:'',
      saldoSekarang:'',
      jumlahTarik:0,
      dataRekening:{},
      riwayatPenarikan:[],
      dataBank:[],
      bankCode:'',
      bankName:'',
      namaPemilik:'',
      nomorRekening:'',
      objectblank:{a:1},
      loading: true,
    };
  }

  async componentDidMount() {
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
      const decoded = jwt_decode(this.state.token)
      this.setState({
        name: decoded.name,
        expire:decoded.exp,
        memberID:decoded.memberID,
      })
    })
    .catch((error)=>{
      this.props.history.push('/login')
    })

    var data = {
      memberID : this.state.memberID,
    }

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/ceksaldo`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
        this.setState({
        saldoSekarang: data[0].balance,
      })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/available_banks`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
        this.setState({ dataBank:data })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/payout/by/` + this.state.memberID + '/',
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
        riwayatPenarikan: res,
        loading:false,
      });
      console.log(this.state.riwayatPenarikan);
      $('#transaksi').DataTable();
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

    this.dataRekening()
  }

  submitRekening(){


    var data = {
      memberID:this.state.memberID,
      bankCode:this.state.bankCode,
      bankName:this.state.bankName,
      namaPemilik:this.state.namaPemilik,
      nomorRekening:this.state.nomorRekening,
    }

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/simpanrekening`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(alert('Rekening berhasil disimpan!'))
      .then(this.dataRekening())
      .then($( "button.close" ).trigger( "click" ))

  }

  submitPenarikan(){


    var data = {
      memberID:this.state.memberID,
      jumlahTarik:this.state.jumlahTarik,
      namaPemilik:this.state.dataRekening.namaPemilik,
      bankCode:this.state.dataRekening.bankCode,
      nomorRekening:this.state.dataRekening.nomorRekening,
    }

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submitpenarikan`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(alert('Penarikan sedang diproses!'))
      .then($( "button.close" ).trigger( "click" ))

  }

  async dataRekening(){

    var data = {
      memberID:this.state.memberID,
    }

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/datarekening`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        if(Object.keys(this.state.objectblank).length > 0 && res[0]){
            this.setState({
              dataRekening: res[0],
              bankCode:res[0].bankCode,
              bankName:res[0].bankName,
              namaPemilik:res[0].namaPemilik,
              nomorRekening:res[0].nomorRekening,
            })
            $(`#daftarbank option[value='${this.state.dataRekening.bankCode}']`).prop('selected', true);
            $(`#namaPemilik`).val(`${this.state.dataRekening.namaPemilik}`);
            $(`#nomorRekening`).val(`${this.state.dataRekening.nomorRekening}`);
        }

      })

  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
  }

  render() {
    return (
      <>
      <div class="modal fade" id="modalpenarikan" tabindex="-1" role="dialog" aria-labelledby="modalpenarikan" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Penarikan Saldo</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row my-2">
                  <h5><strong>Tujuan Penarikan</strong></h5>
                </div>
                <div class="row my-2">
                  <label>{this.state.dataRekening.bankName} - {this.state.dataRekening.nomorRekening}</label>
                </div>
                <div class="row my-2">
                  <label>{this.state.dataRekening.namaPemilik}</label>
                </div>
                <div class="row my-2">
                  <h5 style={{display:"block"}}><strong>Saldo Sekarang</strong></h5>
                </div>
                <div class="row my-2">
                  <label for="saldoSekarang">{"Rp " + this.numberWithCommas(this.state.saldoSekarang)}</label>
                </div>
                <div class="row my-2">
                  <label for="jumlahTarik">Masukkan jumlah yang ingin ditarik</label>
                  <input id="jumlahTarik" class="form-control" type="text" placeholder="Jumlah Tarik" aria-label="post-title" onChange={ev => this.setState({ jumlahTarik: ev.target.value })}/>
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
              <button type="button" class="btn btn-primary" onClick={() => this.submitPenarikan()}>Tarik</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalakunbank" tabindex="-1" role="dialog" aria-labelledby="modalakunbank" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Tambah Akun Bank</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row my-2">
                  <label for="bank">Bank</label>
                  <select id="daftarbank" class="custom-select" onChange={ev => {this.setState({ bankCode: ev.target.value, bankName: ev.target[ev.target.selectedIndex].text })}}>
                    <option selected>Pilih Bank...</option>
                    {
                      this.state.dataBank.map(data=>
                      <>
                      <option value={data.code}>
                        {data.name}
                      </option>
                      </>
                      )}
                    </select>
                  </div>
                  <div class="row my-2">
                    <label for="namaPemilik">Nama Pemilik Rekening</label>
                    <input id="namaPemilik" class="form-control" type="text" placeholder="Nama Pemilik Rekening" aria-label="post-title" onChange={ev => this.setState({ namaPemilik: ev.target.value })}/>
                  </div>
                  <div class="row my-2">
                    <label for="nomorRekening">Nomor Rekening</label>
                    <input id="nomorRekening" class="form-control" type="text" placeholder="Nomor Rekening" aria-label="post-title" onChange={ev => this.setState({ nomorRekening: ev.target.value })}/>
                  </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary" onClick={() => this.submitRekening()}>Simpan</button>
              </div>
            </div>
          </div>
      </div>

        <div class="container overflow-auto" style={{height:'90vh'}}>
          <div class="row">
            <div class="col-12 mt-4">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Saldo Saya</a>
                  <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Akun Pembayaran</a>
                </div>
              </nav>

              <div class="tab-content" id="nav-tabContent">

                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="row m-auto p-0">
                    <div class="card-body card bg-white">
                    <div class="row m-2">
                      <div class="col">
                        <h5 class="card-title">Saldo Aktif</h5>
                        <p style={{color:"black"}}>{"Rp " + this.numberWithCommas(this.state.saldoSekarang)}</p>
                      </div>
                      <div class="col">
                        <h5 class="card-title">Tarik Saldo</h5>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modalpenarikan" onClick={() => this.dataRekening()}><i class="fas fa-fw fa-wallet mr-1"></i>Tarik Saldo</button>
                      </div>
                    </div>

                    </div>
                  </div>

                    <div class="row">
                      <div class="col mt-4 table-responsive">
                        <h5><strong>Riwayat Transaksi</strong></h5>
                        <table id="transaksi" class="display" style={{width:"100%"}}>
                          <thead>
                            <tr>
                              <th>Tanggal Penarikan</th>
                              <th>Nominal</th>
                              <th>Tanggal Status Selesai</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.riwayatPenarikan.map(data =>
                            <tr>
                            <td>{moment(data.createdAt).format("DD MMM YYYY")}</td>
                            <td>{data.jumlah}</td>
                            <td>{moment(data.updatedAt).format("DD MMM YYYY")}</td>
                            <td>{data.status}</td>
                            </tr>
                          )}
                          </tbody>
                        </table>
                        <div className="sweet-loading p-3">
                        <HashLoader
                        cssOverride={override}
                        size={150}
                        color={"#217691"}
                        loading={this.state.loading}
                        speedMultiplier={1.5}
                        />
                        </div>
                      </div>
                    </div>

                </div>

                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div class="row">
                    <div class="col-auto m-2">
                      <h4 class="my-auto">Daftar Rekening Penarikan</h4>
                    </div>

                    <div class="col m-2">
                      {
                        Object.keys(this.state.dataRekening).length > 0 ? '' : <button class="btn btn-primary" data-toggle="modal" data-target="#modalakunbank">+ Tambah Akun Bank</button>
                      }
                    </div>

                    <div class="col-12">
                      <div class="alert alert-info py-2" role="alert">
                        <ul class="my-auto">
                          <li>
                            Pastikan nama pemilik rekening sesuai dengan nama akun terdaftar.
                          </li>
                        </ul>
                      </div>
                    </div>

                      {
                        Object.keys(this.state.dataRekening).length > 0 ?
                        <div class="col-4">
                        <div class="card">
                        <div class="card-body p-2 m-0">
                        <h5 class="card-title">{this.state.dataRekening.bankName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{this.state.dataRekening.namaPemilik}</h6>
                        <p class="card-text">{this.state.dataRekening.nomorRekening}</p>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modalakunbank">Ubah Akun Bank</button>
                        </div>
                        </div>
                        </div> : ""
                      }

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

export default Saldo;
