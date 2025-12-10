import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function RutaProtegida({ children, soloAdmin = false }) {
  const { isAuthenticated, usuario } = useAuthContext();
  const location = useLocation();

  // Si no está logueado → mandar al login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si la ruta requiere admin → validar usuario
  if (soloAdmin) {
    const esAdmin = usuario?.nombre?.toLowerCase() === "admin";

    if (!esAdmin) {
      return <Navigate to="/productos" replace />;
    }
  }

  // Si pasó todo → mostrar la página
  return children;
}

export default RutaProtegida;



