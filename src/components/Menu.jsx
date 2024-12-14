import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <main className="menu-container">
      <img src="img/home/logotipo.png" alt="logotipo" />
      <section>
        <Link to="/">INICIO</Link>
        <Link to="/quienessomos">QUIENES SOMOS</Link>
        <Link to="/tours">TOURS</Link>
        <Link to="/trekking">TREKKING</Link>
        <Link to="/turismo">TURISMO</Link>
        <Link to="/hotel">HOTEL</Link>
        <Link to="/reservas">RESERVAS</Link>
      </section>
    </main>
  );
};
