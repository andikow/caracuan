import React, { Component } from "react";
import CONFIG from './../public/scripts/globals/config.js';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

class Saham extends Component {
  componentDidMount(){
    if (typeof(stockdio_events) == "undefined") {
     var stockdio_events = true;
     var stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
     var stockdio_eventer = window[stockdio_eventMethod];
     var stockdio_messageEvent = stockdio_eventMethod == "attachEvent" ? "onmessage" : "message";
     stockdio_eventer(stockdio_messageEvent, function (e) {
        if (typeof(e.data) != "undefined" && typeof(e.data.method) != "undefined") {
           this.eval(e.data.method);
        }
     },false);
  }

  }
  render() {
    return (
      <>
      <Header/>
      <div>
        <h2 class="text-primary ml-4 my-4">Analisis Saham Terkini</h2>
          <div class="row mb-4">
            <iframe id='st_a0cedc6f39ad427eb75d0b37c9b2b6fc' frameBorder='0' scrolling='no' width='100%' src={'https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key='+ CONFIG.KEY + '&stockExchange=IDX&symbols=TLKM;HMSP;UNVR;BBCA;ASII;GGRM;SIDO;JAGO;ANTM;ADRO;ARTO;ICBP;ITMG;BBRI;BBNI&palette=Financial-Light&onload=st_a0cedc6f39ad427eb75d0b37c9b2b6fc'}></iframe>
          </div>
          <div class="row my-2 align-items-center justify-content-center">
            <iframe id='st_c3b9401a351e48cf99883fe729685fa3' frameBorder='0' scrolling='no' width='1000' src={'https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=' + CONFIG.KEY + '&stockExchange=IDX&equities=TLKM;HMSP;UNVR;BBCA;ASII;ICBP;BBRI;BMRI;BBNI;ITMG;PTBA;GGRM;PGAS;ADRO;SIDO;ANTM;GGRM&includeIndices=false&includeCommodities=false&includeCurrencies=false&dividends=true&splits=true&showHeader=true&palette=Financial-Light&title=Market%20Overview&width=1000px&onload=st_c3b9401a351e48cf99883fe729685fa3'}></iframe>
          </div>


        </div>
        <Footer/>
        </>
    );
  }
}

export default Saham;
