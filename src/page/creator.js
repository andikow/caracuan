import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Potobg from './../public/assets/img/bgcreator.jpg';
import CreatorBeranda from './../component/creator-beranda.js';
import CreatorPost from './../component/creator-post.js';
import CreatorAnalisa from './../component/creator-analisa.js';

export default class Creator extends React.Component{

  render(){

    return(
    <>
      <div className="row"  style={{paddingLeft:"70px", paddingRight:"70px", paddingTop:"40px", paddingBottom:"40px"}}>
      <div className="aside pb-4 bg-light col-xs-12 col-sm-4 col-md-3 text-primary">
        <img src={Poto} alt="Poto" height="150" style={{marginTop: "30px", borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
        <div style={{textAlign:'center'}}>
        <h5 className="pt-4 font-weight-bold">Vandarina Risca</h5>
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
            <NavLink to="/creator/beranda"><a className="btn btn-primary text-center mx-2 text-white font-weight-bold" href="#">Beranda</a></NavLink>
            <NavLink to="/creator/post"><a className="btn btn-outline-primary text-primary text-center font-weight-bold" href="#">Post</a></NavLink>
            <NavLink to="/creator/analisa"><a className="btn btn-outline-primary mx-2 text-primary text-center font-weight-bold" href="#">Analisa</a></NavLink>
        </div>
        <div className="col py-2" style={{textAlign: 'right'}}>
          <a className="btn btn-outline-primary mx-2 text-primary text-center font-weight-bold" href="#"><i className="fa fa-user-plus"></i> Ikuti</a>
          <a className="btn btn-outline-primary text-primary text-center font-weight-bold" href="#"><i className="fa fa-share"></i> Bagikan</a>
          <a className="btn btn-outline-danger mx-2 text-center font-weight-bold" href="#"><i className="fa fa-exclamation-triangle"></i></a>
        </div>
      </div>
      <HashRouter>
      <div className="content">
      <Route path="/creator/beranda" component={CreatorBeranda}/>
      <Route path="/creator/post" component={CreatorPost}/>
      <Route path="/creator/analisa" component={CreatorAnalisa}/>
      </div>
      </HashRouter>
      </div>
      </div>
    </>
    )
  }
}
