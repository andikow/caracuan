import React, { Component } from "react";
import "./../public/assets/css/creatorpost.css";
import DefaultAvatar from './../public/assets/img/default_avatar.png';
import jwt_decode from 'jwt-decode';

class Mengikuti extends Component {
  constructor(){
    super();
    this.state = {
      memberID:'',
      data:[],
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
        name: decoded.name,
        expire:decoded.exp
      })
    })
    .catch((error)=>{
      this.props.history.push('/login')
    })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/mengikuti/${this.state.memberID}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials:'include'
    })
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      this.setState({
        data: res
      });
      console.log(this.state.data[0].name);
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
  }

  render() {
    return (
    <>
    <div class="container overflow-auto" style={{height:'90vh'}}>
      <div className="row">
        <h2 className="col-12 mb-4 text-primary">Mengikuti</h2>
        <div class="col-12">
          <div class="row container d-flex">
            <h5  className="my-auto mr-2 text-primary">Menampilkan</h5>
            <div class="dropdown mr-2">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:80}}>
                30
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item">30</a>
                <a class="dropdown-item">60</a>
                <a class="dropdown-item">100</a>
              </div>
            </div>
            <h5 className="my-auto text-primary">Data</h5>
            <div class="row ml-auto">
              <h5 className="my-auto mr-2 text-primary">Cari</h5>
              <input type="text" class="form-control mr-2" placeholder="Cari Analis" style={{width:200}} />
            </div>
          </div>
        </div>
      </div>


      <div class="row py-4 m-0">
            {this.state.data.map(data =>
              <div class="col-lg-3 col-sm-6 mx-4">
              <div class="card" style={{height:70}}>
                <div class="row">
                    <div className="col-3 my-2 ml-2 d-flex align-content-center flex-wrap">
                      <img src={data.profilephoto ? 'http://localhost:' + process.env.REACT_APP_REQ_PORT + '/uploads/profil/' + data.profilephoto : DefaultAvatar} alt="Poto" height="40" style={{borderRadius: "100%"}} />
                    </div>
                    <div class="col">
                    <div class="row mr-auto">
                      <a href={"/#/creator/" + data.memberID + "/beranda/"}><p className="text-primary font-weight-bold mb-0">{data.Name}</p></a>
                    </div>
                    <div class="row mr-auto">
                      <p  class="text-info font-weight-bold mb-2" style={{fontSize:12}}>{data.username}</p>
                    </div>

                    </div>
                </div>
              </div>
              </div>
            )}

    </div>
    <div class="row">
      <div class="col">
        <h5  className="col-auto m-1 text-primary">Menampilkan 1 sampai 6 dari 6 data</h5>
      </div>
      <div class="col d-flex justify-content-end mr-4">
        <a className="btn btn-primary text-center mx-2 text-white" href="#" style={{width:"100px", borderRadius:"10%"}}>Sebelum</a>
        <a className="btn btn-info text-center text-white font-weight-bold" href="#" style={{width:"50px"}}>1</a>
        <a className="btn btn-primary text-center mx-2 text-white" href="#" style={{width:"100px", borderRadius:"10%"}}>Sesudah</a>
      </div>
    </div>
    </div>
    </>
    )
  }
}

export default Mengikuti;
