import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'datatables.net';
import './../public/assets/css/react-draft-wysiwyg.css';
var moment = require('moment');

class DaftarMateri extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      dataKelas:[],
      kelasID:'',
      dataTopik:[],
    };
  }

  async componentDidMount(){
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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/${this.state.memberID}`,
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
            dataKelas: data
          });
      })
  }

  tampilkanTopik(ev){
    console.log(ev);
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanTopik/${ev}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {this.setState({ dataTopik:data })});
  }

  render() {
    return (
    <div class="container">
      <div class="row">
        <h2 class = "col-12 my-2">Daftar Materi</h2>
        {/*Kelas*/}
        <div class="col-12">
          <div class="card pt-0">
                <div class="card-header">Kelas</div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 my-2">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Kelas</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01"
                        onChange=
                        {ev => {this.setState({ kelasID: ev.target.value });this.tampilkanTopik(ev.target.value)}}>
                        <option selected>Pilih Kelas...</option>
                        {
                          this.state.dataKelas.map(data=>
                            <>
                            <option value={data.kelasID}>
                            {data.judul}
                            </option>
                            </>
                        )}
                        </select>
                      </div>
                    </div>

                  </div>

                </div>

          </div>
        </div>
        {/*Materi*/}
        <div class="col-12">

          <div class="card pt-0">
            <div class="card-header">Materi</div>
            <div class="card-body">
              <div class="row">
                <div class="col-12">

                  <div id="accordion">
                    {this.state.dataTopik.map((data, index)=>
                      <div class="card">
                        <div class="card-header" id={"heading" + index}>
                          <h5 class="mb-0">
                            <button class="btn btn-link d-inline-block" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                              {data.namaTopik}<i class="fas fa-edit fa-fw mr-2 align-right"></i>
                            </button>
                          </h5>
                        </div>

                        <div id={"collapse" + index} class="collapse show" aria-labelledby={"heading" + index} data-parent="#accordion">
                          <div class="list-group">
                            {
                              data.judul.map((judul, index)=>

                              <a href={"/#/dashboardcreator/ubahmateri/" + data.materiID[index]}  class="list-group-item list-group-item-action border">
                                <div class="row justify-content-between">
                                  <div class="col">
                                    {judul}
                                  </div>
                                  <a href={"/#/ubahmateri/" + data.materiID[index]} id = {data.materiID[index]}><div class="col-1 p-0"> <i class="fas fa-edit fa-fw mr-2"></i></div></a>
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
        {/*End Materi*/}
      </div>
    </div>
      );
    }
  }

  export default DaftarMateri;
