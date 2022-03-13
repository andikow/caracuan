import React, { Component } from "react";
import Poto from './../public/assets/img/mainpost-img.jpg';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

import VideoContent from './../component/video-content.js';

class MainPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yID:'',
      isLoading:true,
      dataBagian:[],
      dataMateri:[],
      postID : this.props.location.pathname.split("/")[2],
    }
  }
  async componentDidMount() {

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/post/id/` + this.state.postID + '/',
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
          yID: res[0].linkvideo,
          isLoading: false,
        });
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanBagian/${this.state.dataMateri.topikID}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
      .then(res => res.json())
      .then(data => {this.setState({ dataBagian:data })});

  }
  render() {
    return (
    <>
    <Header/>

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
                {this.state.dataBagian.map((data, index)=>
                  <div class="card">
                    <div class="card-header" id={"heading" + index}>
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                          {data.namaBagian}
                        </button>
                      </h5>
                    </div>

                    <div id={"collapse" + index} class="collapse show" aria-labelledby={"heading" + index} data-parent="#accordion">
                      <div class="list-group">
                        {
                          data.judul.map((judul, index)=>

                          <a href={"/#/post/" + data.postID[index]} id = {data.postID[index]} class="list-group-item list-group-item-action border">
                            <div class="row justify-content-between">
                              <div class="col">
                                {judul}
                              </div>
                              <div class="col-2 p-0">
                                <i class="fas fa-check fa-fw mr-2"></i>Sudah Selesai
                              </div>
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
