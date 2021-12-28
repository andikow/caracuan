import React, { Component } from "react";
import CONFIG from './../public/scripts/globals/config.js';

import Header from './../component/header.js';
import Footer from './../component/footer.js';

class Berita extends Component {
  componentDidMount(){
    if (typeof(stockdio_events) == "undefined") {
     let stockdio_events = true;
     var stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
     var stockdio_eventer = window[stockdio_eventMethod];
     var stockdio_messageEvent = stockdio_eventMethod == "attachEvent" ? "onmessage" : "message";
     stockdio_eventer(stockdio_messageEvent, function (e) {
        if (typeof(e.data) != "undefined" && typeof(e.data.method) != "undefined") {
           eval(e.data.method);
        }
     },false);
  }
  }
  render() {
    return (
      <>
      <Header/>
<iframe id='st_dba6e933ac124354a9b96681b5f2e189' frameBorder='0' scrolling='no' width='100%' height='100%' src={'https://api.stockdio.com/visualization/financial/charts/v1/EconomicNews?app-key='+ CONFIG.KEY + '&language=Indonesian&country=Indonesia&imageWidth=180&palette=Financial-Light&title=Berita&googleFont=true&onload=st_dba6e933ac124354a9b96681b5f2e189'}></iframe>
  <Footer/>
</>
    );
  }
}

export default Berita;
