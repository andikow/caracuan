import React, { Component } from "react";
import CONFIG from './../public/scripts/globals/config.js';

class Saham extends Component {
  render() {
    return (
      <div>
        <h2>Saham</h2>
        <iframe frameBorder='0' scrolling='no' width='800' height='420' src={'https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key='+ CONFIG.KEY + '&symbol=AAPL&displayPrices=Candlestick&dividends=true&splits=true&culture=Indonesian&palette=Whitespace'}></iframe>
        </div>
    );
  }
}

export default Saham;
