import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

const Navbar = ()=>{
    return(
        <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-text">TaxiRide</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-link">Sobre Nós</Link>
          </li>
          <li className="nav-item">
            <Link to="/reserva" className="nav-link">Reservar TAXI</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Entrar</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">Registar</Link>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;