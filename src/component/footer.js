import React from 'react';
import "./../public/assets/css/footer.css";

export default class Footer extends React.Component{

  render(){

    return(
    <>
		<div class="footer pt-4 px-4 justify-content-center">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h4 class="text-white font-weight-bold">PT. CARA CUAN</h4>
          <h6 class="text-white">Jl. Danau Jempang No. 2D, <br /> Sei Agul, Medan Barat</h6>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Cara Cuan</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#/cari"><i class="fa fa-angle-double-right"></i> Cari Analis</a></li>
						<li><a href="#/saham"><i class="fa fa-angle-double-right"></i> Saham</a></li>
						<li><a href="#/berita"><i class="fa fa-angle-double-right"></i> Berita Terkini</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Informasi</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="#"><i class="fa fa-angle-double-right"></i> Tentang</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i> Syarat dan Ketentuan</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i> Bantuan</a></li>
						<li><a href="#"><i class="fa fa-angle-double-right"></i> Kebijakan Privasi</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-google-plus"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">© All right Reversed.<a class="text-green ml-2" href="#" target="_blank">Cara Cuan</a></p>
				</div>
				<hr/>
			</div>
		</div>
    </>
    )
  }
}
