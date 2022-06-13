import React, { Component } from "react";
import $ from 'jquery';
import 'datatables.net';
import jwt_decode from 'jwt-decode';
import CONFIG from './../public/scripts/globals/config.js';
var moment = require('moment');

class AnalisaSaya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      kodeSaham:'',
      hargaAwal:'',
      targetHarga:'',
      hari:'',
      deskripsi:'',
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
        const decoded = jwt_decode(this.state.token);
        this.setState({
          memberID: decoded.memberID,
          expire:decoded.exp
        })
      })
      .catch((error)=>{
        this.props.history.push('/login')
      })

    await this.getanalysis()

    $(document).on('click', '.number-spinner button', function () {
    	var btn = $(this),
    		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    		newVal = 0;

    	if (btn.attr('data-dir') === 'up') {
    		newVal = parseInt(oldValue) + 1;
    	} else {
    		if (oldValue > 1) {
    			newVal = parseInt(oldValue) - 1;
    		} else {
    			newVal = 1;
    		}
    	}
    	btn.closest('.number-spinner').find('input').val(newVal);
    });
    console.log(this.state.data);
  }
  async getanalysis(){
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/analisa/${this.state.memberID}`,
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
          data: data
        });
        $('#riwayatanalisa').DataTable({
          destroy:true,
          data: data,
          columns: [
            { data: "analysisID" },
            { data: "date",
            render:function(data, type, row){
              if(type ==='sort' || type === 'type'){
                return data;
              }
              return moment(data).format("DD MMM YYYY")
            }},
            { data: "stockCode" },
            { data: "targetPrice" },
            { data: "initialPrice" },
            { data: "",
            render:function(){
              return '<a href="/detail">Detail</a>'
            }
          },
        ]
      });
    })

  }
  async submitanalisis(){
    await fetch('https://api.stockdio.com/data/financial/prices/v1/getlatestprice?app-key=' + CONFIG.KEY + '&stockExchange=IDX&symbol='+ this.state.kodeSaham,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => this.setState({hargaAwal: data.data.price}))
    var data = {
      memberID:this.state.memberID,
      kodeSaham:this.state.kodeSaham,
      hargaAwal:this.state.hargaAwal,
      targetHarga:this.state.targetHarga,
      hari:this.state.hari,
      deskripsi:this.state.deskripsi,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submitanalisis`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(alert('Analisis berhasil dibuat!'))
    .then(this.getanalysis())

  }

  render() {
    return (
      <div class="container m-3">
        <div class="row">
          <div class="col">
            <h2>Analisa Saya</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  Buat Analisa
                </div>
                <div class="row m-2">
                  <label for="kode-saham" class="col-form-label col-auto pl-0">Target saya untuk:</label>
                  <input class="form-control col-2" id="kode-saham" type="text" placeholder="Kode Saham" aria-label="input-kode-saham" onChange={ev => {this.setState({ kodeSaham: ev.target.value })}}/>
                  <label for="harga-saham" class="col-auto col-form-label">adalah</label>
                  <input class="form-control col-2" id="harga-saham" type="text" placeholder="Harga" aria-label="input-harga-saham" onChange={ev => this.setState({ targetHarga: ev.target.value })}/>
                  <label for="harga-saham" class="col-auto col-form-label">tercapai dalam</label>
                  <input class="form-control col-2" id="harga-saham" type="text" placeholder="" aria-label="input-harga-saham" onChange={ev => this.setState({ hari: ev.target.value })}/>
                  <label for="harga-saham" class="col-auto col-form-label">hari</label>
                </div>
                <div class="row m-2">
                  <label for="kode-saham" class="col-form-label col-auto pl-0">Deskripsi</label>
                  <textarea class="form-control" aria-label="With textarea" onChange={ev => this.setState({ deskripsi: ev.target.value })}></textarea>
                  <button type="button" class="mt-2 btn btn-primary" onClick={() => this.submitanalisis()}>Simpan</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  Riwayat Analisa
                </div>
                <div class="row m-2">
                <div class="col-12">
                  <table id="riwayatanalisa" class="table table-striped display" style={{width:"100%"}}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tanggal</th>
                        <th>Saham</th>
                        <th>Target</th>
                        <th>Initial</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
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

export default AnalisaSaya;
