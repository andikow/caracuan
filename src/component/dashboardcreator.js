import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Chart from 'chart.js/auto';
var moment = require('moment');

class Dashboardcreator extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      memberID:'',
      saldoSekarang:0,
      dataTraktir:[],
      TotalPencairanBulanIni:0,
      TotalTraktiranBulanIni:0,
    };
  }
  async componentDidMount(){
    this._isMounted = true;
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
      this.setState({
        dataTraktir:res,
      });
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })

    function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }

    function Last30Days () {
    var result = [];
    for (var i=0; i<30; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }

    return(result);
 }


     let last30days = Last30Days();
     let cumValue = [];
     let labels = Last30Days();
     cumValue.push(0);
     for (var i = 0; i < 30; i++) {
       for (var j = 0; j < this.state.dataTraktir.length; j++) {
         if(moment(this.state.dataTraktir[j].paidAt).format("YYYY-MM-DD").indexOf(last30days[i]) > -1){
           if(last30days.indexOf(moment(this.state.dataTraktir[j].paidAt).format("YYYY-MM-DD")) == i){
             cumValue.pop();
             cumValue.push(this.state.dataTraktir[j].dataInvoice.amount);
             console.log(i + ' ' + j);
             continue;
           }
         }
         else{
         }
       }
       cumValue.push(0);
     }
     cumValue.pop();
     const findCumulativeSum = arr => {
       const creds = arr.reduce((acc, val) => {
          let { sum, res } = acc;
          sum += val;
          res.push(sum);
          return { sum, res };
       }, {
          sum: 0,
          res: []
       });
       return creds.res;
    };

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Akumulasi dukungan dalam 30 hari terakhir',
                data: findCumulativeSum(cumValue),
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',

                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',

                ],
                borderWidth: 1
            },
          ]
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
      console.log(data);
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
        if (this._isMounted) {
          this.setState({
            TotalPencairanBulanIni: res[0].TotalPencairanBulanIni
          });
          console.log(this.state.TotalPencairanBulanIni);
        }
    })
    .catch((err) =>{
      if (this._isMounted) {
      this.setState({ msg: err.msg })
    }
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
      let jumlahTraktiran = 0;
      for(let i=0; i<res.length; i++){
        jumlahTraktiran += res[i].dataInvoice.amount;
      }
      if (this._isMounted) {
      this.setState({
        TotalTraktiranBulanIni:jumlahTraktiran
      });
    }
    })
    .catch((err) =>{
      this.setState({ msg: err.msg })
    })
    }

    componentWillUnmount() {
    this._isMounted = false;
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
                  Rp {this.numberWithCommas(this.state.saldoSekarang || 0)}
                </div>
              </div></div>
              <div class="m-1 p-2 col-4 flex-fill bd-highlight navbar"><i class="fas fa-2x fa-donate"></i>
                <div class="d-flex flex-column">
                  <div class="">
                    Dukungan Bulan Ini
                  </div>
                  <div class="">
                    Rp {this.numberWithCommas(this.state.TotalTraktiranBulanIni || 0)}
                  </div>
                </div></div>
                <div class="m-1 p-2 col-4 flex-fill bd-highlight navbar"><i class="fas fa-2x fa-money-bill-wave"></i>
                  <div class="d-flex flex-column">
                    <div class="">
                      Jumlah Pencairan Bulan Ini
                    </div>
                    <div class="">
                      Rp {this.numberWithCommas(this.state.TotalPencairanBulanIni || 0)}
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
