import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({ totalQuantity }) => {
    return (
        <Link to='/cart' className="CartWidgetNumber">
            <img src='..\assets\images\carticon.png' alt='*cart*' />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget