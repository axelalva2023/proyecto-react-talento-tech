import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ListaUsuarios from './components/ListaUsuarios';
import Productos from './components/Productos';
import ProductoDetalle from './components/DetalleProductos';
import Pagar from './components/Pagar';
import RutaProtegida from './components/RutaProtegida';
import Login from './components/Login';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Dashboard from './components/Dashboard';
import EditarProductos from './components/EditarProductos';
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from "./context/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  return (
    <AuthProvider>
      <CartProvider>

        <Nav />

        <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/productos/:category/:id" element={<ProductoDetalle />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Comprar */}
          <Route
            path="/pagar"
            element={
              <RutaProtegida>
                <Pagar />
              </RutaProtegida>
            }
          />

          {/* Admin */}
          <Route
            path="/dashboard"
            element={
              <RutaProtegida soloAdmin={true}>
                <Dashboard />
              </RutaProtegida>
            }
            />
            <Route
            path="/editar-productos"
            element={
              <RutaProtegida soloAdmin={true}>
                <EditarProductos />
              </RutaProtegida>
            }
             />
              <Route
            path="/eliminar-productos"
            element={
              <RutaProtegida soloAdmin={true}>
                <EliminarProducto/>
              </RutaProtegida>
            }
             />
          

          <Route
            path="/agregar-producto"
            element={
              <RutaProtegida soloAdmin={true}>
                <FormularioProducto />
              </RutaProtegida>
            }
          />
        </Routes>
        </div>

        <Footer />
        <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
            />

      </CartProvider>
    </AuthProvider>
  );
}

export default App;




