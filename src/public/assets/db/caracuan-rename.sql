-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2022 at 09:58 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `caracuan`
--

-- --------------------------------------------------------

--
-- Table structure for table `analysisdetail`
--

CREATE TABLE `analysisdetail` (
  `analysisID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(250) NOT NULL,
  `stockCode` varchar(4) NOT NULL,
  `targetPrice` int(11) NOT NULL,
  `stopPrice` int(11) NOT NULL,
  `isHit` varchar(4) NOT NULL DEFAULT 'Hold',
  `agreed` int(11) NOT NULL,
  `disagreed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `analysisdetail`
--

INSERT INTO `analysisdetail` (`analysisID`, `memberID`, `date`, `description`, `stockCode`, `targetPrice`, `stopPrice`, `isHit`, `agreed`, `disagreed`) VALUES
(1, 41, '2022-04-05', 'Secara fundamental masih cukup menarik', 'BBCA', 8000, 7500, 'Hold', 352, 252),
(2, 41, '2022-04-06', 'Secara teknikal ada potensi rebound', 'EKAD', 1800, 1200, 'Hold', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `balancedetail`
--

CREATE TABLE `balancedetail` (
  `memberID` int(11) NOT NULL,
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `balancedetail`
--

INSERT INTO `balancedetail` (`memberID`, `balance`) VALUES
(41, 50500);

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `memberID` int(11) NOT NULL,
  `followingID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `following`
--

INSERT INTO `following` (`memberID`, `followingID`) VALUES
(1, 1),
(1, 33),
(52, 41),
(52, 47),
(52, 49),
(52, 51);

-- --------------------------------------------------------

--
-- Table structure for table `kelasdetail`
--

CREATE TABLE `kelasdetail` (
  `kelasID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `thumbnail` varchar(100) NOT NULL,
  `jenisKelas` varchar(8) NOT NULL,
  `harga` int(11) NOT NULL,
  `createdAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kelasdetail`
--

INSERT INTO `kelasdetail` (`kelasID`, `memberID`, `judul`, `thumbnail`, `jenisKelas`, `harga`, `createdAt`) VALUES
(16, 41, 'Cara Trading di Saham Sideways', 'akademi2.jpg', 'Berbayar', 30500, '2022-02-02'),
(18, 41, 'Belajar Saham untuk Pemula', 'Belajar Saham untuk Pemula-1646840363536.jpg', 'Gratis', 0, '2022-03-09'),
(19, 41, 'Rumus Average Down Saham', 'Average Down-1646842892641.jpg', 'Berbayar', 20000, '2022-03-09'),
(21, 47, 'Money Management dalam Trading Saham', '3274120626-1647176297676.jpg', 'Berbayar', 25000, '2022-03-13'),
(22, 47, 'Membaca Grafik Saham Batang', 'grafik candlestick saham-1647177073518.jpg', 'Berbayar', 25000, '2022-03-13'),
(23, 48, 'Saham Bluechip', 'Ciri_Saham_Blue_Chip-1647272101263.jpg', 'Gratis', 0, '2022-03-14'),
(24, 48, 'Saham LQ45', 'Saham-1647272283925.jpg', 'Berbayar', 10000, '2022-03-14'),
(25, 49, 'Belajar TrendLine Harga Saham', 'Apa-Itu-Sideways-1647443772712.png', 'Berbayar', 20000, '2022-03-16'),
(26, 49, 'Dividen Saham', 'definisi-dividen-1647444021447.jpeg', 'Gratis', 0, '2022-03-16');

-- --------------------------------------------------------

--
-- Table structure for table `materidetail`
--

CREATE TABLE `materidetail` (
  `materiID` int(11) NOT NULL,
  `judul` text NOT NULL,
  `deskripsi` longtext NOT NULL,
  `linkvideo` text NOT NULL,
  `memberID` int(11) NOT NULL,
  `kelasID` int(11) NOT NULL,
  `topikID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `materidetail`
--

INSERT INTO `materidetail` (`materiID`, `judul`, `deskripsi`, `linkvideo`, `memberID`, `kelasID`, `topikID`) VALUES
(11, 'Belajar Saham untuk Pemula', '<p>Menurut Bursa Efek Indonesia (BEI), saham adalah tanda penyertaan modal dalam suatu perusahaan atau perseroan terbatas. Orang yang menanamkan modal di sebuah perusahaan disebut pemegang saham dan memiliki klaim atas pendapatan perusahaan, aset perusahaan, dan berhak mengikuti Rapat Umum Pemegang Saham (RUPS).&nbsp;</p>\n<p>Dari hal di atas, saham merupakan bukti kepemilikan seseorang atas sebuah perusahaan/badan usaha. Kalau punya saham, kamu menjadi<br>bagian dari pemilik sebuah perusahaan. Itu sebabnya saham tergolong suratberharga karena menjadi bukti sah kepemilikan seseorang atas sebuah perusahaan. Semakin besar saham yang dimiliki, maka semakin besar kekuasaan seseorang di perusahaan itu.&nbsp;</p>\n<p>Untuk pemula yang masih belajar saham tentu harus mengetahui berbagai jenis saham. Saham memiliki berbagai jenis dilihat dari segi kemampuan dalam hak tagih atau klaim, cara peralihannya, dan kinerja perdagangan.&nbsp;</p>\n<p>Jenis Saham dari Segi Kemampuan dalam Hak Tagih atau Klaim&nbsp;</p>\n<p>1. Saham biasa&nbsp;</p>\n<p>Saham biasa merupakan surat berharga yang berguna sebagai bukti kepemilikan suatu perusahaan. Pemilik saham akan menerima sebagian<br>pendapatan (dividen) dari perusahaan dan bersedia menanggung risiko kerugian yang diderita perusahaan. Pemilik modal yang memiliki saham perusahaan berhak ambil bagian terhadap pengelolaan perusahaan. Besarnya porsi hak pengelolaan tergantung dari jumlah saham yang dimiliki. Semakin besar saham yang dimiliki semak besar wewenang terhadap pengelolaan perusahaan itu. Saat perusahaan untung, pihak yang memiliki persentase saham besar akan menerima porsi keuntungan yang besar. Sebaliknya, mereka harus bersiap menderita kerugian bila perusahaan itu gagal memperoleh pendapatan.&nbsp;</p>\n<p>2. Saham preferen&nbsp;</p>\n<p>Saham preferen merupakan surat berharga yang merupakan gabungan antara obligasi dan saham biasa. Banyak investor yang menyukai jenis<br>saham ini karena bisa menghasilkan pendapatan tetap (seperti bunga obligasi). Karakteristik saham preferen sama seperti saham biasa yang bisa mewakili kepemilikan ekuitas dan diterbitkan tanpa tanggal jatuh tempo yang tertulis di atas lembaran saham tersebut, dan membayar dividen.&nbsp;</p>\n<p>Jenis Saham dari Segi Cara Peralihannya&nbsp;</p>\n<p>1. Saham Atas Unjuk (Bearer Stocks)&nbsp;</p>\n<p>Pada saham jenis ini tidak tertulis nama pemiliknya secara fisik. Tujuannya agar mudah dipindahtangankan dari satu investor satu ke<br>investor lainnya. Pasalnya, banyak investor yang memiliki saham ini dengan tujuan untuk diperjualbelikan. Jadi, investor tidak perlu khawatir karena secara hukum siapapun yang memegang saham itu, maka dialah diakui sebagai pemiliknya dan berhak untuk ikut hadir dalam Rapat Umum Pemegang Saham (RUPS).&nbsp;</p>\n<p>2. Saham Atas Nama (Registered Stocks)&nbsp;</p>\n<p>Saham ini merupakan kebalikan dari saham unjuk karena memiliki nama pemegang saham dan tertulis jelas namanya di dalam kertas saham. Cara peralihannya juga harus melalui prosedur tertentu.&nbsp;</p>\n<p>Jenis Saham dari Segi Kinerja Perdagangan&nbsp;</p>\n<p>1. Blue Chip Stocks&nbsp;</p>\n<p>Blue Chip Stocks banyak diburu investor karena berasal dari perusahaan besar, pemimpin perusahaan bereputasi tinggi, dan memiliki<br>pendapatan yang stabil dan konsisten dalam membayar dividen. Contohnya PT Bank Mandiri Tbk. (BMRI), PT Indofood Sukses Makmur Tbk. (INDF), PT Astra International,Tbk. (ASII), dan PT Unilever, Tbk. (UNVR).&nbsp;</p>\n<p>2. Income Stocks&nbsp;</p>\n<p>Income Stocks memiliki keunggulan dalam kemampuan membayar dividen lebih tinggi dari rata-rata dividen yang dibayarkan pada tahun<br>sebelumnya. Kemampuan menciptakan pendapatan yang lebih tinggi dan secara teratur membagikan dividen tunai menjadi daya tarik tersendiri bagi investor.&nbsp;</p>\n<p>3. Growth Stocks&nbsp;</p>\n<p>Growth Stocks hampir mirip dengan blue chip karena memiliki pertumbuhan pendapatan yang tinggi. Selain itu saham ini berada di jajaran<br>depan dalam industri yang digelutinya dan dikenal sebagai perusahaan yang mempunyai reputasi tinggi.&nbsp;</p>\n<p>4. Lesser-Known&nbsp;</p>\n<p>Saham ini berasal dari perusahaan yang tetap memiliki ciri growth stock, walau bukan berada dalam garde depan dalam sebuah industri. Saham<br>ini biasanya berasal dari perusahaan daerah dan kurang populer di kalangan emiten.&nbsp;</p>\n<p>5. Speculative Stocks&nbsp;</p>\n<p>Investor yang menyukai investasi saham dengan resiko tinggi tentu bisa mencoba saham jenis ini. Saham ini berpotensi menghasilkan laba<br>tinggi di masa depan, tapi tidak bisa secara konsisten memperoleh penghasilan dari tahun ke tahun.&nbsp;</p>\n<p>6. Counter Cyclical Stocks&nbsp;</p>\n<p>Jenis saham terakhir, ada Counter Cyclical Stocks yang paling stabil saat kondisi ekonomi bergejolak karena tidak terpengaruh oleh<br>kondisi ekonomi makro maupun situasi bisnis secara umum. Ilustrasinya bila terjadi resesi ekonomi, maka harga saham ini tetap tinggi dan emitennya mampu memberikan dividen yang tinggi. Hal ini mungkin terjadi karena kemampuan emiten dalam memperoleh penghasilan yang tinggi pada masa resesi.&nbsp;</p>\n<p>Berikut cara belajar saham untuk pemula secara mudah.&nbsp;</p>\n<p>1. Mulai dari nominal kecil&nbsp;</p>\n<p>Walau trading saham merupakan salah satu investasi berisiko tinggi, kamu tetap bisa menggunakan modal kecil untuk menghindari kerugian besar. Kamu bisa mencoba apakah investasi melalui saham cocok untuk kamu atau tidak. Bila merasa cocok dan bisa mendapatkan keuntungan di tahap awal, kamu bisa melanjutkan dengan membeli lebih banyak saham. Tapi jika mengalami kerugian, tak ada salahnya mencoba terlebih dengan modal kecil.&nbsp;</p>\n<p>2. Pengetahuan adalah modal utama&nbsp;</p>\n<p>Untuk bisa mendapatkan keuntungan dalam investasi saham dibutuhkan kemampuan membaca simbol chart dan membaca tren. akan lebih bagus jika kamu bisa mengetahui nilai intrinsik atau analisis fundamental perusahaan.&nbsp;</p>\n<p>3. Memilih perusahaan sekuritas&nbsp;</p>\n<p>Setelah memiliki uang, kamu bisa mempelajari analisis buat trading. Kamu bisa cari perusahaan sekuritas tempat menanamkan uang. Memilih<br>broker saham kadang tricky supaya kamu gak merasa dirugikan. Terlebih jika kamu termasuk orang yang sering melakukan transaksi.&nbsp;</p>\n<p>4. Menghindari saham gorengan&nbsp;</p>\n<p>Saham gorengan kurang cocok dimainkan pleh para pemula karena sangat susah dibaca dari sisi analisis teknikal, apalagi fundamental. Pasalnya pergerakannya tak bisa diprediksi dan sentimen serta pompomers menjadi faktor paling dominan dalam menggerakkan harga saham ini.  Selain itu, gerakan yang amat random tak cocok sebagai media pembelajaran bagi trader pemula. Akan lebih mudah jika kamu belajar dari saham yang gerakannya cenderung normal, blue chip, atau second liner.&nbsp;</p>\n<p>5. Ketimpangan order jual dan beli&nbsp;</p>\n<p>Sebelum membeli saham, kamu harus memperhatikan saham-saham yang ketimpangannya sangat tinggi, yang mana order beli jauh lebih banyak daripada yang jual. Selanjutnya kamu bisa mulai belajar di titik kritis yakni saat awal dan akhir perdagangan, serta menjelang istirahat (jam 11-12).  Mengapa harus memperhatikan order beli yang jauh lebih banyak? Karena itu merupakan tanda indikasi kenaikan kuat saham alias ada “sesuatu” yang membuat saham itu menarik.&nbsp;</p>\n<p>6. Pemula jangan gunakan semua modal ke satu transaksi&nbsp;</p>\n<p>Pemula tidak disarankan menggunakan seluruh modal hanya untuk satu transaksi. Kamu bisa membeli beberapa saham potensial dengan nilai<br>yang sedikit dibanding membeli satu saham dengan seluruh modal. Hal ini untuk menghindari kerugian di satu titik sehingga kamu bisa memberdayakan modal lainnya pada saham yang berbeda&nbsp;&nbsp;</p>\n', 'DBgDj3tEDNg', 41, 18, 9),
(12, 'Cara Trading di Saham Sideways', '<p>Musim window dressing menjelang akhir tahun menjadi moment istimewa bagi pelaku pasar saham melakukan trading. Trading adalah jual-beli saham untuk mendapatkan keuntungan atau cuan saham dalam waktu singkat.&nbsp;</p>\n<p>Window dressing menjadi menarik untuk trading karena ada kecenderungan saham-saham menggeliat naik menjelang akhir tahun karena langkah Manajer Investasi yang mempercantik diri dengan meramu portofolio baru biar keliatan kece dan menarik di mata investor.&nbsp;</p>\n<p>MI membuang saham-saham yang merugi dan memborong saham-saham yang sedang memberikan keuntungan. Hal ini dilakukan agar portofolio akhir tahunnya terlihat elok. Hal lain yang dilakukan MI yakni mempercantik laporan keuangannya agar makin memikat investor. Pasar saham pun menjadi semarak.&nbsp;</p>\n<p>Namun tengah kondisi apa pun tetap ada saham yang kondisinya sedang sidesways. Sideways adalah kondisi saham yang berada dalam kegalauan karena pergerakannya tanpa arah atau choppy.&nbsp;</p>\n<p>Sideways adalah kondisi ketika harga saham yang diperdagangkan di pasar bergerak relatif horizontal alias datar-satar saja akibat penawaran dan permintaan yang sama-sama kuat dalam periode waktu tertentu.&nbsp;</p>\n<p>Kondisi ini biasanya terjadi selama tahap konsolidasi, sebelum harga melanjutkan tren sebelumnya atau justru berbalik ke tren yang baru. Nah, dihadapkan pada saham-saham yang sedang sideways, apa yang sebaiknya dilakukan investor atau trader? Berikut ini 3 tip menghadapi saham-saham yang dalam kondisi sideways:&nbsp;</p>\n<p>1. Analisis Mendalam&nbsp;</p>\n<p>Langkah pertama yang wajib dilakukan yakni melakukan analisis secara komprehensif saham sideways sebelum mentradingkannya. Analisis dilakukan untuk melihat time frame pergerakan harganya apakah valuasinya benar-benar sudah murah atau belum, lalu perhatikan trend sektornya dan cermati berbagai sentimen positif yang berpotensi menggerakkan saham tersebut sehingga bisa buy dan sentimen negatif yang berpotensi menumbangkan saham sehingga bisa sell.&nbsp;</p>\n<p>2. Cermati Arah Market&nbsp;</p>\n<p>Pergerakan market wajib dipantau, khususnya dengan berpatokan pada IHSG. Jika market sedang lesu sehingga IHSG cenderung flat karena tidak ada sentimen positif maka saham ada kemungkinan sulit untuk bangkit, tetapi jika IHSG sedang bullist maka ada peluang ikut terkerek apalagi ada sentimen positifnya. Toh, investasi saham saat ini sudah sangat mudah berbasis aplikasi, semisal dengan aplikasi IPOT besutan Indo Premier Sekuritas. Buy atau sell bisa dilakukan dengan mudah dan cepat dengan semartphone di genggaman tangan.&nbsp;</p>\n<p>3. Analisis dengan Price Action&nbsp;</p>\n<p>Analisis price action merujuk pada analisa teknikal berdasarkan pergerakan harga di masa lampau. Dalam hal ini trader bisa melihat pola tertentu pergerakan harga di masa lampau. Kendati ada pola tertentu, tetap harus dilakukan analisis fundamental dan teknikal, jadi bukan sekadar percaya dengan pola yang ditemukan. Jika hanya percaya begitu saja dengan pola yang ditemukan dan meyakini itu maka jatuh-jatuhnya menjadi spekulasi. So, analisis fundamental dan teknikal wajib dilakukan.&nbsp;&nbsp;</p>\n', 'b7c0IEWQfuo', 41, 16, 7),
(13, 'Rumus Average Down Saham', '<p>Average down adalah strategi averaging yang diberlakukan dengan membeli sebuah saham secara bertahap ketika harga saham tersebut turun.<br>Sebaliknya, average up adalah strategi pembelian saham ketika harga saham tersebut perlahan-lahan naik.&nbsp;&nbsp;</p>\r\n<p>Seperti yang telah tertulis di atas, secara umum strategi ini diterapkan untuk menghasilkan keuntungan maksimal dengan biaya minimal.<br>Selain itu, strategi ini diberlakukan untuk memudahkan investor dalam menghitung keuntungan.&nbsp;</p>\r\n<p>Selain pada saham, Anda juga bisa menerapkan strategi ini pada instrumen lain yang tentunya pergerakan harganya fluktuatif dan bisa Anda amati seperti, reksa dana, ETF dan lain sebagainya.&nbsp;</p>\r\n<p>Rumus average down saham adalah:&nbsp;</p>\r\n<p>Average down = ((harga1 x lot1)+(harga2 x lot2)+ (harga3 x lot3)+…. (hargaN x lot N)) : Total lot Dimana nilai harga1 lebih tinggi daripada harga2 dan seterusnya.&nbsp;&nbsp;</p>', 'O44OrMitps0', 41, 19, 10),
(14, 'Cara Menerapkan Strategi Average Down', '<p>Strategi average down tidak bisa diterapkan sembarangan. Untuk menerapkan strategi ini, Anda harus melakukan empat hal yaitu:&nbsp;</p>\n<p>1. Mengamati pergerakan harga saham selama beberapa waktu&nbsp;</p>\n<p>Tujuannya adalah supaya Anda memiliki gambaran umum kira-kira saham yang Anda incar bisa naik atau turun berapa persen. Dengan<br>melakukan hal ini, Anda bisa menetapkan kira-kira Anda akan membeli sebuah saham ketika harganya turun berapa persen dan akan tahu apakah harga saham tersebut berpotensi untuk naik kembali atau tidak dan kalaupun naik kira-kira sampai berapa. Tahap ini penting untuk dilakukan agar penerapan strategi ini bisa tepat sesuai keinginan Anda.&nbsp;&nbsp;</p>\n<p>2. Menerapkan strategi average down ketika harga tidak jatuh terlalu banyak&nbsp;</p>\n<p>Tujuannya adalah agar potensi keuntungan yang bisa dimaksimalkan semakin tinggi. Sebaliknya, jangan menerapkan strategi ini dengan<br>membeli saham yang selisih penurunan harganya rendah sebab itu artinya potensi keuntungan yang bisa Anda peroleh akan mengecil.&nbsp;&nbsp;</p>\n<p>3. Memastikan bahwa harga saham tersebut bisa kembali naik&nbsp;</p>\n<p>Tentu Anda akan merugi jika Anda terus membeli saham yang harganya terus menurun menggunakan sistem average down. Sebab ini justru akan membuat investasi Anda merugi.&nbsp;&nbsp;</p>\n<p>4. Tentukan jumlah lot maksimum dan harga minimum&nbsp;</p>\n<p>Ini bertujuan untuk membatasi pembelian saham Anda. Memang, jika harganya terus turun Anda bisa membeli saham dalam jumlah yang lebih<br>banyak. Namun Anda perlu ingat bahwa penurunan harga saham ini bisa terjadi cukup lama, sehingga alih-alih membeli Anda harus tahu kapan harus berhenti membeli.&nbsp;&nbsp;</p>\n<p>Singkatnya, penerapan strategi average down dan average up harus disiapkan secara matang dan tidak bisa simultan. Agar penghitungan average down atau average up yang Anda lakukan bisa lebih akurat, Anda bisa menggunakan aplikasi kalkulator saham yang saat ini banyak tersedia di internet.&nbsp;&nbsp;</p>\n<p>Setelah melakukan strategi ini dengan tepat, Anda bisa menentukan harga jual saham tersebut dan menunggu sampai akhirnya harga saham<br>tersebut naik ke level yang Anda inginkan.&nbsp;&nbsp;</p>\n', 'O44OrMitps0', 41, 19, 11),
(15, 'Contoh Perhitungan Average Down', '<p>&nbsp;&lt;p&gt;Perusahaan X memiliki saham dengan harga per lembar<br>sebagai&lt;br&gt;berikut:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga1 = 500&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga2 = 450&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Harga3 = 400&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;M, adalah seorang investor yang percaya bahwa<br>permintaan saham perusahaan X akan naik lagi sehingga dia membeli saham<br>perusahaan&lt;br&gt;tersebut meskipun saat ini harga saham itu sedang mengalami<br>penurunan. Untuk mengatasinya, M memberlakukan strategi average down sebagai<br>berikut:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot1 = 100 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot2 = 200 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Lot 3 = 300 lembar&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Dengan demikian, nilai average down yang diterapkan<br>x adalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Average down = ((500 x 100)+ (450 x 200) + (400 x<br>300)): 100+200+300&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= (50.000+90.000+12.000) : 600&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= 152.000 : 600&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;= 253.&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Jadi, rata-rata biaya yang harus dikeluarkan oleh M<br>untuk membeli 1 lembar saham perusahaan X adalah sebesar 253 rupiah. Tentu<br>harga ini jauh lebih rendah daripada harga<br>aslinya.&amp;nbsp;&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Katakanlah, perkiraan M tentang kenaikan harga<br>saham X benar. Beberapa saat kemudian harga saham perusahaan tersebut naik<br>menjadi 600&lt;br&gt;rupiah per lembar. Maka, keuntungan yang diperoleh X<br>adalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Keuntungan X = (600 x 600) – (253 x 600) = 360.000-<br>152.000= 208.000&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Bayangkan jika M telah membeli saham perusahaan ini<br>ketika harga 500 rupiah per lembar. Maka, keuntungan yang didapatkan<br>hanyalah:&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Keuntungan X = (600 x 600) – (500 x 600) = 360.000<br>-300.000 = 60.000&amp;nbsp;&lt;/p&gt;&nbsp;</p>\n<p>&lt;p&gt;Dari contoh di atas dapat disimpulkan bahwa, untuk<br>melakukan strategi average down, Anda harus mengamati dan mencatat setiap<br>pergerakan&lt;br&gt;harga dari saham yang Anda ingin beli. Untungnya saat ini<br>ada Microsoft Excel dan aplikasi spreadsheet yang lain yang bisa Anda gunakan<br>untuk menghitungnilai ini secara otomatis.&amp;nbsp;&lt;/p&gt;&nbsp;&nbsp;</p>\n', 'O44OrMitps0', 41, 19, 10),
(16, 'Kelebihan, Resiko, dan Kontrol', '<p>&nbsp;Kelebihan Trading Saat Sideways Pada Saham Struktur Market Jelas&nbsp;</p>\n<p>Pasar sideways biasanya memiliki level support dan resistance yang jelas, yang menghilangkan kebingungan pada saat menetapkan<br>entri dan menutup transaksi.&nbsp;&nbsp;</p>\n<p>Misalnya, seorang trader dapat membeli saham ketika harganya menguji support. Setelah itu, mereka menentukan target keuntungan pada<br>resistance terdekat.&nbsp;&nbsp;</p>\n<p>Letak stop-loss yang kalian tentukan, harus dibawah level support terdekat dan dilebihkan sedikit kebawah.&nbsp;</p>\n<p>&nbsp;&nbsp;</p>\n<p>Risiko dan Kontrol&nbsp;</p>\n<p>Pedagang bisa mengambil keuntungan pada saat sideways. Namun, keuntungan tersebut relatif kecil ketika kondisi tersebut.&nbsp;</p>\n<p>Oleh karena itu, setiap perdagangan biasanya tidak dibuka selama lebih dari beberapa hari atau minggu.&nbsp;&nbsp;</p>\n<p>Hal tersebut bermanfaat untuk mengurangi kemungkinan posisi terkena dampak negatif oleh trend bearish atau peristiwa berita yang tidak<br>terduga, seperti ekonomi yang buruk.&nbsp;&nbsp;</p>\n<p>Trading di pasar sideways memungkinkan trader untuk menutup posisi terbuka sebelum pengumuman perusahaan, seperti laporan pendapatan, dan masuk kembali saat harga saham kembali ke support.&nbsp;&nbsp;</p>\n', 'BULZxdPT0DY', 41, 16, 7),
(17, 'Apa itu Dividen?', '<p>Secara umum, dividen adalah pembagian laba atau hasil yang dibayarkan kepada pemegang saham berdasarkan jumlah saham yang dimiliki.<br>Biasanya, dividen yang dibagikan bisa dalam bentuk uang tunai atau saham. Menurut kamus besar bahasa Indonesia (KBBI), arti dividen adalah bagian laba atau pendapatan perusahaan yang besarnya ditetapkan oleh direksi serta disahkan oleh rapat pemegang saham untuk dibagikan kepada para pemegang saham.&nbsp;</p>\n<p>Semantara itu, dikutip dari laman sikapiuangmu.ojk.go.id, arti dividen adalah bagian keuntungan perusahaan yang dibagikan kepada pemegang<br>saham. Jumlah dividen yang akan dibagikan diusulkan oleh dewan direksi perusahaan dan disetujui di dalam rapat umum pemegang saham (RUPS). Sederhananya, dividen adalah hak atau jatah dari perusahaan yang mendapatkan keuntungan kepada pihak yang menjadi investor atau pemegang saham. Biasanya, dividen dibagikan oleh perusahaan selama setahun sekali atau dua kali. Namun, ada pula perusahaan yang tidak membagikan dividen lantaran dana yang berasal dari pendapatan perusahaan tersebut diinvestasikan untuk modal usaha. Kondisi tersebut disebut dengan laba ditahan. Di sisi lain, perusahaan yang mencatatkan rugi juga biasanya tidak membagikan dividen.&nbsp;&nbsp;</p>\n', 'xsQXz_glug4', 41, 18, 12),
(18, 'Perbedaan Dividen dan Capital Gain', '<p>Ada dua bentuk keuntungan atau return (imbal hasil) yang akan didapatkan investor ketika berinvestasi saham. Keuntungan atau imbal hasil<br>dari saham dapat berupa dividen dan capital gain. Dividen adalah bagian laba atau keuntungan perusahaan yang dibagikan kepada pemegang saham. Pembagian dividen ini ditetapkan oleh direksi perusahaan dan disahkan oleh rapat pemegang saham. Ketika perusahaan mencatatkan keuntungan atau laba besar, biasanya akan membagikan dividen kepada para investor di perusahaan tersebut. Pembayaran dividen diatur berdasarkan ketentuan yang berlaku pada jenis saham yang ada. Pemegang saham yang mendapatkan dividen adalah mereka yang memiliki saham dari perusahaan yang bersangkutan selama periode pembagian dividen. Besaran nilai dividen atau jumlah dividen yang diterima oleh pemegang saham tergantung pada jumlah saham yang ia miliki.&nbsp;</p>\n<p>Berbeda dengan dividen, capital gain adalah keuntungan ketika investor menjual saham dengan harga yang lebih tinggi dari harga<br>belinya. Dengan kata lain, capital gain adalah selisih harga jual dikurangi harga beli. Contoh, seorang investor membeli saham perusahaan A seharga Rp 4.000 per lembar saham. Lalu dia menjual saham tersebut di harga Rp 4.500. Maka capital gain yang diperoleh investor tersebut adalah Rp 500 per lembar saham.&nbsp;</p>\n<p>Artinya, investor yang mendapatkan capital gain adalah dia bisa menikmati keuntungan dari kenaikan harga atau nilai dari saham yang<br>dijualnya.&nbsp;&nbsp;</p>\n', 'KogejuJk6lY', 41, 18, 12),
(19, 'Jenis-Jenis Dividen ', '<p>Ada lima jenis dividen dalam perlu Anda ketahui. Berikut rinciannya:&nbsp;&nbsp;</p>\n<p>1. Dividen tunai&nbsp;</p>\n<p>Dividen tunai adalah dividen yang dibagikan oleh sebuah perusahaan kepada para pemegang sahamnya dalam bentuk uang tunai<br>atau cash. Dividen jenis ini bisa dikatakan merupakan pembagian dividen yang paling sering dilakukan.&nbsp;&nbsp;</p>\n<p>2. Dividen saham&nbsp;</p>\n<p>Dividen saham adalah pembagian dividen yang dilakukan dalam bentuk saham dari sebuah perusahaan untuk para investornya.<br>Sesuai namanya, investor tidak mendapatkan uang tunai dari pembagian dividen. Namun akan mendapatkan peningkatan pada jumlah sahamnya.&nbsp;</p>\n<p>3. Dividen properti&nbsp;</p>\n<p>Dividen properti adalah dividen yang<br>didistribusikan menjadi dalam bentuk aset. Dividen ini menjadi jenis dividen<br>yang cukup jarang dilakukan, biasanya dikarenakan proses pembagiannya yang<br>relatif tidak mudah.&nbsp;&nbsp;</p>\n<p>4. Dividen likuidasi&nbsp;</p>\n<p>Dividen likuidasi adalah dividen yang dibagikan kepada para pemegang saham yang berupa sebagian laba dan sebagian pengembalian modal. Perusahaan yang akan memberikan dividen likuidasi umumnya merupakan perusahaan yang memiliki rencana untuk menghentikan perusahaanya atau perusahaan sedang mengalami kebangkrutan&nbsp;&nbsp;</p>\n<p>5. Dividen janji hutang&nbsp;</p>\n<p>Dividen jani hutang adalah dividen yang dibagikan dari perusahaan kepada pemegang saham berupa surat janji hutang.<br>Dalam jenis dividen ini, perusahaan memberikan janji kepada para investornya bahwa akan membayarkan dividen tersebut pada waktu yang sudah ditentukan.&nbsp;&nbsp;</p>\n', 'KogejuJk6lY', 41, 18, 12),
(20, 'Money Management dalam Trading Saham', '<p>Money management dan trading saham merupakan kedua hal yang tak dapat dipisahkan. Kalau selama ini Anda belajar tentang investasi pasar<br>modal, mungkin menguasai analisis fundamental dan teknikal, melihat candlestick, membaca grafik, hingga mengetahui fungsi tombol jual beli. Dalam trading saham, money management termasuk hal penting yang harus dikuasai para trader. Secara singkat, teknik ini merupakan langkah-langkah dalam mengelola modal trading Anda agar menghasilkan banyak profit serta menghindari kerugian.&nbsp;</p>\n<p>Apakah ada rumus money management yang efektif dalam trading saham? Dalam prakteknya sendiri mungkin sudah pernah Anda gunakan ketika mengalokasikan gaji ke pos-pos pengeluaran bulanan. Misalnya, setiap bulan Anda harus mengelola uang sebesar 5 juta rupiah agar cukup memenuhi kebutuhan sampai tanggal gajian berikutnya. Uang tersebut jangan sampai kurang, kalau sisa lebih malah lebih bagus. Sadar atau tidak, Anda telah melakukan money management dalam kehidupan sehari-hari.&nbsp;</p>\n<p>Sama seperti langkah yang Anda lakukan dalam mengelola gaji, maka coba terapkan juga pada permainan saham. Katakanlah saat ini modal yang dimiliki ada sekitar 5 juta rupiah. Supaya tidak habis dan dapat berkembang, Anda perlu mengelola modal tersebut dengan lebih bijak. Nah, ada beberapa hal yang perlu dilakukan ketika mempraktekkan money management trading saham. Berikut diantaranya:&nbsp;</p>\n<ul>\n<li>Mencari cara efektif dalam melipatgandakan modal yang dimiliki. Apa yang harus dilakukan para trader agar modal 5 juta rupiah bisa berkembang menjadi 10 juta rupiah dan seterusnya dalam perdagangan saham?&nbsp;</li>\n<li>Bagaimana mendapatkan portofolio saham yang sehat dengan modal 5 juta rupiah?&nbsp;</li>\n<li>Upaya seperti apa yang harus trader lakukan untuk dapat mencetak profit dan mempertahankan modal di trading saham?&nbsp;</li>\n<li>Bagaimana cara membagi modal tersebut ke beberapa pilihan saham?&nbsp;</li>\n<li>Kapan harus deposit atau suntik modal lagi?&nbsp;</li>\n<li>Langkah seperti apa yang harus diambil untuk bertahan dengan modal tersebut tanpa harus melakukan suntik modal atau<br>mengambil keputusan membeli saham baru?&nbsp;</li>\n</ul>\n<p>Itulah beberapa point penting dalam mengatur modal yang harus diperhatikan para trader. Sayangnya masih banyak yang abai dan main<br>trading sembarangan. Maka jangan heran kalau keuntungan yang diperoleh jauh lebih sedikit dari kerugian. Kalau ingin profit terus ya harus mematangkan kembali teknik money management Anda.&nbsp;&nbsp;</p>\n', '8rE4x3SQvV8', 47, 21, 13),
(21, 'Rumus Menghitung Transaksi Trading Saham', '<p>Ibaratkan kita berjalan ke sebuah tempat baru, mengatur strategi supaya selamat sampai ke tujuan adalah hal yang penting dilakukan.<br>Tidak terkecuali saat melakukan aktivitas trading, tidak hanya bisa mengandalkan insting saja. Untuk itu diperlukan persiapan matang seperti money management yang baik dan benar.&nbsp;</p>\r\n<p>Kalau Anda masih belum dapat disiplin dan mengendalikan emosi dengan cara ini, maka akan lebih sering mengalami kerugian. Kejadian ini<br>sering dialami para pemula, sehingga mereka merasa jera untuk kembali ke dunia trading saham. Maka dari itu, penting untuk menentukan batas kerugian dengan menyusun money management terlebih dahulu. Ini merupakan kunci sukses bermain trading saham yang sering dibicarakan para trader profesional.&nbsp;&nbsp;</p>\r\n<p>Transaksi trading saham biasa dihitung dalam satuan lot, Anda bisa membuka transaksinya dengan tiga ukuran yakni lot, mikro dan mini<br>lot. Ketika mempelajari money management, ada beberapa hal penting yang perlu dipahami para trader.&nbsp;</p>\r\n<ul>\r\n<li>Win rate ratio, yakni mengukur kemampuan sebelum terjun secara nyata ke dunia trading saham. Anda harus mengetahui berapa persentase profit yang mungkin didapat dari perdagangan.&nbsp;</li>\r\n<li>Risk/reward ratio untuk menentukan kerugian dan profit trading&nbsp;</li>\r\n<li>Menentukan batas toleransi sesuai kemampuan.&nbsp;</li>\r\n</ul>\r\n<p>Kunci sukses main trading saham adalah money management yang baik. Meskipun terasa tidak menyenangkan, Anda butuh kemampuan ini untuk mengantisipasi kerugiannya nanti.&nbsp;&nbsp;</p>\r\n', '8rE4x3SQvV8', 47, 21, 14),
(22, 'Mengevaluasi Money Management', '<p>Money management dilakukan sebelum dan sesudah investasi atau trading. Penting bagi investor dan trader untuk mengevaluasi sistem<br>manajemen keuangannya. Perencana keuangan Finansialku, Rizqi Syam, CFP®, mengungkapkan bahwa mengevaluasi money management dapat dilakukan dengan mengajukan 7 pertanyaan berikut ini.&nbsp;</p>\n<p><strong>Bagaimana kondisi keuangan Anda? </strong></p>\n<p>Mengenali kondisi keuangan sebelum berinvestasi dapat mencegah kerugian akibat perilaku serakah di kemudian hari. Terlebih jika Anda<br>masih memiliki utang yang cukup besar. Jangan sampai investasi mengganggu stabilitas keuangan Anda. Lebih parah lagi jika sampai investasi dari hasil pinjaman. Dengan mengetahui kondisi keuangan, Anda dapat membuat strategi yang tepat.&nbsp;</p>\n<p><strong>Apa tujuan investasi Anda? </strong></p>\n<p>Beberapa kali ditemukan kasus investor yang berinvestasi tanpa tujuan, entah karena mengikuti teman atau kurang memahami soal investasi.<br>Jika seseorang berinvestasi tanpa tujuan dapat mengakibatkan inconsistency di tengah – tengah investasi. Contohnya, ketika melihat harga saham yang fluktuatif investor mengambil keputusan berdasarkan emosi dan keadaan saat itu tanpa mempertimbangkan apa tujuan awal<br>berinvestasi, sebab dari awal memang tidak tahu investasi itu untuk apa. Selain itu, dengan tujuan investasi, investor dapat menyesuaikan produk investasi apa yang dapat mewujudkan tujuannya secara optimal.&nbsp;</p>\n<p><strong>Bagaimana diversifikasi yang telah dilakukan? </strong></p>\n<p>Wajib diingat bagi investor dan trader bahwa risiko akan selalu ada. Maka, Anda harus memahami betul apa kelebihan dan kekurangan produk<br>dari segi risikonya. Sebab, saat Anda menganalisis sebuah produk, bukan hanya melihat keuntungannya saja tetapi juga faktor risikonya. Untuk meminimalisasi risiko, diversifikasi bisa menjadi opsi pilihan. Pastikan Anda tidak hanya berinvestasi pada satu produk investasi saja.&nbsp;</p>\n<p><strong>Bagaimana cara Anda menganalisis dan mengambil keputusan dalam memilih emiten?  </strong></p>\n<p>Pertanyaan ini sangat umum dijumpai dalam investasi. Bagaimana cara memilih saham yang bagus? Bagaimana cara memilih emiten? Untuk<br>menjawab hal itu, investor harus mempelajari value investing dan growth investing. Pendekatan analisis fundamental, akan membantu investor dengan tenang dan konsisten dalam menerapkan money management.&nbsp;&nbsp;</p>\n<p><strong>Bagaimana sistem trading yang sudah dibuat? </strong></p>\n<p>Trader mungkin saja memliki repetisi lebih banyak untuk melihat charting dan menganalisis berdasarkan psikologi harga pasar. Cari tahu<br>kenyaman Anda, apakah Anda bisa menjadi seorang scalper, swing trader, trend following atau day trader. Keempat kategori trading ini akan memiliki cara yang berbeda dalam membentuk sistemnya.&nbsp;&nbsp;</p>\n<p><strong>Seberapa sering Anda melakukan review portofolio investasi? </strong></p>\n<p>Evaluasi adalah hal yang sangat penting ketika berinvestasi.Dari portofolio, investor dapat mengetahui bagaimana perkembangan investasinya.<br>Apakah meningkat? Atau justru mengalami penurunan? Seorang investor sebaiknya mencermati setiap laporan keuangan yang keluar untuk mengambil tindakan dengan mengevaluasi kinerja setiap kuartal dan tahunan. Bukan hanya investor, trader pun harus melakukan reviw dalam waktu yang lebih singkat, yakni mingguan atau bulanan.&nbsp;</p>\n<p><strong>Seberapa besar risiko dalam investasi yang sedang dijalankan? </strong></p>\n<p>Seiring berjalannya waktu, perubahan terjadi bukan hanya dari fluktuasi harga saja. Tetapi juga dari perkembangan teknologi, model<br>bisnis, kebutuhan pasar, hingga tujuan keuangan Anda sendiri. maka dari itu, terus menghitung potensi risiko adalah hal yang bijak dilakukan. Dengan mengetahui risiko, investor dapat memprediksi bagaimana skenario yang terburuk.&nbsp;&nbsp;</p>\n', 'ItDHvXzUyd4', 47, 21, 13),
(23, 'Line Chart dan Bar Chart', '<p>&nbsp;<strong>1. Line Chart </strong></p>\n<p>Grafik saham garis atau line chart adalah grafik harga saham yang paling dasar. Grafik ini menunjukkan data secara terus menerus atau<br>berkelanjutan selama periode waktu tertentu.&nbsp;</p>\n<p>Namun grafik saham garis lebih sering digunakan untuk pergerakan harga saham harian atau dari hari ke hari.&nbsp;</p>\n<p>Membaca grafik saham garis cukup mudah. Sebab, biasanya hanya menunjukkan harga penutupan saham. Tidak ada harga pembukaan, harga<br>tertinggi, dan harga terendah. Tak heran bila grafik ini popular di kalangan investor atau trader.&nbsp;</p>\n<p>Kelebihan&nbsp;</p>\n<ul>\n<li>Membantu identifikasi atau proyeksi level support dan resistance harga saham dan trennya&nbsp;</li>\n<li>Mempermudah investor atau trader mengambil keputusan trading, karena grafik saham garis hanya menggunakan harga penutupan&nbsp;</li>\n<li>Lebih sederhana untuk investor pemula&nbsp;</li>\n<li>Sebagai pelajaran awal dalam membaca grafik saham dasar sebelum belajar grafik saham yang lebih kompleks, seperti candlestick chart atau candlestick saham.&nbsp;</li>\n</ul>\n<p>Kekurangan&nbsp;</p>\n<ul>\n<li>Bagi beberapa investor atau trader, informasi harga pada grafik saham garis tidak cukup membantu atau tidak sesuai dengan strategi<br>trading mereka&nbsp;</li>\n<li>Mereka memerlukan informasi harga yang lebih rinci, seperti harga pembukaan, harga terendah, dan harga tertinggi. Contoh, trader bisa membeli saham bila harga saham ditutup dengan harga tertinggi selama 10 hari.&nbsp;</li>\n</ul>\n<p><strong>2. Grafik Saham Batang (Bar Chart) </strong></p>\n<p>Grafik saham batang atau bar chart adalah grafik yang menggambarkan pergerakan harga saham dalam periode waktu tertentu. Setiap bar<br>atau batang menunjukkan harga pembukaan (open), harga tertinggi (high), harga terendah (low), dan harga penutupan (close).&nbsp;</p>\n<p>Maka dari itu, grafik saham batang disebut juga grafik OHLC. Namun demikian, grafik saham batang juga bisa disesuaikan dengan hanya menampilkan harga tertinggi, terendah, dan harga penutupan (HLC).&nbsp;</p>\n<p>Analisis teknikal menggunakan bar chart sebetulnya sama saja dengan line chart dan candlestick chart. Yakni untuk memantau pergerakan harga<br>dan membantu investor atau trader dalam keputusan trading.&nbsp;&nbsp;</p>\n', 'Jfum9Nl7_Ys', 47, 22, 15),
(24, 'Membaca Grafik Saham Batang', '<p>Bar chart adalah kumpulan batang harga. Setiap batang menunjukkan pergerakan harga untuk periode tertentu. Setiap batang memiliki garis vertikal yang menunjukkan harga tertinggi dan terendah yang dicapai selama periode<br>tersebut.&nbsp;</p>\n<p>Harga pembukaan ditandai dengan garis horizontal di sebelah kiri garis vertikal. Sementara harga penutupan ditandai dengan garis horizontal<br>kecil di sebelah kanan garis vertikal.&nbsp;</p>\n<p>Jika harga penutupan di atas harga pembukaan, batang akan berwarna hitam atau hijau. Sebaliknya, bila harga penutupan di bawah harga<br>pembukaan, ditunjukkan dengan warna merah.&nbsp;</p>\n<p>Kode warna batang akan membantu investor atau trader melihat tren dan pergerakan harga secara jelas. Kode warna tersedia sebagai pilihan di<br>sebagai besar platform investasi atau trading.&nbsp;</p>\n<p>Trader atau investor dapat memilih periode yang ingin dianalisis. Apakah satu hari, seminggu, sebulan, atau lainnya. Jika pilihannya<br>periode satu hari, cocok untuk trader, tetapi bukan investor. Sedangkan pilihan mingguan sangat tepat untuk investor jangka panjang, namun tidak untuk trader.&nbsp;</p>\n<ul>\n<li>Batang vertikal panjang menunjukkan ada perbedaan harga yang besar antara harga tertinggi dan terendah pada periode tersebut. Artinya volatilitas meningkat selama periode itu&nbsp;</li>\n<li>Batang vertikal pendek, menandakan terjadi sedikit volatilitas&nbsp;</li>\n<li>Jika ada jarak yang besar antara harga pembukaan dan penutupan, berarti harga telah membuat pergerakan yang signifikan&nbsp;</li>\n<li>Jika harga penutupan jauh di atas harga pembukaan, menunjukkan pembeli sangat aktif selama periode tersebut. Bisa juga mengindikasikan lebih banyak pembelian di perode yang akan datang&nbsp;</li>\n<li>Jika harga penutupan sangat dekat dengan harga pembukaan, menunjukkan tidak banyak keyakinan pada pergerakan harga di periode itu&nbsp;</li>\n<li>Tren naik keseluruhan biasanya ditandai dengan banyaknya batang berwarna hijau atau hitam&nbsp;</li>\n<li>Sedangkan bila lebih banyak batang merah mengindikasikan tren penurunan.&nbsp;&nbsp;</li>\n</ul>\n', '9gbEmCC5H2c', 47, 22, 15),
(25, 'Apa itu Saham Blue Chip?', '<p>Saham blue chip adalah istilah umum di pasar modal. Tapi, buat kamu yang baru pengin terjun ke dunia investasi saham, perlu tahu apa itu<br>saham blue chip.&nbsp;</p>\n<p>Saham blue chip adalah saham lapis satu atau saham dari perusahaan besar yang labanya stabil. Jadi saham kategori ini biasanya ada<br>dalam daftar Indeks LQ45 atau IDX30 dengan kapitalisasi besar.&nbsp;</p>\n<p>Sejumlah pelaku pasar modal, termasuk investor sepakat bahwa saham blue chip adalah saham perusahaan yang sudah mapan dan sehat dari segi finansial maupun fundamental.&nbsp;</p>\n<p>Pasalnya, saham blue chip tergolong konsisten untuk menyampaikan laporan keuangannya, baik saat sedang baik atau buruk.&nbsp;</p>\n<p>Istilah blue chip itu sendiri sebenarnya berasal dari permainan judi poker. Dalam dunia judi, ada tiga keping koin (chip) yang berwarna merah, putih, dan biru. Keping berwarna biru nilainya paling besar di antara yang lain.&nbsp;&nbsp;</p>\n', '8njC4aOG4uc', 48, 23, 16),
(26, 'List Saham Blue Chip yang Terdaftar di BEI', '<p>&nbsp;Berikut ini 20 daftar saham blue chip:&nbsp;</p>\n<ul>\n<li>&nbsp;Adhi Karya (Persero) Tbk (ADHI): Konstruksi&nbsp;</li>\n<li>&nbsp;Adaro Energy Tbk (ADRO): Tambang&nbsp;</li>\n<li>&nbsp;AKR Corporindo Tbk (AKRA): Logistik&nbsp;</li>\n<li>&nbsp;Aneka Tambang Tbk (ANTM): Tambang&nbsp;</li>\n<li>&nbsp;Astra International Tbk (ASII): Otomotif&nbsp;</li>\n<li>&nbsp;Bank Central Asia Tbk (BBCA): Perbankan&nbsp;</li>\n<li>&nbsp;Bank Negara Indonesia Tbk (BBNI): Perbankan&nbsp;</li>\n<li>&nbsp;Bank Rakyat Indonesia Tbk (BBRI): Perbankan&nbsp;</li>\n<li>&nbsp;Bank Tabungan Negara Persero Tbk (BBTN): Perbankan&nbsp;</li>\n<li>&nbsp;BPD Jawa Barat dan Banten Tbk (BJBR): Perbankan&nbsp;</li>\n<li>&nbsp;Bank Mandiri Persero Tbk (BMRI): Perbankan&nbsp;</li>\n<li>&nbsp;Global Mediacom Tbk (BMTR): Media&nbsp;</li>\n<li>&nbsp;Barito Pacific Tbk (BRPT): Kimia&nbsp;</li>\n<li>&nbsp;Bumi Serpong Damai Tbk (BSDE): Properti&nbsp;</li>\n<li>&nbsp;Bumi Resource Tbk (BUMI): Tambang&nbsp;</li>\n<li>&nbsp;Gudang Garam Tbk (GGRM): Rokok&nbsp;</li>\n<li>&nbsp;HM Sampoerna Tbk (HMSP): Rokok&nbsp;</li>\n<li>&nbsp;Indofood CBP Sukses Makmur Tbk (ICBP): Makanan&nbsp;</li>\n<li>&nbsp;Telekomunikasi Indonesia Persero Tbk (TLKM): Telekomunikasi&nbsp;</li>\n<li>&nbsp;United Tractors Tbk (UNTR): Alat berat.&nbsp;&nbsp;</li>\n</ul>\n', 'yVJx_G7af2Y', 48, 23, 16),
(27, 'Karakteristik Saham Blue Chip', '<p>&nbsp;1. Punya kapitalisasi besar&nbsp;</p>\n<p>Seperti yang dijelaskan di atas, saham ini merupakan saham dari perusahaan besar yang labanya stabil. Besar dan stabil itu harus bisa dibuktikan juga dengan modal dan asetnya, serta kapitalisasi pasarnya.&nbsp;</p>\n<p>Maksudnya kapitalisasi apa sih? Itu adalah harga perusahaan jika pengin “dibeli” secara utuh. Kapitalisasi bisa dihitung dengan cara mengalikan harga saham dengan jumlah lembar saham yang beredar di pasaran.&nbsp;</p>\n<p>Kalau dibilang kapitalisasinya besar, lantas berapa rupiah sih kapitalisasi sebuah perusahaan itu bisa dikatakan besar? Buat penggolongannya itu sendiri, daftar saham blue chip biasanya memiliki kapitalisasi di atas Rp10 triliun.&nbsp;</p>\n<p>Sedangkan kalau kapitalisasinya antara Rp500 miliar hingga Rp10 triliun, maka sahamnya bakal dikategorikan sebagai saham lapis dua. Dan buat Rp500 miliar ke bawah, tentu aja masuk lapis tiga.&nbsp;</p>\n<p>2. Bertengger lama di bursa&nbsp;</p>\n<p>Sejatinya, lamanya sebuah saham di bursa gak lantas menjadikan saham tersebut masuk daftar saham blue chip. Tapi kalau udah lama dan perusahaan tersebut mengalami peningkatan laba dan perkembangan yang signifikan, nah baru deh sahamnya bisa ditentukan bakal jadi “keping biru” atau gak.&nbsp;</p>\n<p>3. Ramai diperdagangkan&nbsp;</p>\n<p>Ramai diperdagangkan bisa disebut juga “likuid”. Jadi, banyak investor perorangan atau lembaga yang memiliki dan memperdagangkan saham ini. Saham-saham kategori “keping biru” juga selalu masuk ke daftar teraktif di bursa.&nbsp;</p>\n<p>Mungkin kamu pernah dengar istilah LQ45. Nah LQ45 adalah indeks yang isinya saham-saham likuid. Rata-rata blue chip saham ada di indeks tersebut.&nbsp;</p>\n<p>Tapi bukan berarti semua yang di LQ 45 itu blue chip ya. Bisa jadi ada saham yang emang saat itu karena sektornya lagi ramai, bukan karena laba perusahaannya lagi menanjak.&nbsp;</p>\n<p>4. Saham dari perusahaan yang jadi market leader&nbsp;</p>\n<p>Nah, tolak ukur ini bisa jadi cara yang termudah buat menentukan sebuah saham itu masuk kategori “keping biru”. Sebut aja seperti<br>Astra (ASII), atau PT Telkom (TLKM).&nbsp;</p>\n<p>Keduanya adalah perusahaan yang jadi market leader di sektornya. Produk-produk mereka kerap digunakan masyarakat.&nbsp;</p>\n<p>Atau sebut aja deh, bila perusahaan tersebut bisa “memonopoli” pasar, maka udah pasti sahamnya ya jadi blue chip.&nbsp;&nbsp;</p>\n', 'i5QvW0Za1e4', 48, 23, 17),
(28, 'Perbedaan Saham Blue Chip Dengan Saham Lapis Dua Dan Lapis Tiga', '<p>Saham lapis dua bisa diartikan sebagai saham second liner alias yang tergolong menengah. Gak terlalu besar tapi tergolong likuid dan<br>harga perlembarnya murah. Di tahun ini, ada juga kok saham lapis dua yang nilainya meningkat.&nbsp;</p>\n<p>Sementara itu saham lapis tiga adalah yang kinerjanya buruk dan gak likuid. Saham-saham ini pun cukup sering “digoreng” oleh bandar.&nbsp;</p>\n<p>Bicara soal keunggulannya, meski terlihat kuat tapi bukan berarti blue chip pasti untung. Buat apa ada lapis dua dan lapis tiga kalau yang nguntungin cuma blue chip.&nbsp;</p>\n<p>Tapi secara risiko, blue chip bisa dikatakan lebih aman dari yang lain. Risiko fluktuatif nilainya pun lebih rendah ketimbang saham lapis dua dan tiga. Namun ingat lho, harga gak murah.&nbsp;</p>\n<p>Sedangkan saham lapis dua atau tiga harganya cenderung lebih murah, dan kadang ada masa-masa di mana valuasi saham lapis dua meningkat.&nbsp;</p>\n<p>Kebayang dong kalau kamu beli saham ini saat harganya jatuh, dan tiba-tiba sebulan kemudian valuasinya naik sampai lebih dari 50 persen.<br>Pasti untung!&nbsp;</p>\n<p>Namun jika naiknya gak wajar, maka Bursa Efek Indonesia bisa men-suspend saham tersebut. So, saham itu jadi gak bisa diperdagangkan.&nbsp;</p>\n<p>Otomatis hal ini bisa merugikanmu sebagai trader. Modal kamu buat investasi jadi sia-sia, apalagi kalau suspensinya sampai tiga bulanan.&nbsp;&nbsp;</p>\n', 'ZoebFGlbh-s', 48, 23, 17),
(29, 'Kapan waktu yang tepat untuk beli saham blue chip?', '<p>&nbsp;Setelah kamu tahu pengertian dan keunggulannya ketimbang saham lapis dua dan tiga, maka pertanyaan selanjutnya adalah apakah kamu<br>tertarik buat investasi?&nbsp;</p>\n<p>Sebelum kamu berinvestasi, tentu aja kamu harus ketahui dulu apa yang jadi tujuanmu dalam investasi, dan investasi seperti apa yang bakal kamu lakukan? Apakah itu jangka pendek atau jangka panjang.&nbsp;</p>\n<p>Nah kalau dilihat dari harga saham per lembar, saham yang satu ini emang gak murah. Tapi dari sisi kestabilan, tentu aja bagus.&nbsp;</p>\n<p>Oleh karena itu, investasi saham unggulan ini emang pas buat investasi jangka panjang. Jika kamu tertarik buat berinvestasi jangka pendek, beli aja yang lapis dua dan gunakan rumus investasi beli saat turun jual saat naik.&nbsp;</p>\n<p>Selain jangka panjang, investasi ini juga cocok buat mereka yang baru pengin belajar berinvestasi di sektor saham.&nbsp;</p>\n<p>Seperti yang dijelaskan di atas, fluktuasi nilai saham jenis blue chip juga gak terlalu tinggi. Itu yang bikin risiko investasi dengan membeli saham ini cukup rendah.&nbsp;</p>\n<p>Sementara buat kamu yang emang jadi konsumen setia produk investasi saham syariah, blue chip saham juga bisa kamu pilih kok. Ada beberapa<br>saham keping biru yang halal seperti ADRO dan AKRA.&nbsp;&nbsp;</p>\n', 'qZ7oTUBgrGQ', 48, 23, 18),
(30, 'Pengertian Saham LQ45', '<p>&nbsp;Seperti namanya, saham lq45 adalah perhitungan gabungan dari 45 saham, yang akan dinilai dan diseleksi melalui beberapa kriteria pemilihan dari pasar saham.&nbsp;</p>\n<p>Kriteria penilaian tersebut berdasarkan likuiditas, kapitalisasi pasar, minimal sudah 3 bulan berada di BEI (Bursa Efek Indonesia) dan bagaimana aktivitas transaksi pada pasar reguler yang akan dilihat dari volume, nilai serta jumlah transaksinya.&nbsp;</p>\n<p>Umumnya, saham lq45 adalah saham-saham yang berada di peringkat atas berdasarkan kapitalisasi pasar selama 12 bulan terakhir. Indeks saham dari ke-45 saham ini disesuaikan setiap enam bulan.&nbsp;</p>\n<p>Indeks saham lq45 pertama kali diluncurkan pada bulan Februari 1997. Namun, berdasarkan data historikal lengkapnya, tanggal 13 Juli 1994 merupakan peluncuran indeks saham ini dengan nilai indeks sebesar 100.&nbsp;&nbsp;</p>\n', 'cCMpcmyKJyw', 48, 24, 19),
(31, 'Kriteria Saham LQ45', '<p>&nbsp;Seperti telah diulas di awal tadi, gabungan saham yang masuk dalam saham lq45 harus memenuhi kriteria di pasar saham. Hal utama yang menjadi ukuran penilaian, mengacu kepada nilai transaksi di pasar reguler.&nbsp;</p>\n<p>Selain itu, sejak bulan Januari 2005, hari perdagangan serta frekuensi transaksi saham, juga menjadi ukuran likuiditas. Jadi, kriteria suatu saham yang bisa masuk ke dalam gabungan indeks saham lq45 adalah sebagai berikut:&nbsp;</p>\n<ul>\n<li style=\"margin-left:18pt;\">Saham tersebut memiliki kondisi keuangan, serta<br>prospek pertumbuhan nilai transaksi perusahaan yang tinggi&nbsp;</li>\n<li style=\"margin-left:18pt;\">Saham sudah tercatat minimal selama 3 bulan&nbsp;</li>\n<li style=\"margin-left:18pt;\">Saham harus masuk dalam 60 gabungan saham,<br>berdasarkan nilai transaksi pada pasar reguler selama 1 tahun terakhir&nbsp;</li>\n<li style=\"margin-left:18pt;\">Termasuk dalam 60 saham yang tercatat dengan<br>kapitalisasi yang tinggi selama 1 tahun terakhir.&nbsp;</li>\n</ul>\n<p>Dalam 60 saham yang disebutkan di atas, 30 saham teratasnya akan masuk dalam perhitungan indeks saham lq45 secara otomatis.&nbsp;</p>\n<p>Agar mendapatkan ke-45 saham teratas, maka 15 saham lainnya akan dipilih dengan menggunakan kriteria tambahan, yaitu berdasarkan hari transaksi di pasar reguler, frekuensi transaksinya dan kapitalisasi pasar. Adapun metode pemilihan 15 saham lainnya adalah sebagai berikut:&nbsp;</p>\n<ul>\n<li style=\"margin-left:18pt;\">25 saham harus dipilih dari 30 saham pertama, berdasarkan kriteria tambahan tadi&nbsp;</li>\n<li style=\"margin-left:18pt;\">25 saham terpilih kemudian diseleksi kembali, berdasarkan frekuensi transaksinya hingga terpilih 20 saham.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Setelah ada 20 saham, diseleksi kembali menjadi 15 saham terpilih berdasarkan kapitalisasi pasar.&nbsp;</li>\n</ul>\n<p><span style=\"font-size: 11pt;font-family: Calibri\", sans-serif;\">15 saham terpilih akan digabung bersama 30 saham yang terpilih di awal, menjadi 45 saham dan masuk ke indeks saham lq45, dengan kriteria likuiditas dan kapitalisasi pasar yaitu kondisi keuangan juga prospek pertumbuhan perusahaannya</span>&nbsp;</p>\n', 'cCMpcmyKJyw', 48, 24, 19),
(32, 'Evaluasi Indeks dan Penggantian Saham LQ45', '<p>&nbsp;Sekarang bagaimana perspektif dari perusahaan-perusahaan yang sahamnya masuk ke dalam saham lq45? Bagi mereka, masuk dalam gabungan 45 saham tersebut merupakan suatu kehormatan.&nbsp;</p>\n<p>Perusahaan mereka akan dipercaya oleh para pelaku pasar modal, begitu juga dengan tingkat likuiditas dan kapitalisasi pasar dari perusahaan-perusahaan tersebut.&nbsp;</p>\n<p>Meskipun saham mereka berada di jajaran teratas pasar, bukan berarti perusahaan-perusahaan pemilik saham ini bisa santai saja. Mereka tetap harus bekerja keras untuk mempertahankan posisi tersebut, karena saham mereka akan terus dipantau oleh Bursa Efek Indonesia.&nbsp;</p>\n<p>BEI akan melakukan pemantauan tersebut selama 3 bulan sekali. Evaluasi atas pergerakan urutan setiap saham ini terus dilakukan. Jika ada saham yang tidak memenuhi kriteria, maka akan digantikan oleh saham yang memenuhi kriteria pasar modal. Penggantian saham dilakukan setiap enam bulan sekali.&nbsp;</p>\n<p>Perlu diketahui, bahwa dalam pemilihan saham lq45 ini, tidak dilakukan sembarangan. Ada beberapa pihak yang ahli dan terlibat langsung dalam pemilihannya. Mereka adalah komite penasehat yang terdiri dari para ahli dari ojk, profesional di bidang pasar modal, hingga para dosen dari universitas.&nbsp;</p>\n<p>Setelah mengetahui apa itu pengertian saham lq45, hingga evaluasi indeks sahamnya, Mari kita lihat indeks saham dari perusahaan mana saja yang sering masuk menjadi bagian dari saham lq45.&nbsp;</p>\n<p>Daftar indeks saham ini berdasarkan periode waktu bulan Agustus 2021 hingga Januari 2022. Dan ini merupakan 17 Besar dari saham lq45. Berikut daftar lengkapnya:&nbsp;</p>\n<ol>\n<li>&nbsp;ACES – Ace Hardware Indonesia Tbk&nbsp;</li>\n<li>&nbsp;ADRO – Adaro Energy Tbk&nbsp;</li>\n<li>&nbsp;AKRA – AKR Corporindo Tbk&nbsp;</li>\n<li>&nbsp;ANTM – Aneka tambang Tbk&nbsp;</li>\n<li>&nbsp;ASII – Astra International Tbk&nbsp;</li>\n<li>&nbsp;BBCA – Bank Central Asia Tbk&nbsp;</li>\n<li>&nbsp;BBNI- Bank Negara Indonesia (Persero) Tbk&nbsp;</li>\n<li>&nbsp;BBRI- Bank Rakyat Indonesia (persero) Tbk&nbsp;</li>\n<li>&nbsp;BBTN – Bank Tabungan Negara (Persero) Tbk&nbsp;</li>\n<li>&nbsp;BMRI – Bank Mandiri (Persero) Tbk&nbsp;</li>\n<li>&nbsp;BRPT – Barito Pacific Tbk&nbsp;</li>\n<li>&nbsp;BSDE – Bumi Serpong Damai Tbk&nbsp;</li>\n<li>&nbsp;CPIN – Charoen Pokphand Indonesia Tbk&nbsp;</li>\n<li>&nbsp;ERAA – Erajaya Swasembada Tbk&nbsp;</li>\n<li>&nbsp;EXCL – XL Axiata Tbk&nbsp;</li>\n<li>&nbsp;GGRM – Gudang Garam Tbk&nbsp;</li>\n<li>&nbsp;HMSP – H.M Sampoerna&nbsp;&nbsp;</li>\n</ol>\n', 'eAvnzSWTNuk', 48, 24, 19);
INSERT INTO `materidetail` (`materiID`, `judul`, `deskripsi`, `linkvideo`, `memberID`, `kelasID`, `topikID`) VALUES
(33, 'Apa itu Uptrend Saham?', '<p>&nbsp;Uptrend saham adalah pola pergerakan harga pasar yang terus naik. Namun, bagaimana pola ini ditentukan?&nbsp;</p>\n<p>Mengutip Investopedia, trendline bisa dikatakan mengalami uptrend atau kenaikan apabila tampak 2 puncak (peak) dan 2 palung (trough) yang semakin meninggi secara berturut-turut dalam suatu periode waktu.&nbsp;</p>\n<p>Kalau hanya tampak satu puncak dan satu palung saja selama berturut-turut, bisakah disebut uptrend? Jawabannya tidak.&nbsp;</p>\n<p>Tren ini akan terus terjadi selama belum ada titik palung yang lebih rendah dari periode sebelumnya.&nbsp;</p>\n<p>Sebaliknya, uptrend saham dikatakan putus atau berakhir begitu ada penurunan yang titiknya lebih rendah dari periode penurunan sebelumnya.&nbsp;</p>\n<p>Menurut InvestingAnswers, uptrend saham bisa bertahan selama beberapa bulan. Dalam kasus tertentu juga bisa berlangsung hingga beberapa tahun.&nbsp;</p>\n<p>Kalau kamu mengamati adanya uptrend, ini berarti harga pasarnya sedang naik terus.&nbsp;</p>\n<p>Namun, jangan terjebak dengan godaan angkanya yang tampak terus naik.&nbsp;</p>\n<p>Sebelum kamu menjual atau membeli saham yang sedang uptrend, ketahui dulu berapa angka moving average-nya.&nbsp;</p>\n<p>Moving average adalah perhitungan rata-rata dari beberapa subset (sebagian data) yang ada dalam seluruh rangkaian lengkap (full set) sebuah data.&nbsp;</p>\n<p>Moving average, disingkat MA, umumnya digunakan investor dalam analisis teknikal.&nbsp;</p>\n<p>Masih menurut Investopedia, MA dihitung untuk mendapatkan angka rata-rata harga saham yang lebih akurat.&nbsp;</p>\n<p>Selama harga pasar masih di atas angka MA, maka kondisi uptrend saham masih bisa dikatakan menanjak. Kondisi ini juga dikenal sebagai bullish trend.&nbsp;</p>\n<p>Sebaliknya, kalau angkanya di bawah MA, bisa diprediksikan akan terjadi penurunan atau downtrend. Kondisi ini dikenal dengan istilah tren bearish.&nbsp;</p>\n<p>Maka, bisa disimpulkan bahwa kondisi uptrend saham bukan berarti aman terus di setiap titiknya.&nbsp;</p>\n<p>Sebelum membeli atau menjual saham dalam keadaan harga di pasar naik, sebaiknya cek dulu angka MA-nya.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 20),
(34, 'Apa yang harus dilakukan saat sedang Uptrend Saham?', '<p>&nbsp;Ada beberapa hal yang bisa kamu lakukan atau hindari ketika ada tanda-tanda uptrend saham. Berikut rekomendasinya.&nbsp;</p>\n<p>1. Beli saham&nbsp;</p>\n<p>Beli saham ketika trennya sedang menunjukkan kenaikan. Namun, belilah hanya kalau trennya sudah berlangsung lama dan angkanya terpantau stabil.  Kalau uptrend baru terjadi dan kenaikannya langsung amat pesat, hati-hati. Biasanya yang seperti ini jatuhnya cepat juga.&nbsp;</p>\n<p>2. Jangan jual saham yang naik secara stabil&nbsp;</p>\n<p>Meskipun menurut perhitungan kamu sudah balik modal atau untung, sebaiknya hindari menjual saham yang trennya naik terus secara stabil dan sudah berlangsung lama.  Tahan dulu, karena untungmu bisa bertambah terus selama trennya masih naik dan harganya masih di atas angka MA.&nbsp;</p>\n<p>3. Antisipasi downtrend&nbsp;</p>\n<p>Seperti yang dijelaskan di atas, uptrend saham bisa berbalik dan terjadilah downtrend.&nbsp;&nbsp;</p>\n<p>Maka, pantau terus angka MA-nya dan ikuti berita-berita terbaru di pasar. Bila ada tanda-tanda penurunan, jual saja selama angkanya masih tinggi.  Kuncinya, kamu harus jeli dan menganalisis dengan baik terlebih dahulu.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 20),
(35, 'Apa itu Downtrend Saham?', '<p>&nbsp;Downtrend adalah pola pergerakan harga saham di pasar yang terus menurun dalam jangka waktu lama. Pola pergerakan ini bisa dipantau melalui trendline.&nbsp;&nbsp;</p>\n<p>Trendline menggambarkan pola pergerakan harga di pasar saham. Bisa naik, turun, atau datar. Maka, ada juga yang dinamakan uptrend (naik) dan sideways (datar).&nbsp;</p>\n<p>Mengutip Investopedia, kondisi pasar bisa dikatakan mengalami downtrend apabila tampak titik puncak (peak) dan titik palung (trough) yang semakin menurun secara berturut-turut dalam rentang waktu lama.&nbsp;</p>\n<p>Kalau kamu mengamati adanya downtrend, ini berarti harga pasarnya sedang turun terus.&nbsp;</p>\n<p>Keadaan ini bisa terjadi kalau di pasar ada lebih banyak penawaran daripada permintaan.&nbsp;</p>\n<p>Maksudnya, lebih banyak kuantitas sekuritas yang ditawarkan daripada pembeli yang tertarik. Kalaupun ada pembeli, sekuritas yang dibeli jumlahnya hanya sedikit.&nbsp;</p>\n<p>Biasanya downtrend juga terjadi mengikuti perkembangan berita atau informasi seputar perusahaan, keadaan ekonomi, dan situasi lainnya.&nbsp;</p>\n<p>Ya, kejadian tertentu bisa membuat orang-orang menjual saham bersamaan. Akibatnya, penawarannya pun melebihi permintaan di pasar.&nbsp;</p>\n<p>Melansir dari Corporate Finance Institute, kalau downtrend berlangsung dalam jangka waktu panjang, dampaknya akan besar.&nbsp;</p>\n<p>Bisa terjadi krisis ekonomi yang menimbulkan penggangguran, penurunan daya beli masyarakat, dan lain-lain.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 21),
(36, 'Apa yang harus dilakukan saat sedang Downtrend Saham?', '<p>&nbsp;Menurut pusat edukasi dan komunitas trader Babypips, ada beberapa hal yang bisa kamu lakukan atau hindari ketika ada sinyal downtrend saham.&nbsp;</p>\n<p>Berikut tips dan trik yang sudah Glints rangkum untukmu.&nbsp;</p>\n<p>1. Melakukan short selling&nbsp;</p>\n<p>Hati-hati, short selling biasanya dilakukan oleh investor yang sudah berpengalaman dalam trading.  Caranya, kamu akan meminjam saham dan langsung menjualnya kembali. Namun, dengan perjanjian bahwa suatu saat nanti kamu akan membeli kembali saham yang dijual tersebut.  Kalau trennya turun terus, kamu pun akan dapat untung dari selisih harga jual saham dengan harga beli di kemudian hari.&nbsp;</p>\n<p>2. Jual saham sebelum turunnya makin drastis&nbsp;</p>\n<p>Perhatikan trennya. Investor juga bisa melakukan analisis teknikal dengan menghitung nilai moving average harga saham.  Bila setelah diamati, kamu menebak kondisi ke depannya akan terus turun, langsung jual sahamnya sebelum turun secara drastis.&nbsp;</p>\n<p>3. Memprediksi uptrend&nbsp;</p>\n<p>Kalau kamu memiliki saham yang sekarang turun terus, coba analisis apakah ada peluang harganya naik lagi ke depannya.  Kalau melihat kemungkinannya, kamu bisa menunggu dulu sampai muncul uptrend dan harganya naik baru menjual saham tersebut.  Apa pun keputusanmu, pastikan kamu sudah mempertimbangkannya dengan hati-hati, ya.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 21),
(37, 'Apa itu Sideways Saham?', '<p>&nbsp;Sideways market adalah kondisi ketika harga suatu aset yang diperdagangkan di pasar bergerak relatif horizontal (datar) akibat penawaran dan permintaan yang sama-sama kuat dalam periode waktu tertentu. Kondisi ini biasanya terjadi selama periode konsolidasi, sebelum harga melanjutkan tren sebelumnya atau justru berbalik ke tren yang baru.&nbsp;</p>\n<p>Sideways market umumnya adalah hasil dari pergerakan harga antara level support dan resistance yang kuat. Kondisi tersebut membuat pergerakan harga pada suatu aset cenderung datar dalam jangka waktu yang lama sebelum memulai tren baru yang bisa saja mengalami kenaikan atau malah penurunan.&nbsp;</p>\n<p>Di sisi lain, volume, yang merupakan indikator penting dalam trading, sebagian besar tetap datar selama sideways market, karena bullish dan bearish juga sama-sama mendominasi. Hal tersebut dapat melesat naik atau bahkan turun tajam ke satu arah ketika breakout maupun breakdown terjadi.&nbsp;</p>\n<p>Inilah sebabnya, saat menganalisis sideways market, trader harus melihat indikator teknis dan pola gratifk lainnya. Tujuannya untuk memberikan sinyal ke mana kira-kira arah harga dan kapan breakdown ataupun breakout mungkin terjadi.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 22),
(38, 'Ciri-ciri Sideways Saham', '<p>&nbsp;Salah satu ciri-ciri sideways market yang paling ketara dan bisa diamati adalah saat grafik menunjukkan pola gunung kecil dan lembah dengan candle hijau merah yang pendek. Pola tersebut sebetulnya menggambarkan pergerakan pasar yang stabil, artinya tidak naik dan tidak turun. Dengan kondisi ini, melakukan trading bisa menjadi berisiko karena tidak mudah dan berbahaya. Oleh karenanya kondisi sideways dapat dijadikan sebagai momentum untuk Anda menahan diri dari berbagai kegiatan trading.&nbsp;&nbsp;</p>\n<p>Selain mengamati grafik, beberapa indikator di bawah ini juga bisa dijadikan acuan untuk mendeteksi sideways market.&nbsp;&nbsp;</p>\n<p>1. Indikator Overlay&nbsp;&nbsp;</p>\n<p>Overlay terbagi ke dalam beberapa jenis yang nantinya digunakan untuk mendeteksi sideways market, yaitu:&nbsp;</p>\n<p>Indikator William’s Alligator&nbsp;</p>\n<p>Cara indikator ini mendeteksi melalui sebuah pola garisnya yang bergerak berlawanan, berarti ada tren yang terbentuk. Namun, jika pola garisnya saling bertumpukan, menandakan pasar sedang mengalami kondisi sideways.&nbsp;</p>\n<p>Indikator Bollinger Band&nbsp;</p>\n<p>Tidak seperti indikator Williams Alligator, indikator ini akan mendeteksi sideways market ketika grafik berbentuk pola horizontal dengan saluran yang semakin sempit. Apabila ini terjadi, para investor dan trader harus menunggu hingga Bollinger Bands, yang nantinya melebar dan bisa dijadikan kesempatan untuk masuk pasar dari batas atas hingga bawah.&nbsp;&nbsp;</p>\n<p>Indikator Parabolic SAR&nbsp;</p>\n<p>Jika semakin dekat dan halus suatu titik sinyal dengan grafik harga, maka akan sangat mudah mendeteksi bahwa kondisi dalam suatu pasar sedang datar.&nbsp;&nbsp;</p>\n<p>2. Indikator Oscillator&nbsp;</p>\n<p>Semakin suatu pola mendekati garis nol, sideways akan semakin sempit dan akan lebih tahan lama. Untuk membaca indikator ini adalah dengan melihat satu atau dua garis sinyal dari rentang 0 hingga 100. Di bawah ini adalah jenis indikator oscillator:&nbsp;</p>\n<p>Indikator Accelerator Oscillator (AO)&nbsp;</p>\n<p>Kegunaan indikator ini adalah untuk melihat volatilitas yang rendah terjadi, apabila histogram akan mengecil dan berfluktuasi di sekitar polas garis dasar.&nbsp;&nbsp;</p>\n<p>Indikator Relative Strength Index (RSI)&nbsp;</p>\n<p>RSI ini bekerja dengan cara memperlihatkan rasio rata-rata pada kenaikan harga penutupan. Tidak terjadinya kondisi divergen yang selalu menjadi sinyal RSI, menjadi tanda bahwa pasar sedang mengalami sideways.&nbsp;&nbsp;</p>\n<p>Indikator Average Directional Index Movement (ADX)&nbsp;</p>\n<p>Indikator ini digunakan untuk melihat arah dan kekuatan pada tren, dengan algoritma perhitungan yang telah terbukti minim delay dan bisa memprediksi pergerakan harga lebih lanjut.&nbsp;&nbsp;</p>\n<p>Parameter yang digunakan untuk melihat indikator ADX melalui pergerakan garis utama ADX di level 20. Jika sinyal berada dibawah level, maka tren terdeteksi lemah dan harga cenderung datar atau disebut sideways.&nbsp;&nbsp;</p>\n', '6HviPYLacv8', 49, 25, 22),
(39, 'Pengertian Dividen', '<p>&nbsp;Sobat investor, dunia saham menjadi salah satu cara bagi masyarakat untuk mendapatkan pendapatan pasif atau investasi.&nbsp;</p>\n<p>Sebelum yakin untuk terjun dalam dunia saham, ada beberapa hal yang wajib untuk dipelajari oleh calon investor. Salah satu yang paling penting adalah dividen, keuntungan perusahaan yang menjadi hak milik dari para pemegang saham perusahaan saat bisnis berjalan sesuai atau melebihi target.&nbsp;</p>\n<p>Dilansir berbagai sumber, yang dimaksud dengan dividen adalah bagian atas keuntungan perusahaan atau badan usaha yang diberikan kepada seluruh pemilik saham. Jumlah dividen yang diberikan berdasarkan jumlah keuntungan perusahaan serta nilai saham yang dimiliki oleh para investor.&nbsp;&nbsp;</p>\n<p>Biasanya, besaran laba atau keuntungan perusahaan yang akan dijadikan sebagai dividen ditentukan terlebih dahulu pada RUPS atau Rapat Umum Pemilik Saham. Proses pembayarannya pun dilakukan sesuai acuan yang dimiliki oleh masing-masing perusahaan.&nbsp;&nbsp;</p>\n<p>Acuan tersebut meliputi jumlah pembayaran yang ditentukan bersama melalui RUPS oleh seluruh pemegang saham. Dengan begitu, tidak ada keputusan sepihak dari perusahaan atau investor dalam menentukan jumlah dividen yang akan diberikan nantinya.&nbsp;&nbsp;</p>\n<p>Yang kedua adalah keputusan apakah dividen tersebut memiliki sifat stabil atau tidak. Artinya, saat dividen bersifat stabil, maka jumlahnya dapat diperkirakan. Namun, saat sifat dividen tidak stabil, bisa diketahui bahwa jumlahnya dapat berubah-ubah atau bahkan tidak diberikan kepada investor karena alasan tertentu.&nbsp;</p>\n<p>Keuntungan yang diterima investor dalam bentuk dividen terbagi ke dalam beberapa jenis. Lima jenis dividen yang paling umum, yaitu dividen tunai, dividen saham, dividen properti, dividen janji utang, dan dividen liquidating.&nbsp;</p>\n<p>Dividen tunai, yaitu merupakan jenis dividen yang paling umum, di mana setiap pemegang saham akan menerima uang tunai dari perusahaan yang bersangkutan. Namun, penyalurannya dapat dilakukan melalui transfer maupun melalui cek.&nbsp;</p>\n<p>Dividen saham, yaitu dividen yang diberikan dalam bentuk saham sehingga jumlah kepemilikan saham investor mengalami peningkatan. Saham yang dibagikan tersebut merupakan saham baru yang diterbitkan perusahaan.&nbsp;</p>\n<p>Dividen properti atau yang bisa disebut juga dengan dividen aset, yaitu pembayaran keuntungan yang diberikan dalam bentuk barang. Dalam hal ini, perusahaan dapat membayar aset lain kepada pemegang saham, seperti sekuritas investas dan real estat.&nbsp;</p>\n<p>Dividen janji utang atau skrip, yaitu pembagian dividen yang dilakukan dalam bentuk pembayaran pembayaran skrip milik pemegang saham sehingga akan membuat perusahaan tersebut mempunyai utang jangka pendek.&nbsp;</p>\n<p>Dividen liquidating, yaitu dividen yang dibagikan kepada pemegang saham dalam bentuk pengurangan modal perusahaan.&nbsp;&nbsp;</p>\n', 'xsQXz_glug4', 49, 26, 23),
(40, 'Cara menghitung Dividen', '<p>&nbsp;Setelah mengetahui arti dividen dan jenis-jenisnya, berikut beberapa cara yang biasa digunakan oleh perusahaan untuk perhitungan dividen. Cara perhitungan dividen menjadi penting setelah Anda mengetahui arti dividen dan jenisnya jika ingin mulai berinvestasi saham.&nbsp;</p>\n<p>Arti Dividen Perhitungan Dividend Payout Ratio (DPR)&nbsp;</p>\n<p>Dividend Payout Ratio (DPR) adalah rasio berapa banyak laba perusahaan yang dibagi menjadi dividen kepada pemegang saham.&nbsp;</p>\n<p>Contoh:&nbsp;</p>\n<ul>\n<li style=\"margin-left:18pt;\">Laba bersih PT. ABC merupakan Rp 1.000.000.000,-.&nbsp;</li>\n<li style=\"margin-left:18pt;\">ABC memutuskan untuk membagikan dividen sebesar Rp 500.000.000,- kepada pemegang saham.&nbsp;</li>\n<li style=\"margin-left:18pt;\">DPR = 500.000.000 / 1.000.000.000 * 100% = 50%.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Jadi, Dividend Payout Ratio (DPR) dari PT. ABC adalah 50%.&nbsp;</li>\n</ul>\n<p>Arti Dividen Perhitungan Dividend Per Share (DPS)&nbsp;</p>\n<p>Angka dari jenis perhitungan dividen per lembar saham didapat dari pembagian dividen perusahaan dengan jumlah total lembar saham.&nbsp;</p>\n<p>Contoh:&nbsp;</p>\n<ul>\n<li style=\"margin-left:18pt;\">ABC memutuskan untuk membagikan dividen sebesar Rp 500.000.000,- kepada pemegang saham.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Jumlah total lembar saham dari PT. ABC adalah 1 juta lembar.&nbsp;</li>\n<li style=\"margin-left:18pt;\">DPS = 500.000.000 / 1.000.000 = Rp 500,-.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Jadi, Dividend Per Share (DPS) atau dividen per lembar yang diterima oleh pemegang saham adalah Rp 500,-&nbsp;</li>\n</ul>\n<p>Arti Dividen Perhitungan Dividend Yield&nbsp;</p>\n<p>Dividend yield merupakan perbandingan seberapa besar dividen yang dibagi perusahaan terhadap harga saham yang sedang beredar.&nbsp;</p>\n<p>Contoh:&nbsp;</p>\n<ul>\n<li style=\"margin-left:18pt;\">Dividend Per Share (DPS) dari PT. ABC adalah Rp 500,-.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Harga saham PT. ABC adalah Rp 10.000,-.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Dividend yield = 500 / 10.000 * 100% = 5%.&nbsp;</li>\n<li style=\"margin-left:18pt;\">Jadi, dividend yield dari PT. ABC adalah 5%.&nbsp;&nbsp;</li>\n</ul>\n', 'xsQXz_glug4', 49, 26, 24);

-- --------------------------------------------------------

--
-- Table structure for table `materiselesaidetail`
--

CREATE TABLE `materiselesaidetail` (
  `doneID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `kelasID` int(11) NOT NULL,
  `materiID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materiselesaidetail`
--

INSERT INTO `materiselesaidetail` (`doneID`, `memberID`, `kelasID`, `materiID`) VALUES
(1, 41, 16, 12),
(2, 41, 16, 17);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memberID` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `BirthDate` date NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Password` varchar(60) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `isCreator` tinyint(1) NOT NULL DEFAULT 0,
  `profilephoto` varchar(50) NOT NULL,
  `coverphoto` varchar(59) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memberID`, `Name`, `BirthDate`, `Phone`, `Email`, `Password`, `refresh_token`, `isCreator`, `profilephoto`, `coverphoto`) VALUES
(41, 'Andikatama', '2001-01-01', '087868407686', 'andykatama@gmail.comm', '$2b$10$61FnpDEi1I9HTinujKnaV.lJAyknvCSjd19xciJ3OeBLjBZJhevuS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxLCJuYW1lIjoiQW5kaWthdGFtYSIsImVtYWlsIjoiYW5keWthdGFtYUBnbWFpbC5jb21tIiwiaWF0IjoxNjUwNzg2NDk4LCJleHAiOjE2NTA4NzI4OTh9.MiFA8ELvJwvvlp4KWKTp3qpykFbTGWd5nrw-fvl1wNU', 0, 'andikatama.jpg', 'andikatama.jpg'),
(47, 'Kapten Saham', '2001-01-01', '087868407686', 'andykatama@gmail.coma', '$2b$10$gNKotvu7xymVm5XEQZ21EeKQs3Nfmv6Dx7svd3omy22.lM/7fofvC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ3LCJuYW1lIjoiS2FwdGVuIFNhaGFtIiwiZW1haWwiOiJhbmR5a2F0YW1hQGdtYWlsLmNvbWEiLCJpYXQiOjE2NDcxNzkyNDMsImV4cCI6MTY0NzI2NTY0M30.lMWSEVcbFBvewOJYwfoiDrGrSCyK-Y0K43g2wErlD_M', 0, 'kapten.jpg', 'kapten.jpg'),
(48, 'Vandarina Risca', '1999-02-24', '085624742052', 'vandarina@gmail.com', '$2b$10$C6E5sB665YnTtPPw8P0n0.sammWBZGORLR6nuXtMrJLI59DzYgSzq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJuYW1lIjoiVmFuZGFyaW5hIFJpc2NhIiwiZW1haWwiOiJ2YW5kYXJpbmFAZ21haWwuY29tIiwiaWF0IjoxNjQ3MjcxOTEzLCJleHAiOjE2NDczNTgzMTN9.HR_1vYRRQ6dZ_T4ptsoaFokyxeEmZKe_2vZh1C81Ngw', 0, 'vandarina.jpg', 'vandarina.jpg'),
(49, 'Lylia', '2000-12-12', '085678789869', 'lylia88@gmail.com', '$2b$10$kAGyBBZB8Qx/p0O1Fnew3uJC4mk/KdzhzNjhcOyXCMyJ0Ora6Z/Fa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5LCJuYW1lIjoiTHlsaWEiLCJlbWFpbCI6Imx5bGlhODhAZ21haWwuY29tIiwiaWF0IjoxNjQ3NDQwMzUyLCJleHAiOjE2NDc1MjY3NTJ9.53JoiEKjYwq8ipUbh6wQybQ_UhHcMp-3K0zqyGFgrb0', 0, 'lylia.jpg', 'lylia.jpg'),
(50, 'Kagura', '1945-08-17', '081266577899', 'balmond@gmail.com', '$2b$10$c92lts7Vtor8zZECGsqIJu.sCt8PKw4HXICqrM8H1ahTB3eKPywPa', '', 0, 'kagura.jpg', 'kagura.jpg'),
(51, 'Gatot', '1977-08-08', '082154468791', 'gatotkaca@gmail.com', '$2b$10$6M9e/FTvq8RX1glSri01FerOwOLuvNFdPqvgGUaDovzhkJh/4Ddsi', '', 0, 'gatot.jpg', 'gatot.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `memberpurchasedetail`
--

CREATE TABLE `memberpurchasedetail` (
  `memberID` int(11) NOT NULL,
  `kelasID` int(11) NOT NULL,
  `invoiceID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `memberpurchasedetail`
--

INSERT INTO `memberpurchasedetail` (`memberID`, `kelasID`, `invoiceID`) VALUES
(41, 16, '6241dc4fa3ab7811c4bb9fbc'),
(41, 19, '624dbbcc50492b6ad2737905'),
(41, 21, '');

-- --------------------------------------------------------

--
-- Table structure for table `payoutaddressdetail`
--

CREATE TABLE `payoutaddressdetail` (
  `memberID` int(11) NOT NULL,
  `bankCode` varchar(15) NOT NULL,
  `bankName` varchar(60) NOT NULL,
  `namaPemilik` varchar(60) NOT NULL,
  `nomorRekening` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payoutaddressdetail`
--

INSERT INTO `payoutaddressdetail` (`memberID`, `bankCode`, `bankName`, `namaPemilik`, `nomorRekening`) VALUES
(41, 'MANDIRI', 'Bank Mandiri', 'Andikatama', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `payoutsdetail`
--

CREATE TABLE `payoutsdetail` (
  `payoutID` varchar(40) NOT NULL,
  `memberID` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbltopik`
--

CREATE TABLE `tbltopik` (
  `topikID` int(11) NOT NULL,
  `kelasID` int(11) NOT NULL,
  `namaTopik` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbltopik`
--

INSERT INTO `tbltopik` (`topikID`, `kelasID`, `namaTopik`) VALUES
(7, 16, 'Cara Memanfaatkan Pasar Sideways'),
(9, 18, 'Apa itu Saham?'),
(10, 19, 'Cara Menghitung Average Down Saham'),
(11, 19, 'Cara Menerapkan Strategi Average Down'),
(12, 18, 'Dividen Saham'),
(13, 21, 'Apa itu Money Management?'),
(14, 21, 'Perhitungan dalam Money Management'),
(15, 22, 'Jenis-Jenis Grafik Saham'),
(16, 23, 'Daftar Saham Blue Chip di BEI'),
(17, 23, 'Karakteristik Saham Blue Chip'),
(18, 23, 'Waktu Beli yang Tepat untuk Saham Blue Chip'),
(19, 24, 'Apa itu Saham LQ45?'),
(20, 25, 'Uptrend'),
(21, 25, 'Downtrend'),
(22, 25, 'Sideways'),
(23, 26, 'Apa itu Dividen?'),
(24, 26, 'Perhitungan Dividen'),
(25, 16, 'Pengertian Sideways');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `analysisdetail`
--
ALTER TABLE `analysisdetail`
  ADD PRIMARY KEY (`analysisID`);

--
-- Indexes for table `balancedetail`
--
ALTER TABLE `balancedetail`
  ADD PRIMARY KEY (`memberID`);

--
-- Indexes for table `kelasdetail`
--
ALTER TABLE `kelasdetail`
  ADD PRIMARY KEY (`kelasID`);

--
-- Indexes for table `materidetail`
--
ALTER TABLE `materidetail`
  ADD PRIMARY KEY (`materiID`);

--
-- Indexes for table `materiselesaidetail`
--
ALTER TABLE `materiselesaidetail`
  ADD PRIMARY KEY (`doneID`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `memberpurchasedetail`
--
ALTER TABLE `memberpurchasedetail`
  ADD PRIMARY KEY (`memberID`,`kelasID`);

--
-- Indexes for table `payoutaddressdetail`
--
ALTER TABLE `payoutaddressdetail`
  ADD PRIMARY KEY (`memberID`);

--
-- Indexes for table `payoutsdetail`
--
ALTER TABLE `payoutsdetail`
  ADD PRIMARY KEY (`payoutID`);

--
-- Indexes for table `tbltopik`
--
ALTER TABLE `tbltopik`
  ADD PRIMARY KEY (`topikID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kelasdetail`
--
ALTER TABLE `kelasdetail`
  MODIFY `kelasID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `materidetail`
--
ALTER TABLE `materidetail`
  MODIFY `materiID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `materiselesaidetail`
--
ALTER TABLE `materiselesaidetail`
  MODIFY `doneID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `tbltopik`
--
ALTER TABLE `tbltopik`
  MODIFY `topikID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
