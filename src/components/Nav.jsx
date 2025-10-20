import React from "react";
import '../styles/App.css'
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <ul><li><Link to="/">Inicio</Link></li></ul>
            <ul><li><Link to="/productos">Productos</Link></li></ul>
            <ul><li><a href="">Servicios</a></li></ul>
            <ul><li><a href="">Nosotros</a></li></ul>
            <ul><li><a href="">Contacto</a></li></ul>
        </nav>
    )
}

export default Nav