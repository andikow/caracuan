import React from 'react';
import Poto from './../public/assets/img/creator.png';
import Logo from './../public/assets/img/logo_cover.png';

export default class Headercreator extends React.Component{

  render(){

    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="col-lg-3 d-flex">
    <img src={Logo} alt="Logo" height="50px" />
    </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <button className="btn btn-outline-primary btn-sm my-auto rounded-circle" type="search"><i className="fa fa-search fa-sm fa-fw font-weight-bold"></i></button>
          <button className="btn btn-sm my-auto"><a className="nav-item nav-link" href="#"  style={{paddingLeft:"20px", paddingRight:"20px"}}><i className="fa fa-bell-on fa-fw text-primary fa-lg"></i></a></button>
          <div className="d-flex align-content-center flex-wrap">
            <img src={Poto} alt="Poto" height="40" style={{borderRadius: "100%", display:'block', marginRight:'auto', marginLeft:'auto'}} />
          </div>

          <div className="row ml-2">
            <div className="col">
              <div className="w-100 d-none d-md-block text-primary">
                <h5>Vandarina Risca</h5>
                <p style={{marginBottom: "0"}}>Analis</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
    )
  }
}
