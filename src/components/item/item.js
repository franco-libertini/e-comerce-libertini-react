import { Link,useNavigate } from 'react-router-dom'
import './itemstyles.css'
const Item=({ id, name, img, price, stock })=>{ 
    const navigate =useNavigate()
    
    return ( 
        
        <div class="card mx-auto col-md-2 col-10 mt-5">
            <img class='card-img-top mx-auto img-thumbnail'
                 src={img}alt={name}
                width="auto" height="auto"/>
            <div class="card-body d-flex flex-column text-center mx-auto">
                <div class='cvp'>
                    <h5 class="card-title font-weight-bold">{name}</h5>
                    <p class="text card-text">${price}</p>
                    <p class="text">stock: {stock}</p>
                    <Link class="btn details px-auto" to={`/Item/${id}`}>ver detalles</Link>
                    <button  class="btn cart px-auto">ADD TO CART</button>
                </div>
            </div>
        </div>

    













)}
export default Item