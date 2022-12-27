import './navbar.css'
import Cartwidget from "../carrito/cartwidget"
const Navbar= () =>{

    return(
    <nav className="navbar">
    <h1 className="navbar_titulo">
      e-comerce
    </h1>
    <div >
    <button className="navbar_botones">tecnologia</button>
    <button className="navbar_botones">ropa</button>
    <button className="navbar_botones">joyeria</button>
    </div>
    <Cartwidget/>
  </nav>
  
    )

}
export default Navbar