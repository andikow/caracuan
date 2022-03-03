import React from 'react';
import Poto from './../public/assets/img/creator.png';
import Potobg from './../public/assets/img/bgcreator.jpg';

import Header from './../component/header.js';
import Footer from './../component/footer.js';
import "./../public/assets/css/caricreator.css";

export default class CariCreator extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/carikreator`,
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
      console.log(this.state.data);
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
  }
  render(){


    return(
    <>
    <Header/>
    <h1 class="text-primary py-2" style={{textAlign:"center"}}>Cari Analis</h1>
    <div class="row py-4 justify-content-center m-0">
      {this.state.data.map(data =>
        <div class="col-lg-3 col-sm-6 mx-4">
          <div class="card hovercard">
            <div class="cardheader">
              <img src={Potobg} alt="Potobg" height="125" width="100%" />
            </div>
            <div class="avatar">
              <img src={Poto} alt="Poto" height="150" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
            </div>
            <div class="info">
              <div class="title">
                <a href={"/#/creator/" + data.memberID + "/beranda/"}><h4 className="text-primary">{data.Name}</h4></a>
              </div>
              <h5 class="desc">@vandarinarisca</h5>
              <h5 class="desc">Swing Trader</h5>
              <h5 className="desc">Pengikut : 100</h5>
              <p className="py-2">
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star mr-2"></i>
                (24 penilaian)
              </p>

            </div>
          </div>

        </div>
      )}
    </div>
      <Footer/>
      </>
      )
    }
  }
