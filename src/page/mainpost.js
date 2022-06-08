import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Poto from './../public/assets/img/mainpost-img.jpg';
import './../public/assets/css/modalsuccess.css';
import Header from './../component/header.js';
import Footer from './../component/footer.js';

import VideoContent from './../component/video-content.js';

class MainPost extends Component {
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
        this.props.history.push({
          pathname:"/login",
          state: this.props.location.pathname
        })
      })

      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/materi/id/` + this.state.materiID + '/',
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
            dataMateri: res[0],
            kelasID: res[0].kelasID,
            yID: res[0].linkvideo,
            isLoading: false,
          });
        })
        .catch((err) =>{
          this.setState({ msg: err.msg })
        })

        await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanTopik/${this.state.dataMateri.kelasID}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
          .then(res => res.json())
          .then(data => {this.setState({ dataTopik:data })});

          await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/materiselesaibaca/${this.state.memberID}/${this.state.kelasID}/`,
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
                doneDetail: res
              });
            })
            .catch((err) =>{
              this.setState({ msg: err.msg })
            })


          }

  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      yID:'',
      isLoading:true,
      dataTopik:[],
      kelasID:'',
      dataMateri:[],
      doneDetail:[],
      materiID : this.props.location.pathname.split("/")[2],
    }
  }

  setSelesai(){
    var data = {
      kelasID:this.state.kelasID,
      materiID:this.state.materiID,
      memberID:this.state.memberID,
    }
    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/setselesai`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  render() {
    return (
    <>
    <Header/>

    <div id="modalPenyelesaian" class="modal fade">
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div class="modal-header mx-auto">
            <div class="icon-box">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <h4 class="modal-title">Selamat!</h4>
          </div>
          <div class="modal-body">
            <p class="text-center">Anda sudah menyelesaikan materi ini.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-block" data-dismiss="modal">Oke</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        {/*Left Content*/}
        <div class="col-5 m-0 p-1 border">
          <div class="row m-0 pt-5 mb-5 bg-white">
            <div class="col-12">
              <h2 class="text-center">Daftar Materi</h2>
            </div>
            <div class="col-12">
              <div id="accordion">
                {this.state.dataTopik.map((data, index)=>
                  <div class="card">
                    <div class="card-header" id={"heading" + index}>
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                          {data.namaTopik}
                        </button>
                      </h5>
                    </div>

                    <div id={"collapse" + index} class="collapse show" aria-labelledby={"heading" + index} data-parent="#accordion">
                      <div class="list-group">
                        {
                          data.judul.map((judul, index)=>

                          <a onClick={() => {window.location.href="/#/post/" + data.materiID[index];window.location.reload()}} id = {data.materiID[index]} class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                {judul}
                              </div>
                              {
                                this.state.doneDetail.findIndex(done => done.materiID == data.materiID[index]) > -1 ?
                                <div class="col-2 p-0"> <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai</div>:
                                <div class="col-2 p-0"> <i class="fas fa-times fa-fw mr-2"></i>Belum Selesai</div>
                                }
                            </div>
                          </a>
                          )}
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              </div>
        </div>
        {/*End Left Content*/}

        {/*Right Content*/}
        <div class="col-7 m-0 p-1 border">
          <div class="row m-0 pt-5 bg-white">
            <div class="col-12">
              <h2 class="text-center">{this.state.dataMateri.judul}</h2>
            </div>
            <div class="col-12">
              {
                this.state.isLoading ? null :
                <VideoContent linkvideo = {this.state.yID}/>
              }
            </div>
            <div class="col-12 mx-auto px-5 text-dark"
            dangerouslySetInnerHTML={{__html: this.state.dataMateri.deskripsi}}
            />
            <div class="col-12 mx-auto my-2 px-5 text-dark text-right">
              <button type="button" onClick={() => this.setSelesai()} class="btn btn-success text-white" data-toggle="modal" data-target="#modalPenyelesaian"><i class="fas fa-check fa-fw"></i>Sudah Selesai</button>
            </div>

          </div>
        </div>
        {/*End Right Content*/}
          </div>
    </div>

        <Footer/>
        </>
                );
  }
}

export default MainPost;
