import {useEffect,useState} from 'react' 
import Itemlist from '../itemlist/itemlist'
import { useParams } from 'react-router-dom'
import { getDocs,collection,query,where } from 'firebase/firestore'
import { datab } from '../../services/firebase/firebaseconfig'


const Itemlistcontainer =({greetings})=>{
    const[products,setProducts]= useState([])
    const [loading,setloading]=useState([true])
    const{categoryId}=useParams()

    useEffect(()=>{
        document.title='todos los productos'
    },[])
    useEffect(()=>{
        setloading(true)
    })
    const collectionRef =categoryId 
    ?query(collection(datab,'products'),where('category','===',categoryId))
    :collection(datab,'products')

    getDocs(collectionRef).then(Response=>{
        console.log(Response)
        const productsadapted =Response.docs.map(doc=>{
                const data=doc.data()
                return {id:doc.id , ...data}
        })
        setProducts(productsadapted)
    }).catch (error=>{
        console.log(error)
    }).finally(()=>
    {setloading(false)
    })

return(
    <div>
        <h1>{greetings}</h1>

            <div >
                <div ><Itemlist class='col' products={products}/></div>
            
            </div>
    </div>
)
}
export default Itemlistcontainer


// const asynFunction = categoryId ? getProductsByCategory: getProducts
// asynFunction(categoryId)
//     .then(productsFromApi => {
//         setProducts(productsFromApi)
//         })
//         setProducts(productsadapted)
//     }).catch (error=>{
//         console.log(error)
//     }).finally(()=>{setloading(false)})
