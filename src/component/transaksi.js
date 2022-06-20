import React, { Component } from "react";
import "./../public/assets/css/transaksi.css"
import $ from 'jquery';
import 'datatables.net';
import jwt_decode from 'jwt-decode';
var moment = require('moment');

class Transaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      token:'',
      dataTransaksi:[],
    };
  }
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
        memberID: decoded.memberID,
        expire:decoded.exp
      })
    })
    .catch((error)=>{
      this.props.history.push('/login')
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/transaksi/${this.state.memberID}`,
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
            dataTransaksi: data
          });
          $('#transaksi').DataTable();
      })
  }

  render() {
    return (
    <div class="container-fluid overflow-auto" style={{height:'90vh'}}>
      <h2 className="my-4 text-primary">Transaksi</h2>
      <table id="transaksi" class="display" style={{width:"100%"}}>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Kelas</th>
            <th>Nominal</th>
            <th>Metode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.dataTransaksi.map(data =>
            <tr>
            <td>{moment(data.dataInvoice.created).format("DD MMM YYYY")}</td>
            <td>{data.dataInvoice.description}</td>
            <td>{data.dataInvoice.amount}</td>
            <td>{data.dataInvoice.payment_method != undefined ? data.dataInvoice.payment_method + ' (' + data.dataInvoice.bank_code + ')' : ""}</td>
            <td class="">{data.dataInvoice.status == "SETTLED" ? "Lunas" : data.dataInvoice.status == "PENDING" ? "Menunggu Pembayaran" : ""}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    );
  }
}

export default Transaksi;
