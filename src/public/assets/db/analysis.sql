-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2022 at 04:10 PM
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
(1, 41, '2022-04-05', 'Secara fundamental masih cukup menarik', 'BBCA', 8000, 7500, 13, 'Hit', 356, 253),
(2, 41, '2022-04-06', 'Secara teknikal ada potensi rebound', 'EKAD', 1800, 1200, 15, 'Loss', 2, 2),
(16, 47, '2022-06-29', '$IHSG $BBRI kalau ARB 35% bakal nyentuh 3500', 'BBRI', 3850, 4180, 90, 'Hold', 36, 44),
(17, 47, '2022-07-05', '$BUMI setelah dihitung-hitung\r\nTags: $SMDR $PTBA $ITMG $BBCA', 'BUMI', 125, 70, 365, 'Hold', 41, 33),
(18, 47, '2022-06-24', '$ACES downtrend parah, karena big fund asing ada yg keluar...mirip2 ama $UNVR dan $TLKM kemaren... tapi tetep potential karena siapa tahu ada big fund lain yg nyerok nanti...\r\ndr segi dividen sangat lumayan, payout ratio ~50%, dgn yield 2.6%... meman', 'ACES', 1200, 770, 365, 'Hold', 15, 36),
(20, 48, '2022-06-09', '$TMAS\r\n\r\nAlon alon mase..🔥\r\nSemoga RUPS nya bawa angin segar..\r\n\r\n$BSSR $BBRI $SMDR $ADMR', 'TMAS', 2870, 2720, 260, 'Hold', 23, 27),
(21, 48, '2022-05-12', '$BBRI\r\n\r\nsemoga kejemput klo rejeki 👍\r\nSambil wait n see WL yang lagi diskon gede2an 🤔🤔\r\n\r\nRandom tag $BBCA $BBNI $ADRO $BSSR', 'BBRI', 4000, 4320, 7, 'Hit', 62, 47),
(22, 49, '2022-07-05', '$BUMI setelah dihitung-hitung\r\nTags: $SMDR $PTBA $ITMG $BBCA', 'BUMI', 125, 70, 60, 'Hold', 18, 33),
(23, 49, '2022-06-29', '$IHSG $BBRI kalau ARB 35% bakal nyentuh 3500', 'BBRI', 3850, 4180, 36, 'Hold', 23, 33),
(29, 50, '2022-07-09', '$SMDR golden ratio 0,618', 'SMDR', 3000, 2500, 90, 'Hold', 45, 2),
(30, 50, '2022-07-07', 'PTBA kok bisa ya harga masih segini2 saja disaat coal kembali 400$ 🤔', 'PTBA', 4500, 3850, 180, 'Hold', 345, 23),
(31, 51, '2022-07-08', '$ADRO buyback terus pak boss.. Buyback saham mengurangi jumlah saham yang ada sehingga membuat masing-masing saham bernilai persentase yang lebih besar dari perusahaan. Dengan demikian, laba per saham (Earning per Share/EPS) saham meningkat sedangkan', 'ADRO', 5000, 2750, 90, 'Hold', 79, 34),
(32, 51, '2022-07-07', '$BBNI my best friend BANK BUMN☕', 'BBNI', 8700, 7650, 90, 'Hold', 567, 32);

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
  MODIFY `analysisID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
