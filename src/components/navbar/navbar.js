import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { totalQuantity } = useContext(CartContext)
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <Link to='/' className="navbar-brand">
            <img src="..\assets\images\ecomercelogo.webp" alt='logo'/>
            <h1 className='navbar-brand-text'>E-commerce-libertini</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
          </div>
        <div>
        <CartWidget totalQuantity={totalQuantity}/>
        </div>
      </div>
    </nav>
    
    )
}

export default Navbar