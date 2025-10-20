import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import ListaUsuarios from './components/ListaUsuarios'
import Productos from './components/Productos'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
          <Route path='/' element={
          <>
            <Header/>
            <Main/>
            <ListaUsuarios/>
          </>
        }/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
