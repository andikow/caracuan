import React, { Component } from "react";
import Logo from './../public/assets/img/logo_cover.png';

class Login extends Component {
  constructor(){
     super();
     this.state = {
       email:'',
       password:'',
       msg:''
     }
  }

  login(){
    var data = {
      email:this.state.email,
      password:this.state.password
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/login`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials:'include',
        body: JSON.stringify(data)
      })
    .then(res=>{
      if(!res.ok){
        return res.json();
      }
      this.props.history.push('/dashboard/akademi')
    })
    .then(res=>{
      if(res){
        throw res;
      }
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
}

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
              <h6 class="m-0 text-center text-danger">{this.state.msg}</h6>
                <h2 class="mb-4 text-center text-primary">Masuk</h2>
                  <div class="form-group">
                     <label class="text-primary">Email</label>
                     <input onChange={ev => this.setState({ email: ev.target.value })} type="text" class="form-control my-2" placeholder="Email" />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">Password</label>
                     <input onChange={ev => this.setState({ password: ev.target.value })} type="password" class="form-control my-2" placeholder="Password" />
                  </div>
                  <button className="btn btn-primary text-center mx-auto text-white font-weight-bold" href="#" style={{width:"300px"}}
                    onClick={(e) => { e.preventDefault(); this.login()}}>Masuk</button>
                  <div class="my-3">
                     <center><a className="text-secondary" style={{fontSize:13}}>Lupa password?</a></center>
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
