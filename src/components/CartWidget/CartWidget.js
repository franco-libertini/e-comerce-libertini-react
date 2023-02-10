import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="CartWidgetNumber">
            
            <i className="fa fa-shopping-cart"></i>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget