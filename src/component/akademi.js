import React, { Component } from "react";
import { Route , HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/akademi1.jpg';
import Poto2 from './../public/assets/img/akademi2.jpg';
import Poto3 from './../public/assets/img/akademi3.jpg';
import Poto4 from './../public/assets/img/akademi4.jpg';
import Poto5 from './../public/assets/img/akademi5.jpg';
import Poto6 from './../public/assets/img/akademi6.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import DetailPost from './detail-post.js';
import jwt_decode from 'jwt-decode';

class Akademi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID: '',
      token:'',
      dataKelasDibeli:[],
      datalulus:[],
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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelasdibeli/${this.state.memberID}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data=>{
        this.setState({
          dataKelasDibeli: data,
        });
        console.log(data);
      })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelaslulus/${this.state.memberID}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data=>{
        this.setState({
          datalulus: data,
        });
        console.log(this.state.datalulus);
      })

  }
  render() {
    return (
    <div class="container overflow-auto" style={{height:'90vh'}}>
      <h2 className="mx-4 my-4 text-primary">Kelas Yang Dipelajari</h2>

      <div className="row">
        {
          this.state.dataKelasDibeli.map ((data, index)=>
          <div class="col-sm-6 col-md-4 col-lg-3 mx-4" onClick={console.log("s")}>
            <div class="card card-inverse card-info">
              <img class="card-img-top" src={'http://localhost:4000/uploads/' + data.thumbnail} alt = {'thumbnail-kelasID-' + data.kelasID}/>
              <div class="card-block">
                <div class="card-text dotswrap3 text-primary" style={{height:"75px"}}>
                  <span style={{fontSize:11}}> {'Oleh: ' + data.name}</span> <br />  <a href={"/#/dashboard/akademi/" + data.kelasID}>{data.judul}</a>
                </div>
              </div>

              <div class="card-footer">
              <span class="align-middle float-left text-primary font-weight-bold">
              {((data.materiselesai ? data.materiselesai : 0) / (data.jumlahmateri ? data.jumlahmateri : 0)) ?
                (data.materiselesai ? data.materiselesai : 0) / (data.jumlahmateri ? data.jumlahmateri : 0) * 100 : 0} %
              </span>
              <span class="align-middle float-left text-primary font-weight-bold"></span>
                <button class="btn btn-warning btn-sm float-right">
                {(((data.materiselesai ? data.materiselesai : 0) / (data.jumlahmateri ? data.jumlahmateri : 0)) ?
                  (data.materiselesai ? data.materiselesai : 0) / (data.jumlahmateri ? data.jumlahmateri : 0) * 100 : 0) == 100 ?
                  "Lulus" : "Belum Lulus"}</button>
              </div>
            </div>
          </div>
          )
        }
      </div>
    </div>
    );
  }
}

export default Akademi;
