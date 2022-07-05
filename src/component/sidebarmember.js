import React, { Component } from "react";
import './../public/assets/css/sidebar.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Akademi from './akademi.js';
import DetailKelas from './detail-kelas.js';
import Mengikuti from './mengikuti.js';
import Transaksi from './transaksi.js';
import Pengaturan from './pengaturan.js';
import jwt_decode from 'jwt-decode';
import $ from 'jquery';

class Sidebarmember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      isAnalyst:'',
      location : this.props.location.pathname.split("/")[2],
    };
  }
  hapusSessionStorage(){
    sessionStorage.removeItem("justOnce", "true");
  }

  async componentDidMount() {
    if (this.state.location == "akademi") {
      $("#kelas").addClass("active");
    }
    else if(this.state.location == "mengikuti"){
      $("#mengikuti").addClass("active");
    }
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
        name: decoded.name,
        memberID:decoded.memberID,
        expire:decoded.exp
      })
    })
    .catch((error)=>{
      this.props.history.push('/login')
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/isanalyst/${this.state.memberID}`,
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
            isAnalyst: data[0].isAnalyst,
          });
      })

    $('#logout').click(function(){
      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/logout`,
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials:'include',
          redirect: 'follow'
        })
        .then(data=>{
          if(data.status == 200){
            this.props.history.push({pathname:"/"})
          }
        })}.bind(this));
        
  }
  render(){
    return (
      <>
      <div class="wrapper">
              <nav id="sidebar" style={{height:"90vh"}}>

                  <ul class="list-unstyled components">
                    <NavLink to="/dashboard/akademi">
                      <li id="kelas">
                          <a href="#">Kelas</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/mengikuti">
                      <li id="mengikuti">
                        <a href="#">Mengikuti</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/transaksi">
                      <li>
                        <a href="#">Transaksi</a>
                      </li>
                    </NavLink>
                    <NavLink to="/dashboard/pengaturan">
                    <li>
                      <a href="#">Pengaturan</a>
                    </li>
                    </NavLink>
                  </ul>

                  <ul class="list-unstyled CTAs">
                      <li>
                          <a onClick={this.hapusSessionStorage} href={this.state.isAnalyst ? "#/dashboardcreator":"#/soal"} class="download">Masuk Sebagai Analis</a>
                      </li>
                      <li>
                          <button id="logout" class="btn btn-danger btn-block">Keluar</button>
                      </li>
                  </ul>
              </nav>
              <HashRouter>
              <Route exact path="/dashboard/akademi" component={Akademi}/>
              <Route exact path="/dashboard/akademi/:kelasID" component={DetailKelas}/>
              <Route path="/dashboard/mengikuti" component={Mengikuti}/>
              <Route path="/dashboard/transaksi" component={Transaksi}/>
              <Route path="/dashboard/pengaturan" component={Pengaturan}/>
              </HashRouter>

          </div>

      </>
    );
  }
}

export default Sidebarmember;
