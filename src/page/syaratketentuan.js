import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from './../component/header.js'
import Footer from './../component/footer.js';

class Syaratketentuan extends React.Component{

  render(){

    return(
    <>
    <Header/>
    <div class="row">
      <div class="col-lg-2">

      </div>
      <div class="col-lg-8">
        <div class="justify-content-center">
          <h2 className="text-primary font-weight-bold py-4">Syarat dan Ketentuan Penggunaan</h2>
          <h6 className="text-primary">Selamat datang di Cara Cuan. Halaman ini menjelaskan tentang syarat dan ketentuan penggunaan situs web dan platform kami, baik sebagai pengunjung maupun pengguna. Harap baca dan cermati syarat dan ketentuan penggunaan. Dengan mengunjungi dan/atau menggunakan Cara Cuan, maka Anda dinyatakan telah memahami dan menyepakati semua syarat dan ketentuan penggunaan di bawah ini. Apabila Anda tidak menyetujui salah satu, sebagian atau seluruh isi dari syarat dan ketentuan penggunaan ini, maka Anda tidak diperkenankan untuk menggunakan layanan di Cara Cuan.</h6>

          <h4 className="text-primary font-weight-bold py-4">Deskripsi Layanan</h4>
          <h6 className="text-primary">Cara Cuan adalah suatu portal pembelajaran investasi saham untuk mempertemukan analis dengan pembelajar saham. Melalui platform ini, analis dapat menyampaikan materi melalui beragam bentuk konten pembelajaran (teks, gambar, atau video) kepada para pembelajar saham. Melalui konten belajarnya, analis bisa meraih pendapatan serta meningkatkan popularitasnya. Di sisi lain, pembelajar saham menjadi lebih siap untuk berinvestasi pada saham.</h6>

          <h4 className="text-primary font-weight-bold py-4">Tentang Analis</h4>
          <h6 className="text-primary">Analis didefinisikan sebagai pengguna yang telah terdaftar dan memiliki halaman di Cara Cuan atau menggunakan platform Cara Cuan dengan cara apapun untuk menerima dukungan, menampilkan hasil analisis, dan fitur lainnya pada Halaman Analis. Sebagai Analis, Anda bertanggung jawab penuh atas semua tulisan, gambar, video, tautan, dan konten lain yang Anda buat, unggah, posting, atau tampilkan di Cara Cuan.</h6>

          <h4 className="text-primary font-weight-bold py-4">Tentang Member</h4>
          <h6 className="text-primary">Member didefinisikan sebagai pembelajar yang sudah terdaftar di Cara Cuan dan memiliki akun. Member menggunakan situs Cara Cuan untuk mempelajari materi serta hasil analisis dari Analis.</h6>

          <h4 className="text-primary font-weight-bold py-4">Perlindungan Hak Kekayaan Intelektual</h4>
          <h6 className="text-primary">
            <ul>
              <li>Kami menjunjung tinggi perlindungan hak kekayaan intelektual setiap Analis. Maka dari itu, Analis harus menjamin bahwa semua materi atau hasil analisis yang diunggah di situs Cara Cuan dan/atau yang disokong oleh pendanaan melalui situs Cara Cuan, sepenuhnya adalah hak kekayaan intelektual milik Analis, dan/atau telah mendapatkan ijin jelas dan tertulis dari pemilik materi.</li>
              <li>Kami berhak menampilkan, mendistribusikan dan menyebarkan karya/konten dari Analis untuk keperluan promosi Analis, promosi situs Cara Cuan, dan penjualan dan/atau penyampaian materi  kepada Member.</li>
              <li>Penjualan dan/atau penyampaian materi atau hasil analisis milik Analis melalui situs Cara Cuan dilakukan atas persetujuan Analis melalui tindakan mengunggah materi atau hasil analisis ke situs Cara Cuan dengan tingkat dukungan yang sudah ditentukan.</li>
              <li>Pemberhentian penjualan dan/atau penyampaian materi milik Analis kepada Member dapat dilakukan dengan menghapus materi dari halaman/page Analis.</li>
              <li>Pemanfaatan hak kekayaan intelektual milik Analis oleh Kami dengan pihak ketiga harus atas persetujuan jelas dan tertulis dari Analis.</li>
            </ul>
          </h6>

          <h4 className="text-primary font-weight-bold py-4">Larangan</h4>
          <h6 className="text-primary">
            <ul>
              <li>Anda tidak diperbolehkan menggunakan materi situs ini untuk hal-hal yang bersifat komersil selain yang diperbolehkan oleh Cara Cuan.</li>
              <li>Anda tidak diperbolehkan untuk membajak dan menyalahgunakan hak cipta yang dimiliki Analis lain atas materi atau hasil analisisnya kecuali jika diizinkan secara tertulis oleh Analis tersebut.</li>
              <li>Anda tidak diperbolehkan untuk melakukan aktivitas tidak wajar yang dapat mengancam keamanan platform, seperti melakukan penetrasi data berbahaya, mencari celah keamanan, dan aktivitas kejahatan dunia maya lainnya.</li>
              <li>Anda tidak diperbolehkan untuk mengunggah ke situs Cara Cuan ataupun mendanai materi atau hasil analisis melalui situs Cara Cuan, yang bersifat sebagai berikut:
              <ul>
                <li>Pornografi, Rasisme, Kriminal, ofensif terhadap SARA, konten, karya atau jasa yang sifatnya provokatif dan dapat memicu konflik antar golongan.</li>
                <li>Materi lain yang melanggar hukum.</li>
                <li>Penipuan dan Penggelapan.</li>
                <li>Materi yang merupakan karya atau hak cipta orang lain.</li>
              </ul></li>
              <li>Bila menemukan materi ataupun hasil analisis yang melanggar ketentuan tersebut, Cara Cuan berhak untuk menghapusnya tanpa pemberitahuan sebelumnya untuk kepentingan Cara Cuan. Selain itu, Cara Cuan berhak menolak untuk menyediakan layanan di kemudian hari kepada setiap orang yang melanggar syarat dan ketentuan ini.</li>
              <li>Anda tidak dapat melakukan klaim apapun kepada Cara Cuan atas pelanggaran yang Anda lakukan terhadap syarat dan ketentuan penggunaan situs Cara Cuan.</li>
              <li>Anda tidak diperkenankan untuk melakukan transaksi yang bersifat ilegal, termasuk namun tidak terbatas pada penipuan, carding, tindakan pencucian uang dan hal lainnya yang melanggar hukum yang berlaku di Indonesia.</li>
              <li>Berdasarkan larangan yang telah ditetapkan, kami berhak melakukan penangguhan/pembekuan akun, pemblokiran nomor rekening/e-wallet, pembekuan saldo dan pembatasan fitur bagi pengguna apabila terjadi pelanggaran dari larangan-larangan tersebut. Kami berhak melakukan tindakan penyerahan data kepada pihak berwajib dan/atau stakeholder terkait jika diperlukan.</li>

            </ul>
          </h6>

          <h4 className="text-primary font-weight-bold py-4">Pembayaran</h4>
          <h6 className="text-primary">Cara Cuan bukanlah penyedia jasa pembayaran, untuk mendukung Analis yang menggunakan situs Cara Cuan, Kami menggunakan jasa pihak ketiga sebagai penyedia layanan pembayaran. <br />Dengan menggunakan situs Cara Cuan Anda setuju untuk terikat oleh ketentuan penyedia layanan pembayaran pihak ketiga yang terkait dengan platform ini dan mereka akan bertanggung jawab untuk semua hal yang berkaitan dengan pembayaran dan penggunaan data Anda. <br/>Anda harus berkonsultasi dengan penyedia pembayaran secara langsung dan sebelum menggunakan situs Cara Cuan jika Anda memiliki pertanyaan atau masalah tentang informasi yang ditampilkan saat melakukan pembayaran. <br />Dalam perselisihan soal transaksi, catatan transaksi berhasil dan tidak berhasil di situs Cara Cuan dianggap final.</h6>

          <h4 className="text-primary font-weight-bold py-4">Biaya Layanan</h4>
          <h6 className="text-primary mb-4">Analis dikenakan biaya layanan oleh Cara Cuan sebesar 5% dari total dukungan/donasi yang didapat atau dihasilkan. Adapun biaya layanan gerbang pembayaran dari pihak ketiga ditanggung oleh Analis.</h6>

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

export default withRouter(Syaratketentuan);
