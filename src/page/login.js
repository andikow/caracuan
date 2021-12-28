import React, { Component } from "react";
import Logo from './../public/assets/img/logo_cover.png';

class Login extends Component {
  render() {
    return (
      <div>
        <div class="row d-flex" style={{height:"620px"}}>
          <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" style={{background:"#ECF1FF"}}>
            <img src={Logo} alt="Logo" height="100px" />
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="row d-flex justify-content-end my-4 mx-4">
              <a className="btn btn-outline-primary text-primary text-center" href="/#/register/">Daftar</a>
            </div>
              <div class="row d-flex align-items-center justify-content-center">
              <form>
                <h2 class="my-4 text-center text-primary">Masuk</h2>
                  <div class="form-group">
                     <label class="text-primary">Email</label>
                     <input type="text" class="form-control my-2" placeholder="Email" />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">Password</label>
                     <input type="password" class="form-control my-2" placeholder="Password" />
                  </div>
                  <a className="btn btn-primary text-center mx-auto text-white font-weight-bold" href="#" style={{width:"300px"}}>Masuk</a>
                  <div class="my-3">
                     <center><a className="text-secondary" style={{fontSize:13}} href="#" >Lupa password?</a></center>
                  </div>


               </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;