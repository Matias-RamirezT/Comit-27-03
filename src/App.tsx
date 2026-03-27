import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import Home from "./Home"
import Favoritos from "./Favoritos"
import Informativa from "./Informativa"
import Original from "./Original"
import Usuario from "./Usuario"
import Equipo from "./Equipo"
import './App.css'

function App() {

  return (
    <>

    <Router>
      <nav className="c-menu">
      <Link to ={"/Home"}> Home</Link>
      <Link to ={"/Favoritos"}> Favoritos</Link>
      <Link to ={"/Informativa"}> Informaiva</Link>
      <Link to ={"/Original"}> Original</Link>
      <Link to ={"/Usuario"}> Usuario</Link>
      <Link to ={"/Equipo"}> Equipo</Link>



      </nav>



    
    <Routes>

      <Route path="/Home" element= {<Home /> } />
      <Route path="/Favoritos" element= {<Favoritos /> } />
      <Route path="/Informativa" element= {<Informativa /> } />
      <Route path="/Original" element= {<Original /> } />
      <Route path="/Usuarios" element= {<Usuario /> } />
      <Route path="/Equipo" element= {<Equipo /> } />
  
    </Routes>
    </Router>
     
    </>
  )
}

export default App
