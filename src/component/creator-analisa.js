import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/creatorpost1.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import HashLoader from "react-spinners/HashLoader";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
var moment = require('moment');

class CreatorAnalisa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.location.pathname.split("/")[2],
      dataAnalisis:[],
      profilImage:'',
      name:'',
      loading: true,
    };
  }
  voting(id, e) {
    var voting = e.split((/(\s+)/))[0];
    var data = {
      voting:voting,
      analysisID:id,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/voting`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(alert('Voting berhasil disimpan!'))

  }
  round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
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
          expire:decoded.exp
        })
      })
      .catch((error)=>{
        this.props.history.push('/login')
      })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/analisa/${this.state.id}`,
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
            dataAnalisis: data,
            loading:false,
          });
      })

    var data = {
        memberID : this.state.id,
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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/member/${this.state.id}`,
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
              name: data[0].name
            });
        });

  }
  render() {

    let today = new Date();
    return (
      <>
      <div className="sweet-loading p-3">
      <HashLoader
      cssOverride={override}
      size={150}
      color={"#217691"}
      loading={this.state.loading}
      speedMultiplier={1.5}
      />
      </div>
      {
        this.state.dataAnalisis.map(data=>
          <div className="row">
          <div className="col-auto ml-2 py-2 flex-wrap">
          <img src={this.state.profilImage} alt="Poto" height="50" style={{borderRadius: "100%", display:'block'}} />
          </div>
          <div className="col">
          <div className="row py-2" style={{height:"30px"}}>
          <p className="text-primary font-weight-bold">{this.state.name}</p>
          </div>
          <div className="row">
          <p className="text-secondary">{moment(data.date).format("DD MMM YYYY")}</p>
          </div>
          <div className="row">
          <p className="text-primary">{data.description}</p>
          </div>
          <div className="row">
          <div className="card" style={{width:"500px"}}>
          <div className="card-body">
            <div class="row">
              <div class="col">
                <p className="text-primary" style={{fontSize:"18px"}}>PREDIKSI</p>
              </div>
              <div class="col text-right">{data.isHit == "Hold" ?  <h4 class= "font-weight-bold text-warning">Hold</h4> : data.isHit == "Hit" ? <h4 class= "font-weight-bold text-success">Berhasil</h4> :  <h4 class= "font-weight-bold text-danger">Gagal</h4>}</div>
            </div>
          <h5 className="text-primary card-title">{data.stockCode + ' '}<span className="text-secondary" style={{fontSize:"13px"}}>{data.namaSaham}</span></h5>
          <h3 className="text-primary card-title">{data.targetPrice} <span className="text-secondary" style={{fontSize:"13px"}}>Target Harga</span></h3>
          <div className="row">
          <div className="col-auto">
          <p className="text-primary" style={{fontSize:"12px"}}>Kategori <br />
          {
            data.kategori == -1 ? <span data-toggle="tooltip" data-placement="top" title="Aman"><i class="fas fa-exclamation text-success"></i></span> :
            data.kategori == 0 ?
              <span data-toggle="tooltip" data-placement="top" title="Moderat">
                <i class="fas fa-exclamation text-warning"></i>
                <i class="fas fa-exclamation text-warning"></i>
              </span>:
              <span data-toggle="tooltip" data-placement="top" title="Berbahaya">
                <i class="fas fa-exclamation text-danger"></i>
                <i class="fas fa-exclamation text-danger"></i>
                <i class="fas fa-exclamation text-danger"></i>
              </span>}</p>
          </div>
          <div className="col-auto">
          <p className="text-primary" style={{fontSize:"12px"}}>Harga Awal <br />{data.initialPrice}</p>
          </div>
          <div className="col-auto">
          <p className="text-primary" style={{fontSize:"12px"}}>Perubahan <br /> <span className="text-success">{this.round((data.targetPrice - data.initialPrice)/data.initialPrice * 100) } %</span></p>
          </div>
          <div className="col-auto">
          <p className="text-primary" style={{fontSize:"12px"}}>Waktu <br />{data.days + ' hari (tersisa ' + ((data.days - moment(today).diff(data.date, "days")) < 0 ? "0":(data.days - moment(today).diff(data.date, "days"))) + ' hari lagi)'}</p>
          </div>
          </div>
          <div className="row py-4">
          <div className="col">
          <a id={data.analysisID} className="disagreed btn btn-outline-danger btn-block text-danger font-weight-bold" onClick={(e) => this.voting(e.target.id, e.target.className)}><i className="fa fa-chevron-circle-down"></i> Tidak Setuju</a>
          </div>
          <div className="col">
          <a id={data.analysisID} className="agreed btn btn-outline-success btn-block text-success font-weight-bold" onClick={(e) => this.voting(e.target.id, e.target.className)}><i className="fa fa-chevron-circle-down"></i> Setuju</a>
          </div>

          </div>
          </div>
          </div>
          </div>
          </div>

          </div>

      )}
      </>

    );
  }
}

export default CreatorAnalisa;
