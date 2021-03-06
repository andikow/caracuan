import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/creatorpost1.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";

class CreatorPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      id : this.props.location.pathname.split("/")[2],
      dataKelas:[],
    };
  }

async componentDidMount() {
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
      console.log(this.state.data);
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/` + this.state.data.memberID + '/',
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
        dataKelas: res
      });
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

  }

  render() {
    return (
    <div className="row">

      {
        this.state.dataKelas.map(data=>
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
          <div class="card-akademi card-inverse card-info">
            <img class="card-img-top" src={data.thumbnail} />
            <div class="card-block">
            <NavLink to={`/creator/${this.state.id}/post/${data.kelasID}`}>
              <div class="card-text dotswrap font-weight-bold" style={{height:"50px"}}>
                {data.judul}
              </div>
              </NavLink>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col">
                  <i className="far fa-heart text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 76</span></i>
                </div>
                <div class="col">
                  <i className="far fa-comments-alt text-danger" style={{fontSize:"13px"}}> <span className="text-primary"> 12</span></i>
                </div>
                <div class="col">
                  <NavLink to={`/creator/${this.state.id}/post/${data.kelasID}`}>
                    <button type="button" class="btn btn-info btn-sm text-primary"><i className="far fa-shopping-cart" style={{color:"white"}}></i></button>
                  </NavLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
    );
  }
}

export default CreatorPost;
