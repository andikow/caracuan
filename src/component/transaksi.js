import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./../public/assets/css/transaksi.css"
import $ from 'jquery';
import 'datatables.net'

class Transaksi extends Component {
  componentDidMount() {
    $(document).ready(function() {
    $('#transaksi').DataTable();
    });
  }

  render() {
    return (
      <>
      <div>
        <h2 className="mx-4 my-4 text-primary">Transaksi</h2>
        <div class="ml-4 text-primary" style={{width:"100%"}}>
        <table id="transaksi" class="display" style={{width:"100%"}}>
        <thead>
            <tr>
                <th>Tanggal</th>
                <th>Analis</th>
                <th>Nominal</th>
                <th>Metode</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01/12/2021</td>
                <td>Kapten Saham & Crypto 707</td>
                <td>Rp 10.000</td>
                <td>Transfer Bank</td>
                <td>Berhasil</td>
            </tr>
            <tr>
                <td>18/12/2021</td>
                <td>Kapten Saham & Crypto 707</td>
                <td>Rp 10.000</td>
                <td>OVO</td>
                <td>Berhasil</td>
            </tr>
            <tr>
                <td>22/12/2021</td>
                <td>Teras Saham</td>
                <td>Rp 7.000</td>
                <td>Transfer Bank</td>
                <td>Berhasil</td>
            </tr>
            <tr>
                <td>24/12/2021</td>
                <td>Saham Milenial</td>
                <td>Rp 5.000</td>
                <td>GOPAY</td>
                <td>Berhasil</td>
            </tr>
            <tr>
                <td>28/12/2021</td>
                <td>Kapten Saham & Crypto 707</td>
                <td>Rp 10.000</td>
                <td>Transfer Bank</td>
                <td>Pending</td>
            </tr>
        </tbody>
    </table>

        </div>
      </div>
      </>
    );
  }
}

export default Transaksi;
