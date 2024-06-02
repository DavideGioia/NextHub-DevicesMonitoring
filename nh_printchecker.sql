-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Mar 10, 2024 alle 14:26
-- Versione del server: 5.7.42-0ubuntu0.18.04.1
-- Versione PHP: 7.2.24-0ubuntu0.18.04.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nh_printchecker`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `black`
--

CREATE TABLE `black` (
  `ID` int(11) NOT NULL,
  `pages` int(11) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `printerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `black`
--

INSERT INTO `black` (`ID`, `pages`, `percentage`, `date`, `stock`, `printerID`) VALUES
(1, NULL, NULL, NULL, 0, 1),
(2, NULL, NULL, NULL, 0, 2),
(3, NULL, NULL, NULL, 0, 3),
(4, NULL, NULL, NULL, 0, 4),
(5, NULL, NULL, NULL, 0, 5),
(6, NULL, NULL, NULL, 0, 6),
(7, NULL, NULL, NULL, 0, 7),
(8, NULL, NULL, NULL, 0, 8),
(9, NULL, NULL, NULL, 0, 9),
(10, NULL, NULL, NULL, 0, 10),
(11, NULL, NULL, NULL, 0, 11),
(12, NULL, NULL, NULL, 0, 12),
(13, NULL, NULL, NULL, 0, 13),
(14, NULL, NULL, NULL, 0, 14),
(15, NULL, NULL, NULL, 0, 15),
(16, NULL, NULL, NULL, 0, 16),
(17, NULL, NULL, NULL, 0, 17),
(18, NULL, NULL, NULL, 0, 18),
(19, NULL, NULL, NULL, 0, 19),
(20, NULL, NULL, NULL, 0, 20),
(21, NULL, NULL, NULL, 0, 21),
(22, NULL, NULL, NULL, 0, 22),
(23, NULL, NULL, NULL, 0, 23),
(24, NULL, NULL, NULL, 0, 24),
(25, NULL, NULL, NULL, 0, 25),
(26, NULL, NULL, NULL, 0, 26),
(27, NULL, NULL, NULL, 0, 27),
(28, NULL, NULL, NULL, 0, 28),
(29, NULL, NULL, NULL, 0, 29),
(30, NULL, NULL, NULL, 0, 30),
(31, NULL, NULL, NULL, 0, 31),
(32, NULL, NULL, NULL, 0, 32),
(33, NULL, NULL, NULL, 0, 33),
(34, NULL, NULL, NULL, 0, 34),
(35, NULL, NULL, NULL, 0, 35),
(36, NULL, NULL, NULL, 0, 36),
(37, NULL, NULL, NULL, 0, 37),
(38, NULL, NULL, NULL, 0, 38),
(39, NULL, NULL, NULL, 0, 39),
(40, NULL, NULL, NULL, 0, 40),
(41, NULL, NULL, NULL, 0, 41),
(42, NULL, NULL, NULL, 0, 42),
(43, NULL, NULL, NULL, 0, 43),
(44, NULL, NULL, NULL, 0, 44),
(45, NULL, NULL, NULL, 0, 45),
(46, NULL, NULL, NULL, 0, 46),
(47, NULL, NULL, NULL, 0, 47),
(48, NULL, NULL, NULL, 0, 48),
(49, NULL, NULL, NULL, 0, 49),
(50, NULL, NULL, NULL, 0, 50),
(51, NULL, NULL, NULL, 0, 51),
(52, NULL, NULL, NULL, 0, 52),
(53, NULL, NULL, NULL, 0, 53),
(54, NULL, NULL, NULL, 0, 54),
(55, NULL, NULL, NULL, 0, 55),
(56, NULL, NULL, NULL, 0, 56),
(57, NULL, NULL, NULL, 0, 57),
(58, NULL, NULL, NULL, 0, 58),
(59, NULL, NULL, NULL, 0, 59),
(60, NULL, NULL, NULL, 0, 60),
(61, NULL, NULL, NULL, 0, 61),
(62, NULL, NULL, NULL, 0, 62),
(63, NULL, NULL, NULL, 0, 63),
(64, NULL, NULL, NULL, 0, 64),
(65, NULL, NULL, NULL, 0, 65),
(66, NULL, NULL, NULL, 0, 66),
(67, NULL, NULL, NULL, 0, 67),
(68, NULL, NULL, NULL, 0, 68),
(69, NULL, NULL, NULL, 0, 69),
(70, NULL, NULL, NULL, 0, 70),
(71, NULL, NULL, NULL, 0, 71),
(72, NULL, NULL, NULL, 0, 72),
(73, NULL, NULL, NULL, 0, 73),
(74, NULL, NULL, NULL, 0, 74),
(75, NULL, NULL, NULL, 0, 75),
(76, NULL, NULL, NULL, 0, 76),
(77, NULL, NULL, NULL, 0, 77),
(78, NULL, NULL, NULL, 0, 78),
(79, NULL, NULL, NULL, 0, 79),
(80, NULL, NULL, NULL, 0, 80),
(81, NULL, NULL, NULL, 0, 81),
(82, NULL, NULL, NULL, 0, 82),
(83, NULL, NULL, NULL, 0, 83),
(84, NULL, NULL, NULL, 0, 84),
(85, NULL, NULL, NULL, 0, 85),
(86, NULL, NULL, NULL, 0, 86);

