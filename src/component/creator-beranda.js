import React, { Component } from "react";

class CreatorBeranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      id : this.props.location.pathname.split("/")[2],
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
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-6 py-2">
          <h5 className="font-weight-bold text-primary">Aktivitas</h5>
          <form>
            <div className="bg-light py-3 px-4">
              <input type="text" className="form-control font-weight-bold" placeholder="Nama (opsional)" style={{width:'350px'}} />
              <input type="text" className="form-control font-weight-bold my-2" placeholder="Pesan dukungan"  style={{width:'350px'}} />
              <a className="btn btn-primary text-center mx-2 text-white font-weight-bold" href="#">Kirim Pesan</a>
            </div>
          </form>

        </div>
        <div className="col-6 py-2">
          <h5 className="font-weight-bold text-primary">Tentang</h5>
          <p className="text-primary">{this.state.data.shortbio}</p>

            <h5 className="font-weight-bold text-primary">Sosial & Tautan</h5>
            <div class="row">
              <div class="col">
                <a className="btn btn-outline-success text-success btn-block text-center font-weight-bold" href="#"><i className="fab fa-instagram"></i> Instagram</a>
              </div>
              <div class="col">
                <a className="btn btn-outline-primary text-primary btn-block text-center font-weight-bold" href="#"><i className="fab fa-twitter"></i> Twitter</a>
              </div>
              <div class="col">
                <a className="btn btn-outline-danger text-danger btn-block text-center font-weight-bold" href="#"><i className="fab fa-youtube"></i> Youtube</a>
              </div>

            </div>


        </div>
      </div>
    );
  }
}

export default CreatorBeranda;
