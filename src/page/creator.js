import React from 'react';
import { Route, NavLink } from "react-router-dom";
import 'dotenv/config';
import jwt_decode from 'jwt-decode';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

import Poto from './../public/assets/img/creator.png';
import Potobg from './../public/assets/img/bgcreator.jpg';
import CreatorBeranda from './../component/creator-beranda.js';
import CreatorPost from './../component/creator-post.js';
import CreatorAnalisa from './../component/creator-analisa.js';
import DetailPost from './../component/detail-post.js';


class Creator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      token:'',
      id : this.props.location.pathname.split("/")[2],
      profilImage:'',
      coverImage:'',
      memberID:'',
      isLogin:false,
      isFollowed:false,
      pengikut:0,
      name:'',
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
        this.cekmengikuti();
      })
    .catch((error)=>{this.cekmengikuti()})

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kreator/` + this.state.id + '/',
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
        data: res[0]
      });
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
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
        coverImage: data[0].coverphoto,
      })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/pengikut/${this.state.id}`,
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
      .then(data=>{
        this.setState({
          pengikut:data[0].pengikut,
        });
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

  }

  async cekmengikuti(){
    if (this.state.isLogin) {
      fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/mengikuti/${this.state.memberID}/${this.state.id}`,
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
        .then(data=>{
          if (data == undefined) {
            this.setState({isFollowed:true})
          }
          else this.setState({isFollowed:false});
        })
        .catch((err) =>{
          this.setState({ msg: err.msg })
        })
      }
    else{
        this.setState({
          isLogin: false,
          isFollowed:false,
        });
      }
    }
  async mengikuti(){
    if(!this.state.isLogin){
      this.props.history.push({
        pathname:"/login",
        state: this.props.location.pathname
      })
    }
    else{
      var data = {
        memberID:this.state.memberID,
        followedID:this.state.id,
      }
      if(!this.state.isFollowed){
        await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/mengikuti`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data =>{this.setState({isFollowed:true});})
        }
        else if(this.state.isFollowed){
          await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/mengikuti`,
            {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data =>{this.setState({isFollowed:false});})
        }
      }
    }

  render(){
    return(
    <>
    <Header/>
      <div className="row container-fluid"  style={{paddingLeft:"70px", paddingRight:"70px", paddingTop:"40px", paddingBottom:"40px"}}>
      <div className="aside pb-4 bg-light col-xs-12 col-sm-4 col-md-3 text-primary">
        <img src={this.state.profilImage} alt="Poto" height="150" style={{marginTop: "30px", borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
        <div style={{textAlign:'center'}}>
        <h5 className="pt-4 font-weight-bold">{this.state.data.Name}</h5>
        <p>@{this.state.data.username}</p>
         <h6 className="font-weight-bold">{'Pengikut : ' + this.state.pengikut}</h6>
         <h6 className="font-weight-bold">Performa : 85%</h6>
         <p>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
         <i style={{color:"#F5C60D"}} className="fas fa-star-half-alt mr-2"></i>
         (24 penilaian)
         </p>
        </div>
      </div>
      <div className="container col-xs-12 col-sm-8 col-md-9">
      <img src={this.state.coverImage} alt="Potobg" height="225" width="100%" />
      <div className="row">
        <div className="col py-2">

              <NavLink activeClassName="active" to={"/creator/" + this.state.id + "/beranda"}> <a className="btn btn-outline-primary text-center font-weight-bold" href="#">
              <input type="radio" name="options" id="option1"/> Beranda
              </a></NavLink>
              <NavLink activeClassName="active" to={"/creator/" + this.state.id + "/post"}><a className="btn btn-outline-primary text-center mx-2 font-weight-bold" href="#">
                <input type="radio" name="options" id="option1"/> Kelas
              </a></NavLink>
              <NavLink activeClassName="active" to={"/creator/" + this.state.id + "/analisa"}><a className="btn btn-outline-primary text-center font-weight-bold" href="#">
                  <input type="radio" name="options" id="option1"/> Analisa
              </a></NavLink>


        </div>
        <div className="col py-2" style={{textAlign: 'right'}}>
          <button className="btn btn-outline-primary mx-2 text-center font-weight-bold" onClick={() => this.mengikuti()}>{this.state.isFollowed ? <span><i className="fa fa-user-minus"></i> Batal Ikuti</span>: <span><i className="fa fa-user-plus"></i> Ikuti</span>}</button>
          <button type="button" className="btn btn-outline-primary text-center font-weight-bold" data-toggle="modal" data-target="#myModal"><i className="fa fa-share"></i> Bagikan</button>
          <div class="modal fade" id="myModal" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="cardmodal">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="cardmodal-title">
                    <p>Bagikan</p>
                  </div>
                  <div class="cardmodal-text">
                    <a className="btn btn-outline-success btn-block text-success text-center font-weight-bold mt-2 p-2" href={'https://web.whatsapp.com/send?text=Ayo%20belajar%20saham%20dengan%20'+this.state.name+'%20@CaraCuan%20https://Caracuan/' + this.state.name}><i className="fab fa-whatsapp"></i> Whatsapp</a> <br />
                    <a className="btn btn-outline-primary text-primary btn-block text-center font-weight-bold p-2" href={'https://telegram.me/share/url?text=Ayo%belajar%20saham%20dengan%20'+this.state.name+'%20@CaraCuan&url=https://Caracuan/' + this.state.name}><i className="fab fa-telegram"></i> Telegram</a> <br />
                    <a className="btn btn-outline-info text-info btn-block text-center font-weight-bold p-2" href={'https://twitter.com/intent/tweet/?text=Ayo%20belajar%20saham%20dengan%20'+this.state.name+'%20@CaraCuan&url=https://Caracuan/' + this.state.name}><i className="fab fa-twitter"></i> Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-outline-danger mx-2 text-center font-weight-bold" href={'mailto:help@support.caracuan.id?subject=Laporkan Pengguna&body=Halo caracuan, saya ingin melaporkan pengguna ini karena ...'}><i className="fa fa-exclamation-triangle"></i> Laporkan</a>
        </div>
      </div>

      <div className="content">
      <Route path="/creator/:id/beranda" component={CreatorBeranda}/>
      <Route exact path="/creator/:id/post" component={CreatorPost}/>
      <Route path="/creator/:id/analisa/" component={CreatorAnalisa}/>
      <Route exact path="/creator/:id/post/:topikID" component={DetailPost}/>
      </div>
      </div>
      </div>
      <Footer/>
    </>
    )
  }
}

export default Creator;
