import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import './../public/assets/css/transaksi.css'
import 'datatables.net';
var moment = require('moment');


class Kelas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      judul:'',
      thumbnail:'',
      jenisKelas:'',
      harga:'',
      image:"https://fakeimg.pl/350x200/",
      saveImage:null,
      kelasID:'',
      datakelas:[],
      rinciankelas:[],
    };
  }

  async componentDidMount(){
    $('input[name="jenisPostingan"]').change(function(){
      $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ? true:false)
      if($('input[name="inputharga"]').prop('disabled')){
      $('input[name="inputharga"]').val(0);
      }
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
            datakelas: data
          });
          $('#transaksi').DataTable();
      })
  }

  handleUploadChange(e) {
    if(e){
      let uploaded = e.target.files[0];
      console.log(uploaded);
      this.setState({
        image: URL.createObjectURL(uploaded),
        saveImage:uploaded
      });
    }
  }

  async submitKelas(){
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
        jenisKelas:this.state.jenisKelas,
        harga:this.state.harga,
      }

      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/submitkelas`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(alert('Kelas berhasil disimpan!'))
        .then(window.location.reload())

    }

  ambilDataKelas(e){
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/id/${e}`,
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
            kelasID: e,
            judul:data[0].judul,
            thumbnail:data[0].thumbnail,
            jenisKelas:data[0].jenisKelas,
            harga:data[0].harga,
            rinciankelas: data[0],
            image: `http://localhost:4000/uploads/${data[0].thumbnail}`,
          });
          data[0].jenisKelas == "Berbayar" ? $("input:radio[id='ubahopsiBerbayar']").prop('checked',true):$("input:radio[id='ubahopsiGratis']").prop('checked',true);
          data[0].jenisKelas == "Berbayar" ?
          $('input[name="inputharga"]').prop('disabled',false):$('input[name="inputharga"]').prop('disabled',true);
          $()
      })
  }

  async ubahKelas(){

      let formData = new FormData();
      formData.append("photo", this.state.saveImage);

      const thumbfetch = await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/upload`, {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error)=>{
        return ''
      })
      if (thumbfetch) {
        this.setState({
          thumbnail: thumbfetch.imageName
        });
      }

      var data = {
        memberID:this.state.memberID,
        kelasID:this.state.kelasID,
        judul:this.state.judul,
        thumbnail:this.state.thumbnail,
        jenisKelas:this.state.jenisKelas,
        harga:this.state.harga,
      }

      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/ubahkelas`,
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(alert('Kelas berhasil diubah!'))
        .then(window.location.reload())
    }

  hapusKelas(){
    var data = {
      kelasID:this.state.kelasID,
    }
      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/hapuskelas`,
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(alert('Kelas berhasil dihapus!'))
        .then(window.location.reload())
      }


    render() {

      return (
      <>
      {/*Modal Tambah Kelas*/}
      <div class="modal fade" id="modaltambahkelas" tabindex="-1" role="dialog" aria-labelledby="modaltambahkelas" aria-hidden="true">
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
                  <label for="judulkelas">Judul Kelas</label>
                  <input type="text" class="form-control" id="judulkelas" placeholder="Judul Kelas" onChange={ev => this.setState({ judul: ev.target.value })}/>
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
                  <label for="jenisKelas">Jenis Kelas</label>
                  <div class="">
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiGratis" value="Gratis" onChange={ev => this.setState({ jenisKelas: ev.target.value })}/>
                      <label class="form-check-label" for="opsiGratis">Gratis</label>
                    </div>
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiBerbayar" value="Berbayar" onChange={ev => this.setState({ jenisKelas: ev.target.value })}/>
                      <label class="form-check-label" for="opsiBerbayar">Berbayar</label>
                      <input class="d-inline form-control ml-2" name="inputharga" type="number" placeholder="Harga" disabled onChange={ev => this.setState({ harga: ev.target.value })}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
              <button type="button" class="btn btn-primary" onClick={() => this.submitKelas()}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
      {/*Akhir Modal Tambah Kelas*/}

      {/*Modal Ubah Kelas*/}
      <div class="modal fade" id="modalubahkelas" tabindex="-1" role="dialog" aria-labelledby="modalubahkelas" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Ubah Kelas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <label for="judulkelas">Judul Kelas</label>
                  <input type="text" class="form-control" id="ubahjudulkelas" placeholder="Judul Kelas" onChange={ev => this.setState({ judul: ev.target.value })} defaultValue={this.state.rinciankelas.judul}/>
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
                  <label for="jenisKelas">Jenis Kelas</label>
                  <div class="">
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="ubahopsiGratis" value="Gratis" onChange={ev => this.setState({ jenisKelas: ev.target.value })}/>
                      <label class="form-check-label" for="ubahopsiGratis">Gratis</label>
                    </div>
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="ubahopsiBerbayar" value="Berbayar" onChange={ev => this.setState({ jenisKelas: ev.target.value })}/>
                      <label class="form-check-label" for="ubahopsiBerbayar">Berbayar</label>
                      <input id="updateharga" class="d-inline form-control ml-2" name="inputharga" type="number" placeholder="Harga" disabled onChange={ev => this.setState({ harga: ev.target.value })} defaultValue={this.state.rinciankelas.harga}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => this.hapusKelas()}>Hapus</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
              <button type="button" class="btn btn-primary" onClick={() => this.ubahKelas()}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
      {/*Akhir Modal Ubah Kelas*/}

      {/*Tabel Kelas*/}
      <div class="m-4 col-9">
        <div class="row">
          <div class="col-12">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modaltambahkelas">+ Tambah Kelas</button>
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
              {
                this.state.datakelas.map(data=>
                <tr>
                <td>{moment(data.createdAt).format("DD MMM YYYY")}</td>
                <td>{data.judul}</td>
                <td><img src={data.thumbnail} width="100px"/></td>
                <td>{data.jenisKelas}</td>
                <td>{data.harga}</td>
                <td><button class="btn btn-light" id={data.kelasID} onClick = {e => this.ambilDataKelas(e.target.id)} data-toggle="modal" data-target="#modalubahkelas"><i className="fa fa-edit fa-sm  font-weight-bold pr-2"></i> Ubah</button></td>
                </tr>)
              }
              </tbody>
            </table>

          </div>

        </div>
      </div>
      {/*Akhir Tabel Kelas*/}
      </>
      );
    }
  }

  export default Kelas;
