import React from 'react';
import { withRouter } from 'react-router-dom'
import Tentangpic from './../public/assets/img/tentang.png';
import Header from './../component/header.js'
import Footer from './../component/footer.js';

class Home extends React.Component{

  render(){

    return(
    <>
    <Header/>
    <div className="row bg-white">
    <div className="col-md-7 col-lg-6 full-width d-flex fx-column center-md start-xs">
      <img src={Tentangpic} alt="Homepic" width="100%" />
    </div>
    <div className="col-md-5 col-lg-6 full-width last-md my-auto center-xs start-md top-xs pos-relative">
      <h1 className="text-primary font-weight-bold pb-2">Apa itu <span class="text-warning">Cara Cuan </span> ?</h1>
      <h5 className="text-primary pb-2"><b>Cara Cuan</b> adalah suatu portal pembelajaran investasi saham untuk mempertemukan analis dengan pembelajar saham. </h5>
      <h5 className="text-primary pb-2">Melalui platform ini, analis dapat menyampaikan materi melalui beragam bentuk konten pembelajaran (teks, gambar, atau video) kepada para pembelajar saham. Melalui konten belajarnya, analis bisa meraih pendapatan serta meningkatkan popularitasnya.</h5>
      <h5 className="text-primary pb-4">Di sisi lain, pembelajar saham menjadi lebih siap untuk berinvestasi pada saham. </h5>


    </div>


      </div>

      <Footer/>
    </>
    )
  }
}

export default withRouter(Home);
