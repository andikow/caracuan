import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';

class Pengaturan extends Component {
  constructor(){
    super();
    this.state = {
      image:"https://fakeimg.pl/350x200/",
      saveImage:null,
      msg:''
    }
  }

  handleUploadChange(e) {
    let uploaded = e.target.files[0];
    this.setState({
      image: URL.createObjectURL(uploaded),
      saveImage:uploaded
    });
  }

  handleSave() {
  if (this.state.saveImage) {
      // save image to backend
      let formData = new FormData();
      formData.append("photo", this.state.saveImage);

      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/api/upload`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.href = data.image;
        });
    } else {
      alert("Upload gambar dulu");
    }
  }

  render() {
    return (
      <>
      <div class="container">
        <div class="row">
          <h2 className="col-12 mx-4 my-4 text-primary">Pengaturan</h2>
        </div>
        <div class="row">
          <div class="col-4">
          <div className="mt-5 mx-auto">
        <div>
          <img src={this.state.image} className="img-thumbnail" alt="..." />
        </div>
        <div className="my-3">
          <label htmlFor="formFile" className="form-label">
            Upload image here
          </label>
          <input
            onChange={(e) => {e.preventDefault();this.handleUploadChange(e)}}
            className="form-control"
            type="file"
            id="formFile"
          />
          <button onClick={(e)=>{e.preventDefault();this.handleSave()}} className="btn btn-primary mt-2 w-100">
            Save my photo
          </button>
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
              <button className="btn btn-primary text-center text-white ml-auto font-weight-bold" href="#" style={{width:"150px"}}>Simpan</button>
            </div>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Pengaturan;
