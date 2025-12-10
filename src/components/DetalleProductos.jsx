import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
  const { category, id } = useParams();  // ← nombre correcto
  const location = useLocation();

  const producto = location.state?.i; // ← propiedad correcta

  if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/productos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <>
  <div className="detalle-container">
    <h2>Detalles del Producto {id}</h2>

    <ul>
      <li key={producto.id}>
        <h3>{producto.nombre}</h3>

        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Categoría:</strong> {category}</p>

        <img src={producto.avatar} alt={producto.nombre} />
      </li>

      <hr />

      <Link to="/productos">
        <button>Volver</button>
      </Link>
    </ul>
  </div>
</>

  );
};

export default ProductoDetalle;
