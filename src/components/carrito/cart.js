import { useContext } from "react"
import { CartContext } from "../../context/cartcontext"
import CartList from "./cartlist"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1>Tu carrito</h1>
            <CartList cart={cart}/>
        </div>
    )}

export default Cart