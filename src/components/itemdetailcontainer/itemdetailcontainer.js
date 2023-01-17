import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsbyid } from "../../mockasync";
import Itemdetail from "../itemdetail/itemdetail";
const Itemdetailcontainer = () => {

    const [product, setProduct] = useState({})
    const { productId } = useParams()

        useEffect(() =>
            {getProductsbyid(productId)
                .then(product=> {
                    setProduct(product)
                })
                        .catch(error => { console.log(error)})
},[productId])


return(

    
    <div>
    <Itemdetail {...product}/>
        
    </div>
)

}

export default Itemdetailcontainer