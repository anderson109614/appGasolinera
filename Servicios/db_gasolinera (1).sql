-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2020 a las 06:13:53
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gasolinera`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autos`
--

CREATE TABLE `autos` (
  `Id` int(11) NOT NULL,
  `Placa` varchar(10) NOT NULL,
  `Id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autos`
--

INSERT INTO `autos` (`Id`, `Placa`, `Id_cliente`) VALUES
(1, 'ABC-123', 1),
(2, 'ABC-234', 2),
(3, 'BCA-543', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Id` int(11) NOT NULL,
  `Cedula` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Id`, `Cedula`, `Nombre`, `Apellido`, `Telefono`, `Direccion`, `Estado`) VALUES
(1, '1801', 'Pedro', 'Montero', '0939180301', 'Patate', 1),
(2, '1802', 'Juan', 'Almeida', '1111111111', 'Pelileo', 1),
(3, '1803', 'Pepe', 'Julio', '09876', 'Ambato', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combustibles`
--

CREATE TABLE `combustibles` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Precio` double NOT NULL,
  `Cant_Disponible` double NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `combustibles`
--

INSERT INTO `combustibles` (`Id`, `Nombre`, `Precio`, `Cant_Disponible`, `Estado`) VALUES
(3, 'Extra', 1.2, 0, 1),
(4, 'Super', 1.8, 72, 1),
(5, 'Diesel', 2, 500, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dispensador`
--

CREATE TABLE `dispensador` (
  `Id` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Id_Maquina` int(11) NOT NULL,
  `Id_Combustible` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `dispensador`
--

INSERT INTO `dispensador` (`Id`, `Descripcion`, `Id_Maquina`, `Id_Combustible`, `Estado`) VALUES
(1, 'Dispensador 1', 1, 3, 1),
(2, 'Dispensador 2', 2, 4, 1),
(3, 'Dispensador 3', 3, 4, 1),
(4, 'Dispensador 4', 4, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `islas`
--

CREATE TABLE `islas` (
  `Id` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Id_Usuario` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `islas`
--

INSERT INTO `islas` (`Id`, `Descripcion`, `Id_Usuario`, `Estado`) VALUES
(1, 'Isla 1', 1, 1),
(2, 'Isla 2', 1, 1),
(3, 'Isla 3', 2, 1),
(4, 'Isla 4', 2, 1),
(5, 'Tra', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquias`
--

CREATE TABLE `maquias` (
  `Id` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Id_Isla` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `maquias`
--

INSERT INTO `maquias` (`Id`, `Descripcion`, `Id_Isla`, `Estado`) VALUES
(1, 'Maquia 1', 1, 1),
(2, 'Maquina 2', 1, 1),
(3, 'Maquina 3', 3, 1),
(4, 'Maquina 4', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`Id`, `Nombre`) VALUES
(1, 'Administrador'),
(2, 'Vendedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Cedula` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Direccion` varchar(50) NOT NULL,
  `Contrasena` varchar(50) NOT NULL,
  `Id_Rol` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Cedula`, `Nombre`, `Apellido`, `Telefono`, `Direccion`, `Contrasena`, `Id_Rol`, `Estado`) VALUES
(1, '1804', 'Pedro', 'Montero', '0939180393', 'Patate 2', '1234', 1, 1),
(2, '1805', 'Juan', 'Alias', '0987686', 'Pelileo', '1234', 2, 1),
(3, '1809', 'p1', 'p1', '123', 'p1', '1234', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `Id` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `ID_Placa` int(11) NOT NULL,
  `ID_Dispensador` int(11) NOT NULL,
  `Cantidad` double NOT NULL,
  `Total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`Id`, `Fecha`, `ID_Placa`, `ID_Dispensador`, `Cantidad`, `Total`) VALUES
(1, '2020-01-12', 1, 3, 5, 9),
(2, '2020-01-12', 1, 3, 5, 9),
(3, '2020-01-12', 1, 3, 5, 9),
(4, '2020-01-12', 1, 3, 2, 3.6),
(5, '2020-01-21', 2, 3, 1, 1.8),
(6, '2020-01-21', 2, 4, 10, 12),
(7, '2020-01-21', 2, 3, 10, 18),
(8, '2020-01-21', 3, 3, 12, 21.6),
(9, '2020-01-21', 3, 3, 2, 3.6),
(10, '2020-01-21', 1, 3, 2, 3.6),
(11, '2020-01-21', 1, 3, 2, 3.6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autos`
--
ALTER TABLE `autos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id_cliente` (`Id_cliente`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `combustibles`
--
ALTER TABLE `combustibles`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `dispensador`
--
ALTER TABLE `dispensador`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_DispensadorMaquina` (`Id_Maquina`),
  ADD KEY `pk_DiepensadorCombustible` (`Id_Combustible`);

--
-- Indices de la tabla `islas`
--
ALTER TABLE `islas`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_IslaUsuario` (`Id_Usuario`);

--
-- Indices de la tabla `maquias`
--
ALTER TABLE `maquias`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `pk_MaquinaIsla` (`Id_Isla`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_usuarioRol` (`Id_Rol`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_VantaAuto` (`ID_Placa`),
  ADD KEY `fk_VentaDispensador` (`ID_Dispensador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autos`
--
ALTER TABLE `autos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `combustibles`
--
ALTER TABLE `combustibles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `dispensador`
--
ALTER TABLE `dispensador`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `islas`
--
ALTER TABLE `islas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `maquias`
--
ALTER TABLE `maquias`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `autos`
--
ALTER TABLE `autos`
  ADD CONSTRAINT `autos_ibfk_1` FOREIGN KEY (`Id_cliente`) REFERENCES `clientes` (`Id`);

--
-- Filtros para la tabla `dispensador`
--
ALTER TABLE `dispensador`
  ADD CONSTRAINT `pk_DiepensadorCombustible` FOREIGN KEY (`Id_Combustible`) REFERENCES `combustibles` (`Id`),
  ADD CONSTRAINT `pk_DispensadorMaquina` FOREIGN KEY (`Id_Maquina`) REFERENCES `maquias` (`Id`);

--
-- Filtros para la tabla `islas`
--
ALTER TABLE `islas`
  ADD CONSTRAINT `pk_IslaUsuario` FOREIGN KEY (`Id_Usuario`) REFERENCES `usuarios` (`Id`);

--
-- Filtros para la tabla `maquias`
--
ALTER TABLE `maquias`
  ADD CONSTRAINT `pk_MaquinaIsla` FOREIGN KEY (`Id_Isla`) REFERENCES `islas` (`Id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarioRol` FOREIGN KEY (`Id_Rol`) REFERENCES `roles` (`Id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `fk_VantaAuto` FOREIGN KEY (`ID_Placa`) REFERENCES `autos` (`Id`),
  ADD CONSTRAINT `fk_VentaDispensador` FOREIGN KEY (`ID_Dispensador`) REFERENCES `dispensador` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
