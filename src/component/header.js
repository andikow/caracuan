import React from 'react';
import Logo from './../public/assets/img/logo_cover_white.png';
import { NavLink } from "react-router-dom";
import jwt_decode from 'jwt-decode';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      isLogin:false,
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
        this.setState({token: data.accessToken});
        const decoded = jwt_decode(this.state.token);
        this.setState({
          name: decoded.name,
          memberID:decoded.memberID,
          expire:decoded.exp,
          isLogin:true,
        })
      })
    .catch((error)=>{console.log(error.message)})

    var data = {
      memberID : this.state.memberID,
    }

    if(this.state.memberID){
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
  }
  render(){

    return(
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="col-lg-3 d-flex">
      <NavLink to="/"><img src={Logo} alt="Logo" height="50px" />
      </NavLink>
      </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink to="/cari">
              <a className="nav-item nav-link active text-white font-weight-bold" href="" style={{paddingLeft:"20px"}}><i className="fa fa-search fa-sm text-white font-weight-bold pr-2"></i> Cari Analis<span className="sr-only">(current)</span>
              </a>
            </NavLink>
            <NavLink to="/berita">
              <a className="nav-item nav-link active text-white" href="" style={{paddingLeft:"20px"}}>Berita<span className="sr-only">(current)</span>
              </a>
            </NavLink>
            <NavLink to="/saham">
              <a className="nav-item nav-link text-white" href="" style={{paddingLeft:"20px"}}>Saham
              </a>
            </NavLink>
            <NavLink to="/login">
            {
              this.state.isLogin ?
              <NavLink to="/dashboard/akademi">
              <div className="d-flex align-content-center flex-wrap ml-2">
              <img src={this.state.profilImage} alt="Poto" height="40" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
              </div></NavLink>:
              <a className="nav-item nav-link text-white" href="" style={{paddingLeft:"20px"}}>Jadi Analis
              </a>
            }
            </NavLink>
          </div>
        </div>
      </nav>
    </>
    )
  }
}

export default Header;
