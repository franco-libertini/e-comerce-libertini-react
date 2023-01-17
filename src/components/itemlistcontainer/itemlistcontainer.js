
import Itemlist from '../itemlist/itemlist'
import {useEffect,useState} from 'react' 
import {getProducts, getProductsByCategory} from '../../mockasync'
import { useParams } from 'react-router-dom'

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId}=useParams()


useEffect(() => {

    const asynFunction = categoryId ? getProductsByCategory: getProducts
asynFunction(categoryId)
    .then(productsFromApi => {
        setProducts(productsFromApi)
    })
            .catch(Error=>{console.log(Error)
    })
    }, [categoryId])

console.log(products)
const productsComponents= products.map(prod => <li key={prod.id}>{prod.name}{prod.img}</li>)
console.log(productsComponents)
    
return(
    <div className='ItemListContainer'>
        <h1>{greeting}</h1>
       <Itemlist products={products}/>
    </div>
)
}
export default Itemlistcontainer