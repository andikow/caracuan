import React, { Component } from "react";
import Logo from './../public/assets/img/logo_cover.png';
import validator from 'validator';
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
          formErrors: {name:'', birthDate:'', phone:'', email: '', password: ''},
          nameValid:false,
          birthDateValid:false,
          phoneValid:false,
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
        let nameValid = this.state.nameValid;
        let birthDateValid = this.state.birthDateValid;
        let phoneValid = this.state.phoneValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
          case 'name':
            nameValid =  validator.isAlpha(value);
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
          case 'birthDate':
            birthDateValid =  validator.isBefore(value.toString(), new Date().toString());
            fieldValidationErrors.birthDate = birthDateValid ? '' : ' is invalid';
            break;
          case 'phone':
            phoneValid =  validator.isMobilePhone(value, ['id-ID']);
            fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
            break;
          case 'email':
            emailValid = validator.isEmail(value);
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
                        nameValid: nameValid,
                        birthDateValid: birthDateValid,
                        phoneValid: phoneValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }

    validateForm() {
        this.setState(
          {
            formValid:
            this.state.nameValid &&
            this.state.birthDateValid &&
            this.state.phoneValid &&
            this.state.emailValid &&
            this.state.passwordValid
          });
      }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
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
                     <label htmlFor="name" class="text-primary">Nama Lengkap</label>
                     <input type="text" class={`form-control my-2 ${this.errorClass(this.state.formErrors.name)}`} placeholder="Nama Lengkap" name="name" value = {this.state.name} onChange={this.handleUserInput} required/>
                     <div class="invalid-feedback">
                     Masukkan Nama yang valid.
                     </div>
                  </div>
                  <div class="form-group">
                     <label htmlFor="birthDate" class="text-primary">Tanggal Lahir</label>
                     <input type="date" class={`form-control my-2 ${this.errorClass(this.state.formErrors.birthDate)}`} name="birthDate" value={this.state.birthDate} onChange={this.handleUserInput} required/>
                     <div class="invalid-feedback">
                     Masukkan Tanggal Lahir yang valid.
                     </div>
                  </div>
                  <div class="form-group">
                     <label htmlFor="phone" class="text-primary">No. Handphone</label>
                     <input type="text" class={`form-control my-2 ${this.errorClass(this.state.formErrors.phone)}`} placeholder="No. Handphone" name="phone" value={this.state.phone} onChange={this.handleUserInput} required/>
                     <div class="invalid-feedback">
                     Masukkan No. Handphone yang valid.
                     </div>
                  </div>
                  <div class="form-group">
                     <label htmlFor="email" class="text-primary">Email</label>
                     <input type="text" class={`form-control my-2 ${this.errorClass(this.state.formErrors.email)}`} placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput} required/>
                     <div class="invalid-feedback">
                     Masukkan Email yang valid.
                     </div>
                  </div>
                  <div class="form-group">
                     <label htmlFor="password" class="text-primary">Password</label>
                     <input type="password" class={`form-control my-2 ${this.errorClass(this.state.formErrors.password)}`} placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput} required/>
                     <div class="invalid-feedback">
                     Minimal terdiri dari 6 karakter.
                     </div>
                  </div>
                  <button
                  className="btn btn-primary text-center mx-auto text-white font-weight-bold"
                  href="#"
                  style={{width:"300px"}}
                  onClick={() => this.register()}
                  disabled={!this.state.formValid}>
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
