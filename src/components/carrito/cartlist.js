import ItemCart from "../itemcart/itemcart"

const CartList = ({ cart }) => {
    return (
        <div>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
        </div>
    )
}

export default CartList