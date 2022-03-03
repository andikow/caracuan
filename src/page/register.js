import React, { Component } from "react";
import Logo from './../public/assets/img/logo_cover.png';

class Register extends Component {
  constructor(){
    super();
    this.state = {
          name:'',
          birthDate:'',
          phone:'',
          email:'',
          password:''
        }
    }

    register(){
      var data = {
        name:this.state.name,
        birthDate:this.state.birthDate,
        phone:this.state.phone,
        email:this.state.email,
        password:this.state.password
      }
      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/register`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    ).then(res => res.json())
    .then(alert('Akun berhasil dibuat!'))
    .then(this.props.history.push('/login'))
  }

  render(){


    return (

      <div>
        <div class="row d-flex" style={{height:"620px"}}>

          {/*Left Content*/}
          <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" style={{background:"#ECF1FF"}}>
            <img src={Logo} alt="Logo" height="100px" />
          </div>
          {/*End Left Content*/}

          {/*Right Content*/}
          <div class="col-md-6 col-sm-12">
            {/*Masuk Button*/}
            <div class="row d-flex justify-content-end my-4 mx-4">
              <a className="btn btn-outline-primary text-primary text-center" href="/#/login/">Masuk</a>
            </div>
            {/*End Masuk Button*/}

            {/*Register Form*/}
            <div class="row d-flex align-items-center justify-content-center">
              <form onSubmit={Register}>
                <h2 class="my-4 text-center text-primary">Daftar</h2>
                  <div class="form-group">
                     <label class="text-primary">Nama Lengkap</label>
                     <input onChange={ev => this.setState({ name: ev.target.value })} type="text" class="form-control my-2" placeholder="Nama Lengkap" />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">Tanggal Lahir</label>
                     <input onChange={ev => this.setState({ birthDate: ev.target.value })} type="date" class="form-control my-2"  />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">No. Handphone</label>
                     <input onChange={ev => this.setState({ phone: ev.target.value })} type="text" class="form-control my-2" placeholder="No. Handphone" />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">Email</label>
                     <input onChange={ev => this.setState({ email: ev.target.value })} type="text" class="form-control my-2" placeholder="Email" />
                  </div>
                  <div class="form-group">
                     <label class="text-primary">Password</label>
                     <input onChange={ev => this.setState({ password: ev.target.value })} type="password" class="form-control my-2" placeholder="Password" />
                  </div>
                  <button
                  className="btn btn-primary text-center mx-auto text-white font-weight-bold"
                  href="#"
                  style={{width:"300px"}}
                  onClick={() => this.register()}>
                    Daftar
                  </button>
                  <div class="my-3">
                     <center><a className="text-secondary" style={{fontSize:13}} href="/#/login/" >Sudah punya akun? Masuk</a></center>
                  </div>


              </form>
            </div>
            {/*End Register Form*/}

          </div>
          {/*End Right Content*/}

        </div>
      </div>
    );
  }
}

export default Register;
