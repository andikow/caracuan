import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Chart from 'chart.js/auto';

class Dashboardcreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      saldoSekarang:0,
      TotalPencairanBulanIni:0,
      TotalTraktiranBulanIni:0,
    };
  }
  async componentDidMount(){
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
    const ctx = document.getElementById('Chart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1-Jan', '2-Jan', '3-Jan', '4-Jan', '5-Jan', '6-Jan'],
            datasets: [{
                label: 'Jumlah dukungan dalam 30 hari terakhir',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var data = {
      memberID : this.state.memberID,
    }

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/ceksaldo`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
        this.setState({
        saldoSekarang: data[0].balance,
      })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/payout/by/month/${this.state.memberID}`,
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
        TotalPencairanBulanIni: res[0].TotalPencairanBulanIni
      });
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

    await fetch(`http://localhost:${process.env.REACT_APP_REQ_PORT}/user/traktiran/by/month/${this.state.memberID}`,
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
      let jumlahTarik = 0;
      for(let i=0; i<res.length; i++){
        jumlahTarik += res[0].dataInvoice.amount;
      }
      console.log(jumlahTarik);
      this.setState({
        TotalTraktiranBulanIni:jumlahTarik
      });
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
  }

  render() {
    return (
      <div class="container overflow-auto" style={{height:'90vh'}}>
        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
              </button>
              <h3>Dashboard</h3>
            </div>
          </nav>
          <div class="d-flex flex-row justify-content-center bd-highlight mb-3">
            <div class="m-1 p-2 col-4 flex-fill bd-highlight navbar navbar-light"><i class="fas fa-2x fa-wallet"></i>
              <div class="d-flex flex-column">
                <div class="">
                  Jumlah Saldo Saat Ini
                </div>
                <div class="">
                  Rp {this.numberWithCommas(this.state.saldoSekarang)}
                </div>
              </div></div>
              <div class="m-1 p-2 col-4 flex-fill bd-highlight navbar"><i class="fas fa-2x fa-donate"></i>
                <div class="d-flex flex-column">
                  <div class="">
                    Dukungan Bulan Ini
                  </div>
                  <div class="">
                    Rp {this.numberWithCommas(this.state.TotalTraktiranBulanIni)}
                  </div>
                </div></div>
                <div class="m-1 p-2 col-4 flex-fill bd-highlight navbar"><i class="fas fa-2x fa-money-bill-wave"></i>
                  <div class="d-flex flex-column">
                    <div class="">
                      Jumlah Pencairan Bulan Ini
                    </div>
                    <div class="">
                      Rp {this.numberWithCommas(this.state.TotalPencairanBulanIni)}
                    </div>
                  </div></div>
                </div>
                <canvas id="Chart" width="800vw" class="m-auto"></canvas>

                <div class="line"></div>
              </div>
      </div>
    );
  }
}

export default Dashboardcreator;
