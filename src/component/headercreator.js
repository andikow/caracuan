import React from 'react';
import Poto from './../public/assets/img/creator.png';
import DefaultAvatar from './../public/assets/img/default_avatar.png';
import Logo from './../public/assets/img/logo_cover.png';
import {NavLink} from "react-router-dom";
import jwt_decode from 'jwt-decode';

class Headercreator extends React.Component{

constructor(props) {
  super(props);
  this.state = {
    name : '',
    memberID:'',
    profilImage:'',
    token: '',
    expire:'',
    users:[]
  };
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
    const decoded = jwt_decode(this.state.token)
    this.setState({
      name: decoded.name,
      expire:decoded.exp,
      memberID:decoded.memberID,
    })
  })
  .catch((error)=>{
    this.props.history.push('/login')
  })

  var data = {
    memberID : this.state.memberID,
  }

  await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/memberphoto`,
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res=>{
    return res.json()
  })
  .then(data=>{
      this.setState({
      profilImage: data[0].profilephoto,
    })
  })
}

  render(){

    return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:'10vh'}}>
        <div className="col-lg-3 d-flex">
        <NavLink to="/"><img src={Logo} alt="Logo" height="50px" />
        </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <button className="btn btn-outline-primary btn-sm my-auto rounded-circle" type="search"><i className="fa fa-search fa-sm fa-fw font-weight-bold"></i></button>
            <button className="btn btn-sm my-auto"><a className="nav-item nav-link" href="#"  style={{paddingLeft:"20px", paddingRight:"20px"}}><i className="fa fa-bell-on fa-fw text-primary fa-lg"></i></a></button>
            <div className="d-flex align-content-center flex-wrap">
              <img src={this.state.profilImage != `http://localhost:${process.env.REACT_APP_REQ_PORT}/uploads/profil/` ? this.state.profilImage : DefaultAvatar} alt="Poto" height="40" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
            </div>

            <div className="row ml-2">
              <div className="col">
                <div className="w-100 d-none d-md-block text-primary">
                  <h5>{this.state.name}</h5>
                  <p style={{marginBottom: "0"}}>Analis</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
    )
  }
}

export default Headercreator;
