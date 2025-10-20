import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (i) => setCarrito([...carrito, i]);
  const vaciarCarrito = () => setCarrito([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((datos) => {
        setProductos(datos.products);
        setCargando(false);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="productos">
        {productos.map((i) => (
          <div className="tarjetaProducto" key={i.id}>
            <img src={i.thumbnail} alt={i.title} />
            <h3>{i.title}</h3>
            <p>${i.price}</p>
            <button onClick={() => agregarCarrito(i)}>Agregar</button>
          </div>
        ))}
      </section>

      <div className="carrito">
        <h3>🛒 Carrito</h3>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            {carrito.map((i) => (
              <p key={i.id}>
                {i.title} — ${i.price}
              </p>
            ))}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </>
        )}
      </div>

      <Link to="/">
        <button className="btnVolver">Volver a inicio</button>
      </Link>
    </>
  );
}

export default Productos;
