import React from "react";
import '../styles/App.css'
import hero from '../img/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";




function Nav() {

  const { isAuthenticated, usuario, cerrarSesion } = useAuthContext();
  const { carrito, vaciarCarrito } = useCartContext(); // este sí es del AppContext
  const navigate = useNavigate();
  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  const manejarCerrarSesion = () => {
    navigate("/productos");

    // Tiempo 1'' para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  return (
    <nav className="nav">
      <Link to="/">
      <img src={hero} alt="" className="logo"/></Link>
      <ul><li><Link to="/">Inicio</Link></li></ul>
      <ul><li><Link to="/productos">Productos</Link></li></ul>
      <ul><li><Link to="/nosotros">Nosotros</Link></li></ul>
      <ul><li><Link to="/servicios">Servicios</Link></li></ul>
       {/* SOLO ADMIN */}
      {usuario?.nombre === "admin" && (
        <ul>
          <li>
            <Link to="/agregar-producto">Agregar Producto</Link>
          </li>
        </ul>
        
      )}

      <ul><li>
        <li className="nav-link d-flex align-items-center">
  <Link
    to="/pagar"
    className="d-flex align-items-center text-white"
    style={{ textDecoration: "none" }}
  >
    <span className="me-1"></span>
    <FaShoppingCart />

    {/* Mostrar el número solo si es mayor a 0 */}
    {totalItemsCarrito > 0 && (
      <span className="badge bg-danger ms-1">
        {totalItemsCarrito}
      </span>
    )}
  </Link>
</li>
        {isAuthenticated ? (
          <div>
            <span>Hola, {usuario.nombre}</span>

            {usuario.nombre === "admin" && (
              <Link to="/dashboard" style={{ margin: "0 10px" }}>
                Dashboard
              </Link>
            )}

            <button onClick={manejarCerrarSesion}>Cerrar Sesión</button>
          </div>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </li></ul>
    </nav>
  );
}

export default Nav;
