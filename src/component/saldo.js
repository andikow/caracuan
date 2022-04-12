import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import 'datatables.net';

class Saldo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      token: '',
      expire:'',
      saldoSekarang:'',
      jumlahTarik:0,
      dataRekening:[],
      dataBank:[],
      bankCode:'',
      bankName:'',
      namaPemilik:'',
      nomorRekening:'',

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

  dataRekening(){

    var data = {
      memberID:this.state.memberID,
    }

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/datarekening`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => this.setState({dataRekening: res[0]}))

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
                  <label for="tujuanPenarikan">Tujuan Penarikan</label>
                </div>
                <div class="row my-2">
                  <label>{this.state.dataRekening.bankName} - {this.state.dataRekening.nomorRekening}</label>
                </div>
                <div class="row my-2">
                  <label>{this.state.dataRekening.namaPemilik}</label>
                </div>
                <div class="row my-2">
                  <label style={{display:"block"}}>Saldo Sekarang</label>
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
                    <select id="bank" class="custom-select" id="inputGroupSelect01" onChange={ev => {this.setState({ bankCode: ev.target.value, bankName: ev.target[ev.target.selectedIndex].text })}}>
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

        <div class="container">
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
                    <div class="row">
                      <div class="col m-4 table-responsive">
                        <table class="table">
                          <thead class="thead-light">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Tanggal</th>
                              <th scope="col">Jumlah</th>
                              <th scope="col">Deskripsi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>10 Jul</td>
                              <td>20.000</td>
                              <td>Dukungan Member</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>11 Jul</td>
                              <td>25.000</td>
                              <td>Dukungan Member</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>12 Jul</td>
                              <td>15.000</td>
                              <td>Penarikan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div class="row">
                    <div class="col-auto my-auto mx-2">
                      <h4 class="my-auto">Daftar Rekening Penarikan</h4>
                    </div>
                    <div class="col m-2">
                      <button class="btn btn-primary" data-toggle="modal" data-target="#modalakunbank">+ Tambah Akun Bank</button>
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
