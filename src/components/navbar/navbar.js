import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Cartwidget from "../carrito/cartwidget"
const Navbar= () =>{

    return(
    <nav className="navbar">
    <h1 className="navbar_titulo">
      <Link to ='./'>e-comerce</Link>
    </h1>
    
    <div>
      <Link className='navbar_botones' to='/category/tecnologia'>Tecnologia</Link>
      <Link className='navbar_botones' to='/category/ropa'>ropa</Link>
      <Link className='navbar_botones' to='/category/joyeria'>joyeria</Link>
    
    </div>
    <Cartwidget quantity={totalQuantity}/>
  </nav>
  
    )

}
export default Navbar