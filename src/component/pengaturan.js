import React, { Component } from "react";
import Poto from './../public/assets/img/creator.png';
import jwt_decode from 'jwt-decode';
var moment = require('moment');

class Pengaturan extends Component {
  constructor(){
    super();
    this.state = {
      memberID:'',
      coverImage:"https://fakeimg.pl/1200x400/",
      profilImage:"https://fakeimg.pl/300x300/",
      name:'',
      birthDate:'',
      phone:'',
      email:'',
      shortbio:'',
      username:'',
      instagram:'',
      twitter:'',
      youtube:'',
      saveCoverImage:null,
      saveProfilImage:null,
      coverImageName:'',
      profilImageName:'',
      expire:'',
      dataMember:{},
    }
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
        dataMember: res[0],
        name: res[0].Name,
        birthDate: moment(res[0].BirthDate).format("YYYY-MM-DD").toString(),
        phone:res[0].Phone,
        email:res[0].Email,
        shortbio:res[0].shortbio,
        username:res[0].username,
        instagram:res[0].instagram,
        twitter:res[0].twitter,
        youtube:res[0].youtube,
      })
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
  }

  handleUploadCoverChange(e) {
    let uploaded = e.target.files[0];
    this.setState({
      coverImage: URL.createObjectURL(uploaded),
      saveCoverImage:uploaded
    });
  }

  handleUploadProfilChange(e) {
    let uploaded = e.target.files[0];
    this.setState({
      profilImage: URL.createObjectURL(uploaded),
      saveProfilImage:uploaded
    });
  }

  async handleSave() {
  if (this.state.saveCoverImage || this.state.saveProfilImage) {
      // save image to backend
      let formDataCover = new FormData();
      let formDataProfil = new FormData();
      formDataCover.append("photo", this.state.saveCoverImage);
      formDataProfil.append("photo", this.state.saveProfilImage);

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/uploadcover`, {
        method: "POST",
        body: formDataCover,
      })
        .then((res) => res.json())
        .then((data)=> this.setState({coverImageName: data.imageName}))

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/uploadprofil`, {
          method: "POST",
          body: formDataProfil,
        })
        .then((res) => res.json())
        .then((data)=> this.setState({profilImageName: data.imageName}))

      var data = {
          memberID:this.state.memberID,
          name:this.state.name,
          birthDate:this.state.birthDate,
          phone:this.state.phone,
          email:this.state.email,
          coverImageName:this.state.coverImageName,
          profilImageName:this.state.profilImageName,
          username:this.state.username,
          shortbio:this.state.shortbio,
          instagram:this.state.instagram,
          twitter:this.state.twitter,
          youtube:this.state.youtube,
      }

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/updatemember`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(alert('Perubahan disimpan!'))
          .then(window.location.reload())

    } else {
      alert("Upload gambar dulu");
    }
  }

  render() {
    return (
      <>
      <div class="container overflow-auto" style={{height:'90vh'}}>
        <div class="row">
          <h2 className="col-12 px-4 my-4 text-primary">Pengaturan</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <div className="mx-auto">
              <div>
                <img src={this.state.coverImage} className="img-thumbnail" alt="..." />
              </div>
              <div className="my-3">
                <label htmlFor="formFile" className="form-label text-primary">
                  Upload foto cover
                </label>
                <input
                onChange={(e) => {e.preventDefault();this.handleUploadCoverChange(e)}}
                className="form-control"
                type="file"
                id="formFile"
                />
              </div>
            </div>
          </div>

          <div class="col-4">
            <div className="mx-auto">
              <div class="text-center">
                <img src={this.state.profilImage} className="img-thumbnail" alt="..." />
              </div>
              <div className="my-3">
                <label htmlFor="formFile" className="form-label text-primary">
                  Upload foto profil
                </label>
                <input
                onChange={(e) => {e.preventDefault();this.handleUploadProfilChange(e)}}
                className="form-control"
                type="file"
                id="formFile"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"><i class="far fa-fw fa-at"></i></span>
                </div>
                <input type="text" onChange={ev => this.setState({ username: ev.target.value })} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" defaultValue={this.state.dataMember.username || ''}/>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"><i class="fab fa-fw fa-instagram"></i></span>
                </div>
                <input type="text" onChange={ev => this.setState({ instagram: ev.target.value })} class="form-control" placeholder="Instagram" aria-label="instagram" aria-describedby="basic-addon1" defaultValue={this.state.dataMember.instagram || ''}/>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"><i class="fab fa-fw fa-twitter"></i></span>
                </div>
                <input type="text" onChange={ev => this.setState({ twitter: ev.target.value })} class="form-control" placeholder="Twitter" aria-label="twitter" aria-describedby="basic-addon1" defaultValue={this.state.dataMember.twitter || ''}/>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"><i class="fab fa-fw fa-youtube"></i></span>
                </div>
                <input type="text" onChange={ev => this.setState({ youtube: ev.target.value })} class="form-control" placeholder="Youtube" aria-label="youtube" aria-describedby="basic-addon1" defaultValue={this.state.dataMember.youtube || ''}/>
              </div>

              <div class="form-group">
                <label class="text-primary">Shortbio</label>
                <textarea  type="text" onChange={ev => this.setState({ shortbio: ev.target.value })} class="form-control my-2" style={{resize: "none"}}placeholder="Shortbio" defaultValue={this.state.dataMember.shortbio}/>
              </div>
            </div>
          </div>

          <div class="col-8">
            <div class="form-group">
               <label class="text-primary">Nama</label>
               <input type="text" onChange={ev => this.setState({ name: ev.target.value })} class="form-control my-2" placeholder="Nama" defaultValue={this.state.dataMember.Name}/>
            </div>
            <div class="form-group">
               <label class="text-primary">Tanggal Lahir</label>
               <input id="birthDate" type="date" onChange={ev => this.setState({ birthDate: ev.target.value })} defaultValue = {this.state.birthDate} class="form-control my-2"/>
            </div>
            <div class="form-group">
               <label class="text-primary">No. Handphone</label>
               <input type="text" onChange={ev => this.setState({ phone: ev.target.value })} class="form-control my-2" placeholder="Nomor Handphone" defaultValue={this.state.dataMember.Phone}/>
            </div>
            <div class="form-group">
               <label class="text-primary">Email</label>
               <input type="text" onChange={ev => this.setState({ email: ev.target.value })} class="form-control my-2" placeholder="johndoe@johndoe.com" defaultValue={this.state.dataMember.Email}/>
            </div>
            <div class="pt-4 form-group">
              <p class="pt-4 text-primary">Ganti Password</p>
               <label class="text-primary">Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
               <label class="text-primary">Konfirmasi Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Konfirmasi Password" />
            </div>
            <div class="d-flex my-2">
              <button onClick={(e)=>{e.preventDefault();this.handleSave()}} className="btn btn-primary text-center text-white ml-auto font-weight-bold" href="#" style={{width:"150px"}}>Simpan</button>
            </div>

          </div>

        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
