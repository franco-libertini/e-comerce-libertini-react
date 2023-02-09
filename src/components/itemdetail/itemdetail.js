import { useState,useContext } from "react"
import '../item/itemstyles.css'
import './itemdetails.css'
import { Link } from "react-router-dom"
import Itemcount from "../itemcount/itemcount"
import { CartContext } from "../../context/cartcontext"

const Itemdetail= ({id, name, img, price, category, description, stock}) =>{
    
    const [Quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const handleOnadd = (qty) => {
        setQuantity(parseInt(qty))
        addItem({id, name, Quantity,price })
}
    return (
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
            <img className="itemsimgs" src={img} alt={name}/>
            <div class="d-flex flex-column">
                <p class="precio">$ {price}</p>
                
                <p class="descripcion" >Descripcion: {description}</p>
            </div>
            
            {
                    Quantity > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <Itemcount stock={stock} onAdd={handleOnadd} />
                    )
                }
            
        </div>
    )
}
export default Itemdetail