-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2022 at 04:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `analysis`
--

CREATE TABLE `analysis` (
  `analysisID` int(11) NOT NULL,
  `memberID` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(250) NOT NULL,
  `stockCode` varchar(4) NOT NULL,
  `targetPrice` int(11) NOT NULL,
  `initialPrice` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `isHit` varchar(10) NOT NULL DEFAULT 'Hold',
  `agreed` int(11) NOT NULL,
  `disagreed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `analysis`
--

INSERT INTO `analysis` (`analysisID`, `memberID`, `date`, `description`, `stockCode`, `targetPrice`, `initialPrice`, `days`, `isHit`, `agreed`, `disagreed`) VALUES
(1, 41, '2022-04-05', 'Secara fundamental masih cukup menarik', 'BBCA', 8000, 7500, 9, 'Hold', 356, 253),
(2, 41, '2022-04-06', 'Secara teknikal ada potensi rebound', 'EKAD', 1800, 1200, 15, 'Hold', 2, 2),
(15, 41, '2022-07-05', '$ASII\r\n\r\nMarket sedang tidak baik baik saja..\r\nLebih baik wait n see dulu,\r\nakankah IHSG kita terkoreksi sampe sini? atau lebih dalam? 🤔🤔\r\n\r\nTag saham sejuta umat di Bei\r\n$SMDR $BBCA $BSSR $JPFA', 'IHSG', 6299, 6641, 30, 'Hold', 21, 26),
(16, 47, '2022-06-29', '$IHSG $BBRI kalau ARB 35% bakal nyentuh 3500', 'BBRI', 3850, 4180, 90, 'Hold', 36, 44),
(17, 47, '2022-07-05', '$BUMI setelah dihitung-hitung\r\nTags: $SMDR $PTBA $ITMG $BBCA', 'BUMI', 125, 70, 365, 'Hold', 41, 33),
(18, 47, '2022-06-24', '$ACES downtrend parah, karena big fund asing ada yg keluar...mirip2 ama $UNVR dan $TLKM kemaren... tapi tetep potential karena siapa tahu ada big fund lain yg nyerok nanti...\r\ndr segi dividen sangat lumayan, payout ratio ~50%, dgn yield 2.6%... meman', 'ACES', 1200, 770, 365, 'Hold', 15, 36),
(19, 48, '2022-06-02', '$COCO pengendali baru semangat baru untuk menggenjot revenue serta laba dengan mengakuisisi PT. Dlanier Gaya Indonesia, Perseroan juga telah merencakan akan membeli mesin baru dari eropa tahun lalu namun tertunda pertengahan tahun ini dan juga perser', 'COCO', 500, 208, 365, 'Hold', 47, 39),
(20, 48, '2022-06-09', '$TMAS\r\n\r\nAlon alon mase..🔥\r\nSemoga RUPS nya bawa angin segar..\r\n\r\n$BSSR $BBRI $SMDR $ADMR', 'TMAS', 2870, 2720, 26, 'Hold', 23, 27),
(21, 48, '2022-05-12', '$BBRI\r\n\r\nsemoga kejemput klo rejeki 👍\r\nSambil wait n see WL yang lagi diskon gede2an 🤔🤔\r\n\r\nRandom tag $BBCA $BBNI $ADRO $BSSR', 'BBRI', 4000, 4320, 7, 'Hit', 62, 47),
(22, 49, '2022-07-05', '$BUMI setelah dihitung-hitung\r\nTags: $SMDR $PTBA $ITMG $BBCA', 'BUMI', 125, 70, 60, 'Hold', 18, 33),
(23, 49, '2022-06-29', '$IHSG $BBRI kalau ARB 35% bakal nyentuh 3500', 'BBRI', 3850, 4180, 36, 'Hold', 23, 33),
(24, 50, '2022-07-05', '$SGER FALLING WEDGE ? ', 'SGER', 1540, 1390, 7, 'Hold', 22, 41),
(25, 50, '2022-07-04', '$ANTM KALAH LAWAN CRAZY RICH SURABAYA 1,1 TON EMAS\r\nBEARISH TREND HINGGA KE LEVEL 1500-an ?\r\n\r\nBANDAR DISTRIBUSI : CS KZ AK BB ', 'ANTM', 1650, 1750, 30, 'Hold', 22, 26),
(26, 51, '2022-06-02', '$COCO pengendali baru semangat baru untuk menggenjot revenue serta laba dengan mengakuisisi PT. Dlanier Gaya Indonesia, Perseroan juga telah merencakan akan membeli mesin baru dari eropa tahun lalu namun tertunda pertengahan tahun ini dan juga perser', 'COCO', 500, 208, 365, 'Hold', 22, 13),
(27, 51, '2022-01-11', 'waktu $BUKA IPO lgsg ARA, saya prediksi harganya bakal turun separo ke 425 perak dan sudah hit bbrp waktu yg lalu.\r\n\r\nSekararang saya mau prediksi lagi harganya turun ke 250 perak dalam jangka waktu 1 taun, apakah yg ini bakal hit jg?\r\n\r\nSaya bukan t', 'BUKA', 250, 448, 365, 'Hit', 32, 48),
(28, 51, '2022-04-19', 'Update peta jalan $AVIA : Paint My Love\r\n\r\nsetelah kita BoW AVIA sesuai postingan di tautan https://stockbit.com/post/8308082, saatnya kita ambil untung di area sesuai gambar berikut:\r\n\r\nkita jual bertahap dengan target terdekat di 830, 860 dan saya ', 'AVIA', 910, 820, 30, 'Loss', 25, 29);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `analysis`
--
ALTER TABLE `analysis`
  ADD PRIMARY KEY (`analysisID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `analysis`
--
ALTER TABLE `analysis`
  MODIFY `analysisID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
