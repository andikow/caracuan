import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Poto from './../public/assets/img/creator.png';
import Poto1 from './../public/assets/img/akademi1.jpg';
import Poto2 from './../public/assets/img/akademi2.jpg';
import Poto3 from './../public/assets/img/akademi3.jpg';
import Poto4 from './../public/assets/img/akademi4.jpg';
import Poto5 from './../public/assets/img/akademi5.jpg';
import Poto6 from './../public/assets/img/akademi6.jpg';
import Potobg from './../public/assets/img/bgcreator.jpg';
import "./../public/assets/css/creatorpost.css";
import DetailPost from './detail-post.js';

class Mengikuti extends Component {
  render() {
    return (
    <>
      <div>
        <h2 className="mx-4 my-4 text-primary">Mengikuti</h2>
        <h4  className="mx-4 my-4 text-primary">Menampilkan</h4>
        <div class="dropdown">

        	<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        		30 <i className="fa fa-chevron-down"></i>
        	</button>
        	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        		<a class="dropdown-item">30</a>
        		<a class="dropdown-item">60</a>
        		<a class="dropdown-item">100</a>
        	</div>
        </div>
      </div>
    </>
    )
  }
}

export default Mengikuti;
