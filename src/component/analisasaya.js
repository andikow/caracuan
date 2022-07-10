import React, { Component } from "react";
import $ from 'jquery';
import validator from 'validator';
import 'datatables.net';
import jwt_decode from 'jwt-decode';
import CONFIG from './../public/scripts/globals/config.js';
import HashLoader from "react-spinners/HashLoader";
var moment = require('moment');
const override: React.CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "red",
};

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
      formErrors: {kodeSaham:'', targetHarga:'', hari:'', deskripsi:''},
      kodeSahamValid:'',
      targetHargaValid:'',
      hariValid:'',
      deskripsiValid:'',
      loading: true,
    };
  }
  handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let kodeSahamValid = this.state.kodeSahamValid;
        let targetHargaValid = this.state.targetHargaValid;
        let hariValid = this.state.hariValid;
        let deskripsiValid = this.state.deskripsiValid;

        switch(fieldName) {
          case 'kodeSaham':
            kodeSahamValid =  validator.isAlpha(value);
            fieldValidationErrors.kodeSaham = kodeSahamValid ? '' : ' tidak valid';
            break;
          case 'targetHarga':
            targetHargaValid =  validator.isInt(value, [{gt: -1}]);
            fieldValidationErrors.targetHarga = targetHargaValid ? '' : ' tidak valid';
            break;
          case 'hari':
            hariValid = validator.isInt(value, [{gt: -1}]);
            fieldValidationErrors.hari = hariValid ? '' : ' tidak valid';
            break;
          case 'deskripsi':
            deskripsiValid = value.length > 0;
            fieldValidationErrors.deskripsi = deskripsiValid ? '': ' wajib diisi';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        kodeSahamValid: kodeSahamValid,
                        targetHargaValid: targetHargaValid,
                        hariValid: hariValid,
                        deskripsiValid: deskripsiValid
                      }, this.validateForm);
      }

    validateForm() {
        this.setState(
          {
            formValid:
            this.state.kodeSahamValid &&
            this.state.targetHargaValid &&
            this.state.hariValid &&
            this.state.deskripsiValid
          });
      }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
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
          data: data,
          loading:false,
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
            { data: "isHit" },
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
      <div class="container p-3 overflow-auto" style={{height:'90vh'}}>
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
                <div class="row">
                  <div class="col form-group">
                    <div class="row">
                      <label htmlFor="kodeSaham" class="col-auto col-form-label">Target saya untuk:</label>
                      <input class={`col form-control ${this.errorClass(this.state.formErrors.kodeSaham)}`} id="kodeSaham" type="text" name="kodeSaham" value={this.state.kodeSaham} placeholder="Kode Saham" aria-label="input-kode" onChange={this.handleUserInput} required/>
                      <div class="invalid-feedback text-right">
                        Masukkan Kode Saham yang valid.
                      </div>
                    </div>
                  </div>
                  <div class="col form-group">
                    <div class="row">
                      <label htmlFor="targetHarga" class="col-auto col-form-label">adalah</label>
                      <input class={`col form-control ${this.errorClass(this.state.formErrors.targetHarga)}`} id="targetHarga" type="text" name="targetHarga" value={this.state.targetHarga} placeholder="Harga" aria-label="input-target" onChange={this.handleUserInput} required/>
                      <div class="invalid-feedback text-right">
                        Masukkan Target Harga yang valid.
                      </div>
                    </div>
                  </div>
                  <div class="col form-group">
                    <div class="row">
                      <label htmlFor="hari" class="col-auto col-form-label">tercapai dalam</label>
                      <input class={`col form-control ${this.errorClass(this.state.formErrors.hari)}`} id="hari" type="text" name="hari" value={this.state.hari} placeholder="1" aria-label="input-hari" onChange={this.handleUserInput} required/>
                      <div class="invalid-feedback text-right">
                        Masukkan Hari yang valid.
                      </div>
                    </div>
                  </div>
                  <div class="col-auto form-group">
                    <div class="row">
                      <label htmlFor="hari" class="col-auto col-form-label">hari</label>
                    </div>
                  </div>

                </div>
                <div class="row mb-2">
                  <div class="col">
                    <label htmlFor="deskripsi" class="col-form-label col-auto pl-0">Deskripsi</label>
                    <textarea class={`form-control ${this.errorClass(this.state.formErrors.deskripsi)}`} aria-label="With textarea" name="deskripsi" value={this.state.deskripsi} onChange={this.handleUserInput} required></textarea>
                    <div class="invalid-feedback">
                      Deskripsi Tidak Boleh Kosong.
                    </div>
                    <button type="button" class="mt-2 btn btn-primary" onClick={() => this.submitanalisis()} disabled={!this.state.formValid}>Simpan</button>
                  </div>
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
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnalisaSaya;
