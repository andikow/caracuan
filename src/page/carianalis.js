import React from 'react';

import Header from './../component/header.js';
import Footer from './../component/footer.js';
import "./../public/assets/css/carianalis.css";

export default class CariAnalis extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount() {
    this.listanalis('%25%25')
  }

  listanalis(ev){
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/carianalis/%25${ev}%25`,
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
    <div class="input-group mx-auto" style={{width:"500px"}}>
      <input type="text" onChange={ev => this.listanalis(ev.target.value)} class="form-control" placeholder="Cari Analis" />
      <div class="input-group-append">
        <button class="btn btn-primary btn-link" type="button">
          <i class="fa fa-search text-white"></i>
        </button>
      </div>
    </div>
    <div class="row py-4 justify-content-center m-0">
      {this.state.data.map(data =>
        <div class="col-lg-3 col-sm-6 mx-4">
          <div class="card hovercard">
            <div class="cardheader">
              <img src={data.coverphoto} alt="Potobg" height="125" width="100%" />
            </div>
            <div class="avatar">
              <img src={data.profilephoto} alt="Poto" height="150" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
            </div>
            <div class="info">
              <div class="title">
                <a href={"/#/creator/" + data.memberID + "/beranda/"}><h4 className="text-primary">{data.Name}</h4></a>
              </div>
              <h5 class="desc">@{data.username}</h5>
              <h5 class="desc">{data.shortbio}</h5>
              <h5 className="desc">Pengikut : {data.pengikut}</h5>
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
