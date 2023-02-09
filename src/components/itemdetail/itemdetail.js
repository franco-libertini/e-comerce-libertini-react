import { useState } from "react"
import '../item/itemstyles.css'
import './itemdetails.css'
import { Link } from "react-router-dom"
import Itemcount from "../itemcount/itemcount"
const Itemdetail= ({id, name, img, price, category, description, stock}) =>{
    
    const [Quantity, setQuantity] = useState(0)
    
    const handleOnadd = (qty) => {
        setQuantity(qty)
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
                    quantity > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                }
            
        </div>
    )
}
export default Itemdetail