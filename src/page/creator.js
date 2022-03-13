import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import 'dotenv/config'

import Header from './../component/header.js';
import Footer from './../component/footer.js';

import Poto from './../public/assets/img/creator.png';
import Potobg from './../public/assets/img/bgcreator.jpg';
import CreatorBeranda from './../component/creator-beranda.js';
import CreatorPost from './../component/creator-post.js';
import CreatorAnalisa from './../component/creator-analisa.js';
import DetailPost from './../component/detail-post.js';


export default class Creator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      id : this.props.location.pathname.split("/")[2],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kreator/` + this.state.id + '/',
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
  }

  render(){
    return(
    <>
    <Header/>
      <div className="row"  style={{paddingLeft:"70px", paddingRight:"70px", paddingTop:"40px", paddingBottom:"40px"}}>
      <div className="aside pb-4 bg-light col-xs-12 col-sm-4 col-md-3 text-primary">
        <img src={Poto} alt="Poto" height="150" style={{marginTop: "30px", borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
        <div style={{textAlign:'center'}}>
        <h5 className="pt-4 font-weight-bold">{this.state.data.Name}</h5>
        <p>@vandarinarisca</p>
         <h6 className="font-weight-bold">Pengikut : 100</h6>
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
      <img src={Potobg} alt="Potobg" height="225" width="100%" />
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
          <a className="btn btn-outline-primary mx-2 text-primary text-center font-weight-bold" href="#"><i className="fa fa-user-plus"></i> Ikuti</a>
          <a className="btn btn-outline-primary text-primary text-center font-weight-bold" href="#"><i className="fa fa-share"></i> Bagikan</a>
          <a className="btn btn-outline-danger mx-2 text-center font-weight-bold" href="#"><i className="fa fa-exclamation-triangle"></i> Laporkan</a>
        </div>
      </div>
      <HashRouter>
      <div className="content">
      <Route path="/creator/:id/beranda" component={CreatorBeranda}/>
      <Route exact path="/creator/:id/post" component={CreatorPost}/>
      <Route path="/creator/:id/analisa/" component={CreatorAnalisa}/>
      <Route exact path="/creator/:id/post/:topikID" component={DetailPost}/>
      </div>
      </HashRouter>
      </div>
      </div>
      <Footer/>
    </>
    )
  }
}
