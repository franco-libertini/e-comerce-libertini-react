import { Link} from 'react-router-dom'
import './navbar.css'
import Cartwidget from "../carrito/cartwidget"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartcontext'
const Navbar= () =>{

  const navigate = useNavigate()
  const { totalQuantity } = useContext(CartContext)
    return(
      
    <nav className="navbar">
    <h1 className="navbar_titulo" onClick={() => navigate('/')} >
    E-commerce-libertini
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