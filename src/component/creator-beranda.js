import React, { Component } from "react";

class CreatorBeranda extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8 py-2">
          <h5 className="font-weight-bold text-primary">Aktivitas</h5>
          <form>
            <div className="bg-light py-3 px-4">
              <input type="text" className="form-control font-weight-bold" placeholder="Nama (opsional)" style={{width:'350px'}} />
              <input type="text" className="form-control font-weight-bold my-2" placeholder="Pesan dukungan"  style={{width:'350px'}} />
              <a className="btn btn-primary text-center mx-2 text-white font-weight-bold" href="#">Kirim Pesan</a>
            </div>
          </form>

        </div>
        <div className="col-4 py-2">
          <h5 className="font-weight-bold text-primary">Tentang</h5>
          <p className="text-primary">Swing Trader, mencari saham dengan fundamental yang baik!</p>
          <div className="row">
            <h5 className="font-weight-bold text-primary">Sosial & Tautan</h5>
            <a className="btn btn-outline-success btn-block my-2 text-success text-center font-weight-bold" href="#"><i className="fab fa-instagram"></i> Instagram</a> <br />
            <a className="btn btn-outline-primary text-primary btn-block text-center font-weight-bold" href="#"><i className="fab fa-twitter"></i> Twitter</a> <br />
            <a className="btn btn-outline-danger text-danger my-2 btn-block text-center font-weight-bold" href="#"><i className="fab fa-youtube"></i> Youtube</a>
          </div>

        </div>
      </div>
    );
  }
}

export default CreatorBeranda;
