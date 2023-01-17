import { useState } from "react"
import "./itemcount.css"
const Itemcount =({initial = 1, stock, Onadd })=> {
const[count,setCount] = useState(initial)

const decrement = () =>{
    if (count > 1)
    setCount(prev=>prev-1)
}
const increment = () =>{
    if (count < stock)
    setCount(prev=>prev+1)
}
return(
<div>
<h3>{count}</h3>
<button class="boton-count" onClick={decrement}>-</button>
<button class="boton-count" onClick={increment}>+</button>
<button class="boton-count" onClick={()=>Onadd(count)}>agregar al carrito</button>


</div>


)

}
export default Itemcount