-- --------------------------------------------------------

--
-- Struttura della tabella `cyan`
--

CREATE TABLE `cyan` (
  `ID` int(11) NOT NULL,
  `pages` int(11) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `printerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `cyan`
--

INSERT INTO `cyan` (`ID`, `pages`, `percentage`, `date`, `stock`, `printerID`) VALUES
(1, NULL, NULL, NULL, 0, 1),
(2, NULL, NULL, NULL, 0, 2),
(3, NULL, NULL, NULL, 0, 3),
(4, NULL, NULL, NULL, 0, 4),
(5, NULL, NULL, NULL, 0, 5),
(6, NULL, NULL, NULL, 0, 6),
(7, NULL, NULL, NULL, 0, 7),
(8, NULL, NULL, NULL, 0, 8),
(9, NULL, NULL, NULL, 0, 9),
(10, NULL, NULL, NULL, 0, 10),
(11, NULL, NULL, NULL, 0, 11),
(12, NULL, NULL, NULL, 0, 12),
(13, NULL, NULL, NULL, 0, 13),
(14, NULL, NULL, NULL, 0, 14),
(15, NULL, NULL, NULL, 0, 15),
(16, NULL, NULL, NULL, 0, 16),
(17, NULL, NULL, NULL, 0, 17),
(18, NULL, NULL, NULL, 0, 18),
(19, NULL, NULL, NULL, 0, 19),
(20, NULL, NULL, NULL, 0, 20),
(21, NULL, NULL, NULL, 0, 21),
(22, NULL, NULL, NULL, 0, 22),
(23, NULL, NULL, NULL, 0, 23),
(24, NULL, NULL, NULL, 0, 24),
(25, NULL, NULL, NULL, 0, 25),
(26, NULL, NULL, NULL, 0, 26),
(27, NULL, NULL, NULL, 0, 27),
(28, NULL, NULL, NULL, 0, 28),
(29, NULL, NULL, NULL, 0, 29),
(30, NULL, NULL, NULL, 0, 30),
(31, NULL, NULL, NULL, 0, 31),
(32, NULL, NULL, NULL, 0, 32),
(33, NULL, NULL, NULL, 0, 33),
(34, NULL, NULL, NULL, 0, 34),
(35, NULL, NULL, NULL, 0, 35),
(36, NULL, NULL, NULL, 0, 36),
(37, NULL, NULL, NULL, 0, 37),
(38, NULL, NULL, NULL, 0, 38),
(39, NULL, NULL, NULL, 0, 39),
(40, NULL, NULL, NULL, 0, 40),
(41, NULL, NULL, NULL, 0, 41),
(42, NULL, NULL, NULL, 0, 42),
(43, NULL, NULL, NULL, 0, 43),
(44, NULL, NULL, NULL, 0, 44),
(45, NULL, NULL, NULL, 0, 45),
(46, NULL, NULL, NULL, 0, 46),
(47, NULL, NULL, NULL, 0, 47),
(48, NULL, NULL, NULL, 0, 48),
(49, NULL, NULL, NULL, 0, 49),
(50, NULL, NULL, NULL, 0, 50),
(51, NULL, NULL, NULL, 0, 51),
(52, NULL, NULL, NULL, 0, 52),
(53, NULL, NULL, NULL, 0, 53),
(54, NULL, NULL, NULL, 0, 54),
(55, NULL, NULL, NULL, 0, 55),
(56, NULL, NULL, NULL, 0, 56),
(57, NULL, NULL, NULL, 0, 57),
(58, NULL, NULL, NULL, 0, 58),
(59, NULL, NULL, NULL, 0, 59),
(60, NULL, NULL, NULL, 0, 60),
(61, NULL, NULL, NULL, 0, 61),
(62, NULL, NULL, NULL, 0, 62),
(63, NULL, NULL, NULL, 0, 63),
(64, NULL, NULL, NULL, 0, 64),
(65, NULL, NULL, NULL, 0, 65),
(66, NULL, NULL, NULL, 0, 66),
(67, NULL, NULL, NULL, 0, 67),
(68, NULL, NULL, NULL, 0, 68),
(69, NULL, NULL, NULL, 0, 69),
(70, NULL, NULL, NULL, 0, 70),
(71, NULL, NULL, NULL, 0, 71),
(72, NULL, NULL, NULL, 0, 72),
(73, NULL, NULL, NULL, 0, 73),
(74, NULL, NULL, NULL, 0, 74),
(75, NULL, NULL, NULL, 0, 75),
(76, NULL, NULL, NULL, 0, 76),
(77, NULL, NULL, NULL, 0, 77),
(78, NULL, NULL, NULL, 0, 78),
(79, NULL, NULL, NULL, 0, 79),
(80, NULL, NULL, NULL, 0, 80),
(81, NULL, NULL, NULL, 0, 81),
(82, NULL, NULL, NULL, 0, 82),
(83, NULL, NULL, NULL, 0, 83),
(84, NULL, NULL, NULL, 0, 84),
(85, NULL, NULL, NULL, 0, 85),
(86, NULL, NULL, NULL, 0, 86);

-- --------------------------------------------------------

--
-- Struttura della tabella `magenta`
--

CREATE TABLE `magenta` (
  `ID` int(11) NOT NULL,
  `pages` int(11) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `printerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `magenta`
--

INSERT INTO `magenta` (`ID`, `pages`, `percentage`, `date`, `stock`, `printerID`) VALUES
(1, NULL, NULL, NULL, 0, 1),
(2, NULL, NULL, NULL, 0, 2),
(3, NULL, NULL, NULL, 0, 3),
(4, NULL, NULL, NULL, 0, 4),
(5, NULL, NULL, NULL, 0, 5),
(6, NULL, NULL, NULL, 0, 6),
(7, NULL, NULL, NULL, 0, 7),
(8, NULL, NULL, NULL, 0, 8),
(9, NULL, NULL, NULL, 0, 9),
(10, NULL, NULL, NULL, 0, 10),
(11, NULL, NULL, NULL, 0, 11),
(12, NULL, NULL, NULL, 0, 12),
(13, NULL, NULL, NULL, 0, 13),
(14, NULL, NULL, NULL, 0, 14),
(15, NULL, NULL, NULL, 0, 15),
(16, NULL, NULL, NULL, 0, 16),
(17, NULL, NULL, NULL, 0, 17),
(18, NULL, NULL, NULL, 0, 18),
(19, NULL, NULL, NULL, 0, 19),
(20, NULL, NULL, NULL, 0, 20),
(21, NULL, NULL, NULL, 0, 21),
(22, NULL, NULL, NULL, 0, 22),
(23, NULL, NULL, NULL, 0, 23),
(24, NULL, NULL, NULL, 0, 24),
(25, NULL, NULL, NULL, 0, 25),
(26, NULL, NULL, NULL, 0, 26),
(27, NULL, NULL, NULL, 0, 27),
(28, NULL, NULL, NULL, 0, 28),
(29, NULL, NULL, NULL, 0, 29),
(30, NULL, NULL, NULL, 0, 30),
(31, NULL, NULL, NULL, 0, 31),
(32, NULL, NULL, NULL, 0, 32),
(33, NULL, NULL, NULL, 0, 33),
(34, NULL, NULL, NULL, 0, 34),
(35, NULL, NULL, NULL, 0, 35),
(36, NULL, NULL, NULL, 0, 36),
(37, NULL, NULL, NULL, 0, 37),
(38, NULL, NULL, NULL, 0, 38),
(39, NULL, NULL, NULL, 0, 39),
(40, NULL, NULL, NULL, 0, 40),
(41, NULL, NULL, NULL, 0, 41),
(42, NULL, NULL, NULL, 0, 42),
(43, NULL, NULL, NULL, 0, 43),
(44, NULL, NULL, NULL, 0, 44),
(45, NULL, NULL, NULL, 0, 45),
(46, NULL, NULL, NULL, 0, 46),
(47, NULL, NULL, NULL, 0, 47),
(48, NULL, NULL, NULL, 0, 48),
(49, NULL, NULL, NULL, 0, 49),
(50, NULL, NULL, NULL, 0, 50),
(51, NULL, NULL, NULL, 0, 51),
(52, NULL, NULL, NULL, 0, 52),
(53, NULL, NULL, NULL, 0, 53),
(54, NULL, NULL, NULL, 0, 54),
(55, NULL, NULL, NULL, 0, 55),
(56, NULL, NULL, NULL, 0, 56),
(57, NULL, NULL, NULL, 0, 57),
(58, NULL, NULL, NULL, 0, 58),
(59, NULL, NULL, NULL, 0, 59),
(60, NULL, NULL, NULL, 0, 60),
(61, NULL, NULL, NULL, 0, 61),
(62, NULL, NULL, NULL, 0, 62),
(63, NULL, NULL, NULL, 0, 63),
(64, NULL, NULL, NULL, 0, 64),
(65, NULL, NULL, NULL, 0, 65),
(66, NULL, NULL, NULL, 0, 66),
(67, NULL, NULL, NULL, 0, 67),
(68, NULL, NULL, NULL, 0, 68),
(69, NULL, NULL, NULL, 0, 69),
(70, NULL, NULL, NULL, 0, 70),
(71, NULL, NULL, NULL, 0, 71),
(72, NULL, NULL, NULL, 0, 72),
(73, NULL, NULL, NULL, 0, 73),
(74, NULL, NULL, NULL, 0, 74),
(75, NULL, NULL, NULL, 0, 75),
(76, NULL, NULL, NULL, 0, 76),
(77, NULL, NULL, NULL, 0, 77),
(78, NULL, NULL, NULL, 0, 78),
(79, NULL, NULL, NULL, 0, 79),
(80, NULL, NULL, NULL, 0, 80),
(81, NULL, NULL, NULL, 0, 81),
(82, NULL, NULL, NULL, 0, 82),
(83, NULL, NULL, NULL, 0, 83),
(84, NULL, NULL, NULL, 0, 84),
(85, NULL, NULL, NULL, 0, 85),
(86, NULL, NULL, NULL, 0, 86);

-- --------------------------------------------------------

--
-- Struttura della tabella `printer`
--

CREATE TABLE `printer` (
  `ID` int(11) NOT NULL,
  `society` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `error` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `printer`
--

INSERT INTO `printer` (`ID`, `society`, `name`, `model`, `ip`, `error`) VALUES
(1, 'Elite', 'Anagnina', '477', '10.0.66.46', 0),
(2, 'Elite', 'Aurelia', '477', '10.0.68.46', 0),
(3, 'Elite', 'Maggiona Teodoli', '477', '192.168.168.116', 0),
(4, 'Elite', 'Pomezia Presidente Fedeli', '477', '192.168.168.118', 0),
(5, 'Elite', 'Arno', 'MFP', '10.0.13.46', 0),
(6, 'Elite', 'Laurentina', 'MFP', '10.0.15.46', 0),
(7, 'Elite', 'Ojetti', '477', '10.0.46.47', 0),
(8, 'Elite', 'Colombo', '477', '10.0.14.46', 0),
(9, 'Elite', 'Corcolle', '477', '10.0.60.46', 0),
(10, 'Elite', 'Uffici Poli', '477', '10.0.73.46', 0),
(11, 'Elite', 'PET Corazzieri', '477', '10.0.72.46', 0),
(12, 'Elite', 'Spaducci', '477', '10.0.71.45', 0),
(13, 'Elite', 'Cavriglia', '477', '10.0.75.46', 0),
(14, 'Elite', 'Uffici Appiani Valentina', '477', '10.0.74.47', 0),
(15, 'Elite', 'Uffici Appiani Daniela', '477', '10.0.74.48', 0),
(16, 'Elite', 'Tecnica', '477', '10.0.10.46', 0),
(17, 'Elite', 'Colonna', '477', '10.0.59.46', 0),
(18, 'Elite', 'Fiumicino', '477', '10.0.57.46', 0),
(19, 'Elite', 'Vallone', '477', '10.0.27.46', 0),
(20, 'Elite', 'Tagliamento', '477', '10.0.76.46', 0),
(21, 'Elite', 'Casal Selce', '477', '10.0.26.46', 0),
(22, 'Elite', 'Uff. Magazzino Massim Pace 135', 'OTHER', '192.168.168.135', 0),
(23, 'Elite', 'Uff. Magazzino Massim Pace 53', 'OTHER', '192.168.168.53', 0),
(24, 'Elite', 'Borgo Sabotino 47', 'OTHER', '10.0.43.47', 0),
(25, 'Elite', 'Borgo Sabotino 48', 'OTHER', '10.0.43.48', 0),
(26, 'Elite', 'Ittica Trigoria', 'OTHER', '10.0.50.47', 0),
(27, 'Elite', 'Santa Marinella 2', '477', '10.0.41.46', 0),
(28, 'Elite', 'Calisse', '477', '10.0.35.46', 0),
(29, 'Elite', 'PET Priscilla', '477', '10.0.78.46', 0),
(30, 'Elite', 'Uff Freschi Pomezia Xerox 2', 'XEROX', '192.168.168.163', 0),
(31, 'Elite', 'Uff Mancini Pomezia Xerox 1', 'XEROX', '192.168.168.82', 0),
(32, 'Elite', 'Gargano', '477', '10.0.80.46', 0),
(33, 'Elite', 'Trigoria', '477', '10.0.63.10', 0),
(34, 'Elite', 'Ufficio Laura Ascenzi', '477', '192.168.168.69', 0),
(35, 'Elite', 'Ufficio Rifatturazione', '477', '192.168.168.70', 0),
(36, 'Elite', 'Salisburgo', '477', '10.0.17.46', 0),
(37, 'Elite', 'Parco Enea', '477', '10.0.81.46', 0),
(38, 'Elite', 'PET Enea', '477', '10.0.82.46', 0),
(39, 'Elite', 'Donatella Roca', 'OTHER', '192.168.168.138', 0),
(40, 'Elite', 'Monte Argentario', 'MFP', '10.0.29.46', 0),
(41, 'Elite', 'Morena', 'MFP', '10.0.51.49', 0),
(42, 'Pewex', 'Tuscolana', 'MFP', '192.168.16.46', 0),
(43, 'Pewex', 'PDV Tor Bella Monaca', '477', '192.168.101.44', 0),
(44, 'Pewex', 'Direttore Tor Bella Monaca', '477', '192.168.101.46', 0),
(45, 'Pewex', 'Serafini', '477', '192.168.102.46', 0),
(46, 'Pewex', 'Serafico', '477', '192.168.103.46', 0),
(47, 'Pewex', 'Grottaperfetta', '477', '192.168.104.46', 0),
(48, 'Pewex', 'Gulliver', '477', '192.168.105.46', 0),
(49, 'Pewex', 'Quaglia', '477', '192.168.106.46', 0),
(50, 'Pewex', 'Quaglia Direttore', '477', '192.168.106.47', 0),
(51, 'Pewex', 'Tivoli', '477', '192.168.108.46', 0),
(52, 'Pewex', 'Barbaro', 'MFP', '192.168.109.46', 0),
(53, 'Pewex', 'Pantano', '477', '192.168.111.46', 0),
(54, 'Pewex', 'Ciampino Direttore', '477', '192.168.211.49', 0),
(55, 'Pewex', 'Ciampino Box', 'MFP', '192.168.211.50', 0),
(56, 'Pewex', 'Anguillara', '477', '192.168.118.46', 0),
(57, 'Pewex', 'Morin', '477', '192.168.123.46', 0),
(58, 'Pewex', 'Fiano Romano', '477', '192.168.119.46', 0),
(59, 'Pewex', 'Cassia 2', '477', '192.168.120.46', 0),
(60, 'Pewex', 'UFF TBM Personale', '477', '192.168.148.101', 0),
(61, 'Pewex', 'TBM Ufficio Stilo', '477', '192.168.148.110', 0),
(62, 'Pewex', 'TBM Ufficio HR', '477', '192.168.148.112', 0),
(63, 'Pewex', 'Uffici Nuovi TBM Corridoio', '477', '192.168.148.113', 0),
(64, 'Pewex', 'Uffici Nuovi TBM Uff. Passivo', '477', '192.168.148.114', 0),
(65, 'Pewex', 'Uffici Nuovi TBM Respons Sicurezza', '477', '192.168.148.118', 0),
(66, 'Pewex', 'San Cesareo', '477', '192.168.122.46', 0),
(67, 'Pewex', 'Fregene', 'MFP', '192.168.113.46', 0),
(68, 'Pewex', 'Colli Aniene', 'MFP', '192.168.121.46', 0),
(69, 'Pewex', 'Cassia Box', '477', '192.168.110.46', 0),
(70, 'Pewex', 'Cassia Ufficio', '477', '192.168.110.47', 0),
(71, 'Pewex', 'Ostia', '477', '192.168.124.46', 0),
(72, 'Pewex', 'Uffici Panama', '477', '192.168.249.120', 0),
(73, 'Pewex', 'Uffici Casilina P77740z', 'P77', '192.168.149.101', 0),
(74, 'Pewex', 'Uffici Casilina Uff Commerciale', '477', '192.168.149.116', 0),
(75, 'Pewex', 'Uffici Casilina Reception', '477', '192.168.149.114', 0),
(76, 'Pewex', 'Uffici Casilina Magazzino', '477', '192.168.149.121', 0),
(77, 'Pewex', 'Uffici Casiina Ufficio Attivo', '477', '192.168.149.122', 0),
(78, 'Pewex', 'Uffici Casilina Marta Valete', '477', '192.168.149.103', 0),
(79, 'Pewex', 'Gela', '477', '192.168.126.46', 0),
(80, 'Pewex', 'Radio', '477', '192.168.125.46', 0),
(81, 'Pewex', 'Fabio Massimo', '477', '192.168.115.46', 0),
(82, 'Pewex', 'XX Settembre', '477', '192.168.128.46', 0),
(83, 'Pewex', 'Cola Di Rienzo', '477', '192.168.112.48', 0),
(84, 'Pewex', 'Magliana', '477', '192.168.130.46', 0),
(85, 'Pewex', 'Navigatori', 'MFP', '192.168.131.46', 0),
(86, 'Pewex', 'La Nave', 'MFP', '192.168.107.46', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `yellow`
--

CREATE TABLE `yellow` (
  `ID` int(11) NOT NULL,
  `pages` int(11) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `printerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `yellow`
--

INSERT INTO `yellow` (`ID`, `pages`, `percentage`, `date`, `stock`, `printerID`) VALUES
(1, NULL, NULL, NULL, 0, 1),
(2, NULL, NULL, NULL, 0, 2),
(3, NULL, NULL, NULL, 0, 3),
(4, NULL, NULL, NULL, 0, 4),
(5, NULL, NULL, NULL, 0, 5),
(6, NULL, NULL, NULL, 0, 6),
(7, NULL, NULL, NULL, 0, 7),
(8, NULL, NULL, NULL, 0, 8),
(9, NULL, NULL, NULL, 0, 9),
(10, NULL, NULL, NULL, 0, 10),
(11, NULL, NULL, NULL, 0, 11),
(12, NULL, NULL, NULL, 0, 12),
(13, NULL, NULL, NULL, 0, 13),
(14, NULL, NULL, NULL, 0, 14),
(15, NULL, NULL, NULL, 0, 15),
(16, NULL, NULL, NULL, 0, 16),
(17, NULL, NULL, NULL, 0, 17),
(18, NULL, NULL, NULL, 0, 18),
(19, NULL, NULL, NULL, 0, 19),
(20, NULL, NULL, NULL, 0, 20),
(21, NULL, NULL, NULL, 0, 21),
(22, NULL, NULL, NULL, 0, 22),
(23, NULL, NULL, NULL, 0, 23),
(24, NULL, NULL, NULL, 0, 24),
(25, NULL, NULL, NULL, 0, 25),
(26, NULL, NULL, NULL, 0, 26),
(27, NULL, NULL, NULL, 0, 27),
(28, NULL, NULL, NULL, 0, 28),
(29, NULL, NULL, NULL, 0, 29),
(30, NULL, NULL, NULL, 0, 30),
(31, NULL, NULL, NULL, 0, 31),
(32, NULL, NULL, NULL, 0, 32),
(33, NULL, NULL, NULL, 0, 33),
(34, NULL, NULL, NULL, 0, 34),
(35, NULL, NULL, NULL, 0, 35),
(36, NULL, NULL, NULL, 0, 36),
(37, NULL, NULL, NULL, 0, 37),
(38, NULL, NULL, NULL, 0, 38),
(39, NULL, NULL, NULL, 0, 39),
(40, NULL, NULL, NULL, 0, 40),
(41, NULL, NULL, NULL, 0, 41),
(42, NULL, NULL, NULL, 0, 42),
(43, NULL, NULL, NULL, 0, 43),
(44, NULL, NULL, NULL, 0, 44),
(45, NULL, NULL, NULL, 0, 45),
(46, NULL, NULL, NULL, 0, 46),
(47, NULL, NULL, NULL, 0, 47),
(48, NULL, NULL, NULL, 0, 48),
(49, NULL, NULL, NULL, 0, 49),
(50, NULL, NULL, NULL, 0, 50),
(51, NULL, NULL, NULL, 0, 51),
(52, NULL, NULL, NULL, 0, 52),
(53, NULL, NULL, NULL, 0, 53),
(54, NULL, NULL, NULL, 0, 54),
(55, NULL, NULL, NULL, 0, 55),
(56, NULL, NULL, NULL, 0, 56),
(57, NULL, NULL, NULL, 0, 57),
(58, NULL, NULL, NULL, 0, 58),
(59, NULL, NULL, NULL, 0, 59),
(60, NULL, NULL, NULL, 0, 60),
(61, NULL, NULL, NULL, 0, 61),
(62, NULL, NULL, NULL, 0, 62),
(63, NULL, NULL, NULL, 0, 63),
(64, NULL, NULL, NULL, 0, 64),
(65, NULL, NULL, NULL, 0, 65),
(66, NULL, NULL, NULL, 0, 66),
(67, NULL, NULL, NULL, 0, 67),
(68, NULL, NULL, NULL, 0, 68),
(69, NULL, NULL, NULL, 0, 69),
(70, NULL, NULL, NULL, 0, 70),
(71, NULL, NULL, NULL, 0, 71),
(72, NULL, NULL, NULL, 0, 72),
(73, NULL, NULL, NULL, 0, 73),
(74, NULL, NULL, NULL, 0, 74),
(75, NULL, NULL, NULL, 0, 75),
(76, NULL, NULL, NULL, 0, 76),
(77, NULL, NULL, NULL, 0, 77),
(78, NULL, NULL, NULL, 0, 78),
(79, NULL, NULL, NULL, 0, 79),
(80, NULL, NULL, NULL, 0, 80),
(81, NULL, NULL, NULL, 0, 81),
(82, NULL, NULL, NULL, 0, 82),
(83, NULL, NULL, NULL, 0, 83),
(84, NULL, NULL, NULL, 0, 84),
(85, NULL, NULL, NULL, 0, 85),
(86, NULL, NULL, NULL, 0, 86);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `black`
--
ALTER TABLE `black`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`),
  ADD KEY `black_printerID` (`printerID`);

--
-- Indici per le tabelle `cyan`
--
ALTER TABLE `cyan`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`),
  ADD KEY `cyan_printerID` (`printerID`);

--
-- Indici per le tabelle `magenta`
--
ALTER TABLE `magenta`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`),
  ADD KEY `magenta_printerID` (`printerID`);

--
-- Indici per le tabelle `printer`
--
ALTER TABLE `printer`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`),
  ADD KEY `model` (`model`);

--
-- Indici per le tabelle `yellow`
--
ALTER TABLE `yellow`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`),
  ADD KEY `yellow_printerID` (`printerID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `black`
--
ALTER TABLE `black`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- AUTO_INCREMENT per la tabella `cyan`
--
ALTER TABLE `cyan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- AUTO_INCREMENT per la tabella `magenta`
--
ALTER TABLE `magenta`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- AUTO_INCREMENT per la tabella `printer`
--
ALTER TABLE `printer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- AUTO_INCREMENT per la tabella `yellow`
--
ALTER TABLE `yellow`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `black`
--
ALTER TABLE `black`
  ADD CONSTRAINT `black_printerID` FOREIGN KEY (`printerID`) REFERENCES `printer` (`ID`) ON DELETE CASCADE;

--
-- Limiti per la tabella `cyan`
--
ALTER TABLE `cyan`
  ADD CONSTRAINT `cyan_printerID` FOREIGN KEY (`printerID`) REFERENCES `printer` (`ID`) ON DELETE CASCADE;

--
-- Limiti per la tabella `magenta`
--
ALTER TABLE `magenta`
  ADD CONSTRAINT `magenta_printerID` FOREIGN KEY (`printerID`) REFERENCES `printer` (`ID`) ON DELETE CASCADE;

--
-- Limiti per la tabella `yellow`
--
ALTER TABLE `yellow`
  ADD CONSTRAINT `yellow_printerID` FOREIGN KEY (`printerID`) REFERENCES `printer` (`ID`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
