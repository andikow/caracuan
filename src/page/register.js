import React, { Component } from "react";
import Logo from './../public/assets/img/logo_cover.png';
import { FormErrors } from '../component/FormErrors';
import './../public/assets/css/Form.css';

class Register extends Component {
  constructor(){
    super();
    this.state = {
          name:'',
          birthDate:'',
          phone:'',
          email:'',
          password:'',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
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
                <div className="panel panel-default">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>

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
                  <div class={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                     <label htmlFor="email" class="text-primary">Email</label>
                     <input type="text" class="form-control my-2" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput} required/>
                  </div>
                  <div class={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                     <label htmlFor="password" class="text-primary">Password</label>
                     <input type="password" class="form-control my-2" placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput} />
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
