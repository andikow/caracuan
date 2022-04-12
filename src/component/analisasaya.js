import React, { Component } from "react";
import $ from 'jquery';
import 'datatables.net';
import jwt_decode from 'jwt-decode';
var moment = require('moment');

class Saldo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      data : [{
        "topikID": 16,
        "memberID": 41,
        "judul": "Cara Trading di Saham Sideways",
        "thumbnail": "http://localhost:4000/uploads/akademi2.jpg",
        "jenistopik": "Berbayar",
        "harga": 30500,
        "createdAt": "2022-02-01T17:00:00.000Z"}, {
        "topikID": 18,
        "memberID": 41,
        "judul": "Belajar Saham untuk Pemula",
        "thumbnail": "http://localhost:4000/uploads/Belajar Saham untuk Pemula-1646840363536.jpg",
        "jenistopik": "Gratis",
        "harga": 0,
        "createdAt": "2022-03-08T17:00:00.000Z"
      }, {
        "topikID": 19,
        "memberID": 41,
        "judul": "Rumus Average Down Saham",
        "thumbnail": "http://localhost:4000/uploads/Average Down-1646842892641.jpg",
        "jenistopik": "Berbayar",
        "harga": 20000,
        "createdAt": "2022-03-08T17:00:00.000Z"
      }]
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

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/analisa/${this.state.memberID}`,
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
              data: data,
              columns: [
                { data: "date",
                render:function(data, type, row){
                  if(type ==='sort' || type === 'type'){
                    return data;
                  }
                  return moment(data).format("DD MMM YYYY")
                }},
                { data: "analysisID" },
                { data: "stockCode" },
                { data: "targetPrice" },
                { data: "stopPrice" },
                { data: "",
                render:function(){
                  return '<a href="/detail">Detail</a>'
                }
              },
            ]
          });
        })

    $(document).on('click', '.number-spinner button', function () {
    	var btn = $(this),
    		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    		newVal = 0;

    	if (btn.attr('data-dir') == 'up') {
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
                  <input class="form-control col-2" id="kode-saham" type="text" placeholder="Kode Saham" aria-label="input-kode-saham" />
                  <label for="harga-saham" class="col-auto col-form-label">adalah</label>
                  <input class="form-control col-2" id="harga-saham" type="text" placeholder="Harga" aria-label="input-harga-saham" />
                </div>
                <div class="row m-2">
                  <label for="kode-saham" class="col-form-label col-auto pl-0">Deskripsi</label>
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                  <button type="button" class="mt-2 btn btn-primary">Simpan</button>
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
                        <th>Tanggal</th>
                        <th>ID</th>
                        <th>Saham</th>
                        <th>Target</th>
                        <th>Stop</th>
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

export default Saldo;
