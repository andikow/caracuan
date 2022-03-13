import React, { Component } from "react";
import Poto from './../public/assets/img/creator.png';
import jwt_decode from 'jwt-decode';

class Pengaturan extends Component {
  constructor(){
    super();
    this.state = {
      memberID:'',
      coverImage:"https://fakeimg.pl/1200x400/",
      profilImage:"https://fakeimg.pl/300x300/",
      saveCoverImage:null,
      saveProfilImage:null,
      coverImageName:'',
      profilImageName:'',
      expire:'',
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
      let formData = new FormData();
      formData.append("photo", this.state.saveCoverImage);

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/uploadcover`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data)=> this.setState({coverImageName: data.imageName}))

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/uploadprofil`, {
          method: "POST",
          body: formData,
        })
        .then((res) => res.json())
        .then((data)=> this.setState({profilImageName: data.imageName}))

      var data = {
          memberID:this.state.memberID,
          coverImageName:this.state.coverImageName,
          profilImageName:this.state.profilImageName,
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

    } else {
      alert("Upload gambar dulu");
    }
  }

  render() {
    return (
      <>
      <div class="container">
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
            </div>
          </div>

          <div class="col-8">
            <div class="form-group">
               <label class="text-primary">Nama</label>
               <input  type="text" class="form-control my-2" placeholder="Vandarina Risca" />
            </div>
            <div class="form-group">
               <label class="text-primary">Tanggal Lahir</label>
               <input  type="date" class="form-control my-2" />
            </div>
            <div class="form-group">
               <label class="text-primary">No. Handphone</label>
               <input type="text" class="form-control my-2" placeholder="085624742052" />
            </div>
            <div class="form-group">
               <label class="text-primary">Email</label>
               <input type="text" class="form-control my-2" placeholder="vandarina.risca@gmail.com" />
            </div>
            <div class="pt-4 form-group">
              <p class="pt-4 text-primary">Ganti Password</p>
               <label class="text-primary">Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
               <label class="text-primary">Konfirmasi Password Baru</label>
               <input type="password" class="form-control my-2" placeholder="Password" />
               <p className="text-primary" style={{fontSize:14}}>Lupa Password?</p>
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
