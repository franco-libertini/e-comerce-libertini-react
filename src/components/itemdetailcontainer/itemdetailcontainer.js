import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductsbyid } from "../../mockasync";
import Itemdetail from "../itemdetail/itemdetail";
import { getDoc, doc } from "firebase/firestore";
import { datab } from '../../services/firebase/firebaseconfig'
const Itemdetailcontainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() =>{
        document.title='Detalle del producto'
    },[])


     useEffect(() =>{
        const docRef =doc(datab, 'products', productId)
        getDoc(docRef).then(Response=>{
            console.log(Response)
            const data=Response.data

            const productsadapted ={id:Response.id,...data}
            console.log(productsadapted)
        })
            
},[productId])


return(

    
    <div>
    <Itemdetail {...product}/>
        
    </div>
)

}

export default Itemdetailcontainer