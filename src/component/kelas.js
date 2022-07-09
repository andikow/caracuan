import React, { Component } from "react";
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import './../public/assets/css/transaksi.css'
import 'datatables.net';
import validator from 'validator';
var moment = require('moment');


class Kelas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      memberID:'',
      judul:'',
      thumbnail:'',
      deskripsi:'',
      tujuan1:'',
      tujuan2:'',
      tujuan3:'',
      tujuan4:'',
      jenisKelas:'',
      inputharga:0,
      formErrors: {judul:'', thumbnail:'', deskripsi:'', tujuan1: '', inputharga:''},
      judulValid:false,
      thumbnailValid:false,
      deskripsiValid:false,
      tujuan1Valid:false,
      inputhargaValid:false,
      image:"https://fakeimg.pl/350x200/",
      saveImage:null,
      kelasID:'',
      datakelas:[],
      rinciankelas:[],
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
      let judulValid = this.state.judulValid;
      let thumbnailValid = this.state.thumbnailValid;
      let deskripsiValid = this.state.deskripsiValid;
      let tujuan1Valid = this.state.tujuan1Valid;
      let inputhargaValid = this.state.inputhargaValid;

      switch(fieldName) {
        case 'judul':
          judulValid =  !validator.isEmpty(value);
          fieldValidationErrors.judul = judulValid ? '' : ' is invalid';
          break;
        case 'thumbnail':
          thumbnailValid =  !validator.isEmpty(value);
          fieldValidationErrors.thumbnail = thumbnailValid ? '' : ' is invalid';
          break;
        case 'deskripsi':
          deskripsiValid =  !validator.isEmpty(value);
          fieldValidationErrors.deskripsi = deskripsiValid ? '' : ' is invalid';
          break;
        case 'tujuan1':
          tujuan1Valid =  !validator.isEmpty(value);
          fieldValidationErrors.tujuan1 = tujuan1Valid ? '' : ' is invalid';
          break;
        case 'inputharga':
          inputhargaValid = validator.isInt(value, [{gt: -1}])
          fieldValidationErrors.inputharga = inputhargaValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                    judulValid:judulValid,
                    thumbnailValid:thumbnailValid,
                    deskripsiValid:deskripsiValid,
                    tujuan1Valid:tujuan1Valid,
                    inputhargaValid:inputhargaValid,
                    }, this.validateForm);
    }

  validateForm() {
      this.setState(
        {
          formValid:
          this.state.judulValid &&
          this.state.thumbnailValid &&
          this.state.deskripsiValid &&
          this.state.tujuan1 &&
          this.state.inputhargaValid
        });
    }

  errorClass(error) {
      return(error.length === 0 ? '' : 'is-invalid');
    }

  async componentDidMount(){
    $('input[name="jenisPostingan"]').change(function(){
      $('input[name="inputharga"]').prop('disabled',this.value !== 'Berbayar' ? true:false)
      if($('input[name="inputharga"]').prop('disabled')){
      $('input[name="inputharga"]').val(0);
      }
    })
    $("#opsiGratis").prop("checked", true);
    $('input[name="inputharga"]').val(0);

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
          $('#kelas').DataTable();
      })
  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
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
    this.validateForm()
    if(this.state.formValid){
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
        deskripsi:this.state.deskripsi,
        tujuan1:this.state.tujuan1,
        tujuan2:this.state.tujuan2,
        tujuan3:this.state.tujuan3,
        tujuan4:this.state.tujuan4,
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
    else {
      alert('Harap isi bagian yang wajib!')
    }
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
            deskripsi:data[0].deskripsi,
            tujuan1:data[0].tujuan1,
            tujuan2:data[0].tujuan2,
            tujuan3:data[0].tujuan3,
            tujuan4:data[0].tujuan4,
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
        deskripsi:this.state.deskripsi,
        tujuan1:this.state.tujuan1,
        tujuan2:this.state.tujuan2,
        tujuan3:this.state.tujuan3,
        tujuan4:this.state.tujuan4,
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
                  <label htmlFor="judulkelas">Judul Kelas</label>
                  <input type="text" class={`form-control ${this.errorClass(this.state.formErrors.judul)}`} name="judul" id="judulkelas" placeholder="Judul Kelas" onChange={this.handleUserInput} required />
                  <div class="invalid-feedback">
                  Judul wajib diisi.
                  </div>
                </div>
                <div class="row">
                  <label htmlFor="thumbnail">Thumbnail</label>
                  <div className="col-12 text-center">
                    <img src={this.state.image} className="img-thumbnail" alt="..." />
                  </div>
                  <label htmlFor="formFile" className="form-label">Upload image here</label>
                  <input
                  onChange={(e) => {e.preventDefault();this.handleUploadChange(e);this.handleUserInput(e)}}
                  class={`form-control ${this.errorClass(this.state.formErrors.thumbnail)}`}
                  name="thumbnail" id="formFile"
                  type="file"
                  accept="image/jpg, image/png, image/jpeg, image/gif, image/bmp, image/tif, image/tiff"
                  required />
                  <div class="invalid-feedback">
                  Gambar Kelas wajib diisi.
                  </div>
                </div>
                <div class="row">
                  <label htmlFor="deskripsikelas">Deskripsi Kelas</label>
                  <input type="text" class={`form-control ${this.errorClass(this.state.formErrors.deskripsi)}`} name="deskripsi" id="deskripsikelas" placeholder="Deskripsi Kelas" onChange={this.handleUserInput} required/>
                  <div class="invalid-feedback">
                  Deskripsi wajib diisi.
                  </div>
                </div>
                <div class="row">
                  <label htmlFor="tujuan">Tujuan Pembelajaran <small>(maksimal 4)</small></label>
                  <input type="text" class={`form-control ${this.errorClass(this.state.formErrors.tujuan1)}`}
                  name="tujuan1" id="tujuan1" placeholder="Tujuan ke-1" onChange={this.handleUserInput} required/>
                  <div class="invalid-feedback">
                  Minimal Tujuan 1 harus diisi.
                  </div>
                  <input type="text" class="form-control" id="tujuan2" placeholder="Tujuan ke-2" onChange={ev => this.setState({ tujuan2: ev.target.value })}/>
                  <input type="text" class="form-control" id="tujuan3" placeholder="Tujuan ke-3" onChange={ev => this.setState({ tujuan3: ev.target.value })}/>
                  <input type="text" class="form-control" id="tujuan4" placeholder="Tujuan ke-4" onChange={ev => this.setState({ tujuan4: ev.target.value })}/>
                </div>
                <div class="row">
                  <label for="jenisKelas">Jenis Kelas</label>
                  <div class="">
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiGratis" value="Gratis" onChange={ev => this.setState({ jenisKelas: ev.target.value})}/>
                      <label class="form-check-label" for="opsiGratis">Gratis</label>
                    </div>
                    <div class="form-check-inline">
                      <input class="d-inline form-check-input" type="radio" name="jenisPostingan" id="opsiBerbayar" value="Berbayar" onChange={ev => this.setState({ jenisKelas: ev.target.value })}/>
                      <label class="form-check-label" for="opsiBerbayar">Berbayar</label>
                      <input class={`form-control d-inline form-control ml-2 ${this.errorClass(this.state.formErrors.inputharga)}`} name="inputharga" type="number" placeholder="Harga" disabled onChange={this.handleUserInput} required/>
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
                  <label for="deskripsikelas">Deskripsi Kelas</label>
                  <input type="text" class="form-control" id="deskripsikelas" placeholder="Deskripsi Kelas" onChange={ev => this.setState({ deskripsi: ev.target.value })}/>
                </div>
                <div class="row">
                  <label for="tujuan">Tujuan Pembelajaran <small>(maksimal 4)</small></label>
                  <input type="text" class="form-control" id="tujuan1" placeholder="Tujuan ke-1" onChange={ev => this.setState({ tujuan1: ev.target.value })} defaultValue={this.state.rinciankelas.tujuan1}/>
                  <input type="text" class="form-control" id="tujuan2" placeholder="Tujuan ke-2" onChange={ev => this.setState({ tujuan2: ev.target.value })} defaultValue={this.state.rinciankelas.tujuan2}/>
                  <input type="text" class="form-control" id="tujuan3" placeholder="Tujuan ke-3" onChange={ev => this.setState({ tujuan3: ev.target.value })} defaultValue={this.state.rinciankelas.tujuan3}/>
                  <input type="text" class="form-control" id="tujuan4" placeholder="Tujuan ke-4" onChange={ev => this.setState({ tujuan4: ev.target.value })} defaultValue={this.state.rinciankelas.tujuan4}/>
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
      <div class="container overflow-auto" style={{height:'90vh'}}>
        <div class="m-4">
          <div class="row">
            <div class="col-12">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modaltambahkelas">+ Tambah Kelas</button>
            </div>
            <h2 class = "col-12 my-2">Daftar Kelas</h2>

            <div class="ml-4 text-primary" style={{width:"100%"}}>
              <table id="kelas" class="display" style={{width:"100%"}}>
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
                      <td>Rp {this.numberWithCommas(data.harga)}</td>
                      <td><button class="btn btn-light" id={data.kelasID} onClick = {e => this.ambilDataKelas(e.target.id)} data-toggle="modal" data-target="#modalubahkelas"><i className="fa fa-edit fa-sm  font-weight-bold pr-2"></i> Ubah</button></td>
                    </tr>)
                  }
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
      {/*Akhir Tabel Kelas*/}
      </>
      );
    }
  }

  export default Kelas;
