// import './CartWidget.css'
// import cart from './assets/cart.svg'
// import { Link } from 'react-router-dom'

// const Cartwidget =({quantity}) =>{

//     return(
//         <Link to='/cart' className="CartWidget">
//         <img src='\assets\images\image2vector.svg' alt='cartwidget' style={{height:'40px',width:'40px',padding:'5px'}}/>
//         { quantity }
//         </Link>
        
//     )

import './CartWidget.css'
import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = ({ quantity }) => {
    return(
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            { quantity }
        </Link>
    );
}

export default CartWidget