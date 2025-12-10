import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";

function Productos() {
  const {carrito, vaciarCarrito, agregarAlCarrito, sumarCantidad, restarCantidad} = useCartContext();
  const {usuario} = useAuthContext();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  
  const esAdmin = usuario?.nombre === "admin";
  
  const navigate = useNavigate();
  
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      (producto.categoria &&
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

  useEffect(() => {
    fetch("https://69319edb11a8738467cfc9d7.mockapi.io/api/productos")
      .then((res) => res.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const sumar = (id) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const restar = (id) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  return (
    <div className="products">

      {/* 🔍 BARRA DE BÚSQUEDA AGREGADA */}
      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        className="form-control"
        value={busqueda}
        onChange={manejarBusqueda}
      />

      <section className="productos">

        {/* 🔥 IMPORTANTE: ahora usamos productosFiltrados */}
        {productosFiltrados.map((i) => (
          <div className="tarjetaProducto" key={i.id}>
            <img src={i.avatar} alt={i.nombre} />
            <h3>{i.nombre}</h3>
            <p>${i.precio}</p>

            <button onClick={() => agregarAlCarrito(i)}>Agregar al Carrito</button>

            {esAdmin && (
              <div>
                <hr/>
                <button
                  onClick={() =>
                    navigate("/editar-productos", { state: { producto: i } })
                  }
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Editar
                </button>

                <button
                  onClick={() =>
                    navigate("/eliminar-productos", { state: { producto: i } })
                  }
                  style={{
                    backgroundColor: "#a32838ff",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Eliminar
                </button>
              </div>
            )}

            <Link to={`/productos/${i.categoria || "sin-categoria"}/${i.id}`} state={{i}}>
              <button>Más detalles</button>
            </Link>
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
                {i.nombre} — ${i.precio} — Cantidad: {i.cantidad}
                <button onClick={() => restarCantidad(i.id)}>-</button>
                <button onClick={() => sumarCantidad(i.id)}>+</button>
              </p>
            ))}

            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <button onClick={irAPagar}>Pagar</button>
          </>
        )}
      </div>

      <Link to="/">
        <button className="btnVolver">Volver a inicio</button>
      </Link>

    </div>
  );
}

export default Productos;
