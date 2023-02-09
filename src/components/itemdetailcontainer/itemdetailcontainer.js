import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductsbyid } from "../../mockasync";
import Itemdetail from "../itemdetail/itemdetail"
import { getDoc, doc } from 'firebase/firestore'
import { getDoc, doc } from 'firebase/firestore'
import { datab } from '../../services/firebase/firebaseconfig'
const Itemdetailcontainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() =>{
        document.title='Detalle del producto'
    },[])


    useEffect(() => {
        (async () => {
            const productRef = doc(db, 'products', productId)
            try {
            const snapshot = await getDoc(productRef)
            const fields = snapshot.data()
            const productAdapted = { id: snapshot.id, ...fields}
    
            setProduct(productAdapted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle {product.name}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default Itemdetailcontainer