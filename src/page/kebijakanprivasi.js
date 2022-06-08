import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from './../component/header.js'
import Footer from './../component/footer.js';

class Kebijakanprivasi extends React.Component{

  render(){

    return(
    <>
    <Header/>
    <div class="row">
      <div class="col-lg-2">

      </div>
      <div class="col-lg-8">
        <div class="justify-content-center">
          <h2 className="text-primary font-weight-bold py-4">Kebijakan Privasi</h2>
          <h6 className="text-primary">Ketentuan-ketentuan yang ada dalam halaman ini mengatur hal-hal menyangkut data-data Pengguna Situs yang diberikan oleh Pengguna Situs kepada Pengelola Situs dalam rangka pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs melalui Situs Cara Cuan. Ketentuan-ketentuan menyangkut data mengikat seluruh Pengguna Situs tanpa terkecuali untuk tunduk dan patuh atas ketentuan-ketentuan yang telah ditetapkan Pengelola Situs. <br />Ketentuan-ketentuan terkait data tersebut ialah sebagai berikut:</h6>


          <h6 className="text-primary">
            <ul>
              <li>Atas data-data yang diberikan oleh Pengguna Situs kepada Pengelola Situs sebagai pemenuhan syarat atas pemanfaatan fasilitas, fitur, jasa, dan/atau layanan yang ditawarkan oleh Pengelola Situs, maka Pengelola Situs berkewajiban untuk:
              <ul>
                <li>Menjaga kerahasiaan data-data Pengguna yang tidak dapat ditampilkan dalam Situs dan/atau diberikan kepada pihak-pihak tertentu atas penggunaan jasa atau layanan Situs selama tidak ada perjanjian tertulis terlebih dahulu kepada Pengguna;</li>
                <li>Kerahasiaan data Pengguna yang wajib dijaga oleh Pengelola Situs menjadi tidak berlaku apabila Pengelola Situs dipaksa oleh ketentuan hukum yang berlaku, perintah pengadilan, dan/atau perintah dari aparat/instansi yang berwenang, untuk membuka data-data milik Pengguna tersebut;</li>
              </ul></li>
              <li>Pengelola Situs hanya bertanggung jawab atas data yang diberikan Pengguna Situs kepada Pengelola Situs sebagaimana yang telah ditentukan pada ketentuan sebelumnya;</li>
              <li>Pengelola Situs tidak bertanggung jawab atas pemberian atau pertukaran data yang dilakukan sendiri antar Pengguna Situs;</li>
              <li>Pengelola berhak untuk mengubah ketentuan menyangkut data-data Pengguna Situs tanpa pemberitahuan terlebih dahulu dengan tanpa mengabaikan hak Pengguna Situs untuk dijaga kerahasiaan datanya sebagaimana yang telah ditentukan dalam butir (1).</li>
              <li>Penghapusan atau penutupan atas akun Pengguna Situs dapat dilakukan dengan mengirimkan permintaan penghapusan akun ke alamat email help@support.CaraCuan.id. Pengguna Situs harus memberikan informasi ke pihak Pengelola Situs bahwa Pengguna Situs adalah pemilik akun tersebut. Akun Pengguna Situs akan dinonaktifkan setelah ada konfirmasi antara Pengelola Situs dengan Pengguna Situs mengenai pemastian keabsahan identitas Anda.</li>
            </ul>
          </h6>



          <h2 className="text-primary font-weight-bold py-4">Privacy Policy</h2>
          <h6 className="text-primary">The provisions contained in this page regulate matters regarding user data in the context of utilizing the facilities, features, and/or services offered by us (Cara Cuan) through our website (Cara Cuan). The provisions bind all users without exception. <br />The provisions are as follows:</h6>


          <h6 className="text-primary mb-4">
            <ul>
              <li>For all data provided by users as the requirements to use the facilities, features, and/or services offered through the website, Cara Cuan is obliged to:
              <ul>
                <li>Maintain the confidentiality of user data that cannot be displayed on the website and/or provided to certain parties in order to use our services as long as there is no prior written agreement with the user;</li>
                <li>Confidentiality of user data becomes invalid if Cara Cuan is forced by law, court orders, and/or orders from authorized officials/agencies, to disclose user data;</li>
              </ul></li>
              <li>Cara Cuan is only responsible for the data provided by user as mentioned in the previous provisions;</li>
              <li>Cara Cuan is not responsible for the provision or exchange of data carried out between users;</li>
              <li>Cara Cuan has the right to change the policy regarding user data without prior notice without neglecting the user's right to keep his data confidential as specified in point (1).</li>
              <li>Deactivation of user's account and the deletion of user’s data can be done by sending a request for account deactivation to our email help@support.CaraCuan.id. Users then must provide information attesting that the user is the owner of the account. The accounts will be deactivated after the validity of the user’s identity has been confirmed.</li>
            </ul>
          </h6>



        </div>
      </div>
      <div class="col-lg-2">

      </div>
    </div>
    <Footer/>
    </>
    )
  }
}

export default withRouter(Kebijakanprivasi);
