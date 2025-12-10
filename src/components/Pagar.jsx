import { useLocation, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Pagar() {
  const { carrito, vaciarCarrito, sumarCantidad, restarCantidad } = useCartContext();
  const { usuario } = useAuthContext();

  const navigate = useNavigate();

  const parsePrecio = (precio) =>
    Number(precio.replace(/\./g, "").replace(",", "."));

  const total = carrito.reduce(
    (suma, producto) =>
      suma +
      Number(producto.precio.replace(/\./g, "")) *
        Number(producto.cantidad || 1),
    0
  );

  const comprar = () => {
    toast.success("¡Compra realizada con éxito!");
    vaciarCarrito();
    navigate("/productos");
  };

  return (
    <div className="pago-container">
      <div className="pago-user">
        <h2>Bienvenido:</h2>
        <h2>{usuario?.nombre}</h2>
        <p>Email: {usuario?.email}</p>
        <hr />
      </div>

      <div className="pago-items">
        <h2>Tu compra:</h2>

        {carrito.map((i) => (
          <div key={i.id} className="item">
            <img src={i.avatar} alt={i.nombre} />
            <span>{i.nombre}</span>

            {/* BOTONES DE SUMAR / RESTAR */}
            <div className="cantidad-controles">
              <button onClick={() => restarCantidad(i.id)} className="btn-restar">−</button>
              <span className="cantidad">{i.cantidad}</span>
              <button onClick={() => sumarCantidad(i.id)} className="btn-sumar">+</button>
            </div>

            <strong>
              ${i.precio} × {i.cantidad} = {parsePrecio(i.precio) * i.cantidad}
            </strong>
          </div>
        ))}

        <h3 className="total">Total a pagar: ${total}</h3>
      </div>

      <div className="pago-botones">
        <button className="btn-confirmar" onClick={comprar}>
          Confirmar y Pagar
        </button>
        <button className="btn-cancelar" onClick={() => navigate("/productos")}>
          Cancelar
        </button>
      </div>
    </div>
  );
}


