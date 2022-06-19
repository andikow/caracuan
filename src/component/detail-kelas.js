import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import Iframe from 'react-iframe';

class DetailKelas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTopik:[],
      kelasID : this.props.location.pathname.split("/")[3],
      kelas:'',
      memberID:'',
      postID:16,
      doneDetail:[],
      data:[],
      invoice_url:'',
      isPaid:false,
    };
  }
  async componentDidMount() {
    console.log(this.props.location.pathname.split("/")[3]);
    this.setState({
      isPaid: false
    });

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

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kreator/` + this.state.memberID + '/',
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

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/kelas/id/` + this.state.kelasID + '/',
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
          kelas: res[0]
        });
      })
      .catch((err) =>{
        this.setState({ msg: err.msg })
      })

    fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/tampilkanTopik/${this.state.kelasID}`,
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

    var data = {
        kelasID:this.state.kelasID,
        memberID:this.state.memberID,
      }
    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/cekinvoice`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res=>{
        if(res.status === "PAID" || res.status === "SETTLED"){
          this.setState({
            isPaid: true
          });
        }
      })
      .catch((err) =>{})

    console.log(this.state.dataTopik);
    console.log(this.state.kelas);
    console.log(this.state.doneDetail);
    }

  async checkout(){
      var data = {
        kelasID:this.state.kelasID,
        memberID:this.state.memberID,
        email:this.state.data.Email,
        name:this.state.data.Name,
        phone:this.state.data.Phone,
        judul:this.state.kelas.judul,
        harga:this.state.kelas.harga,
        currentpath:`http://localhost:3000/#${this.props.location.pathname.slice(0, this.props.location.pathname.lastIndexOf('/'))}`,
      }
      await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/cetakinvoice`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res=>{
        this.setState({
          invoice_url: res.invoice_url,
        });
      })


    }

  render() {
    return (
    <>

    <div class="row container mx-2">
      <div class="col-12 mb-2">
        <h2>{this.state.kelas.judul}</h2>
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

                        <a href={"/#/post/" + data.materiID[index]} id = {data.materiID[index]} class={this.state.isPaid ? "list-group-item list-group-item-action border" : "list-group-item list-group-item-action border disabled"}>
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
        </>
    );
  }
}

export default withRouter(DetailKelas);
