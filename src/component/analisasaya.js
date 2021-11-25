import React, { Component } from "react";
import {Helmet} from "react-helmet";
import $ from 'jquery';

class Saldo extends Component {
  componentDidMount() {
    $(document).on('click', '.number-spinner button', function () {
    	var btn = $(this),
    		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    		newVal = 0;

    	if (btn.attr('data-dir') == 'up') {
    		newVal = parseInt(oldValue) + 1;
    	} else {
    		if (oldValue > 1) {
    			newVal = parseInt(oldValue) - 1;
    		} else {
    			newVal = 1;
    		}
    	}
    	btn.closest('.number-spinner').find('input').val(newVal);
    });
  }
  render() {
    return (
      <div>
        <h2 class="m-3">Analisa Saya</h2>
          <div class=" m-3 row">
            <label for="kode-saham" class="col-6 col-form-label">Target saya untuk saham :
            </label>
            <div class="col-4">
              <input class="form-control" id="kode-saham" type="text" placeholder="Kode Saham" aria-label="input-kode-saham" />
            </div>
          </div>
          <div class="m-3 row">
            <label for="kode-saham" class="col-2 col-form-label">adalah
            </label>
            <div class="input-group number-spinner col-6">
              <span class="input-group-btn">
                <button class="btn btn-default" data-dir="dwn"><span class="fa fa-minus"></span></button>
              </span>
              <input type="text" class="form-control text-center" />
              <span class="input-group-btn">
                <button class="btn btn-default" data-dir="up"><span class="fa fa-plus"></span></button>
              </span>
            </div>
          </div>
          <textarea class="form-control m-3" aria-label="With textarea"></textarea>
          <button type="button" class="m-3 btn btn-primary">Publish</button>
      </div>
    );
  }
}

export default Saldo;
