import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import './../public/assets/css/transaksi.css'
import 'datatables.net';
var moment = require('moment');


class Topik extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      judul:'',
      thumbnail:'',
      jenistopik:'',
      harga:'',
      image:"https://fakeimg.pl/350x200/",
      saveImage:null,
      datatopik:[],
    };
  }

  async componentDidMount(){
    $('input[name="jenisPostingan"]').change(function(){
      $('input[id="opsiGratis"]').prop('checked',this.value == 'Berbayar' ? false:true);
      $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ? true:false)
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
          memberID: decoded.memberID,
          expire:decoded.exp
        })
      })
      .catch((error)=>{
        this.props.history.push('/login')
      })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/topik/${this.state.memberID}`,
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
            datatopik: data
          });
          $('#transaksi').DataTable({
            data: data,
            columns: [
              { data: "createdAt",
              render:function(data, type, row){
                if(type ==='sort' || type === 'type'){
                  return data;
                }
                return moment(data).format("DD MMM YYYY")
              }},
              { data: "judul" },
              { data: "thumbnail",
              render:function(data, type, row){
                if(type ==='sort' || type === 'type'){
                  return data;
                }
                return '<img src="'+ data + '" width= "100px"/>'
              }
            },
            { data: "jenistopik" },
            { data: "harga" },
            { data: "",
            render:function(){
              return '<a href="">Ubah</a>'
            }
           },
          ]
        });
      })
  }

    async submittopik(){
      let formData = new FormData();
      formData.append("photo", this.state.saveImage);

      const thumbfetch = await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/upload`, {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
      this.setState({
        thumbnail: thumbfetch.imageName
      });

      var data = {
        memberID:this.state.memberID,
        judul:this.state.judul,
        thumbnail:this.state.thumbnail,
        jenistopik:this.state.jenistopik,
        harga:this.state.harga,
      }

      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submittopik`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(alert('Topik berhasil disimpan!'))

    }

    handleUploadChange(e) {
      let uploaded = e.target.files[0];
      this.setState({
        image: URL.createObjectURL(uploaded),
        saveImage:uploaded
      });
    }

    render() {
      return (
      <>

      <div class="modal fade" id="modaltopik" tabindex="-1" role="dialog" aria-labelledby="modaltopik" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Tambah Kelas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <label for="judultopik">Judul Kelas</label>
                  <input type="text" class="form-control" id="judultopik" placeholder="Judul Kelas" onChange={ev => this.setState({ judul: ev.target.value })}/>
                </div>
                <div class="row">
                  <label for="thumbnail">Thumbnail</label>
                  <div className="col-12 text-center">
                    <img src={this.state.image} className="img-thumbnail" alt="..." />
                  </div>
                  <label htmlFor="formFile" className="form-label">Upload image here</label>
                  <input
                  onChange={(e) => {e.preventDefault();this.handleUploadChange(e)}}
                  className="form-control"
                  type="file"
                  id="formFile"
                  />
                </div>
                <div class="row">
                  <label for="jenistopik">Jenis Kelas</label>
                  <div class="">
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiGratis" value="Gratis" onChange={ev => this.setState({ jenistopik: ev.target.value })}/>
                      <label class="form-check-label" for="opsiGratis">Gratis</label>
                    </div>
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiBerbayar" value="Berbayar" onChange={ev => this.setState({ jenistopik: ev.target.value })}/>
                      <label class="form-check-label" for="opsiBerbayar">Berbayar</label>
                      <input class="d-inline form-control ml-2" name="inputharga" type="number" placeholder="Harga" disabled onChange={ev => this.setState({ harga: ev.target.value })}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
              <button type="button" class="btn btn-primary" onClick={() => this.submittopik()}>Simpan</button>
            </div>
          </div>
        </div>
      </div>

      <div class="m-4 col-9">
        <div class="row">
          <div class="col-12">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modaltopik">+ Tambah Kelas</button>
          </div>
          <h2 class = "col-12 my-2">Daftar Kelas</h2>

          <div class="ml-4 text-primary" style={{width:"100%"}}>
            <table id="transaksi" class="display" style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Judul</th>
                  <th>Thumbnail</th>
                  <th>Jenis Kelas</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>

          </div>

        </div>
      </div>
      </>
      );
    }
  }

  export default Topik;
