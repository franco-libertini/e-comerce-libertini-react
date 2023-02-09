import {useEffect,useState} from 'react' 
import Itemlist from '../itemlist/itemlist'
import { useParams } from 'react-router-dom'
import { getDocs,collection} from 'firebase/firestore'
import { datab } from '../../services/firebase/firebaseconfig'


const Itemlistcontainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Todos los productos'
    }, [])

    useEffect(() => {
        (async () =>{ 
            setLoading(true)
            
            const productsRef = collection(datab, 'products')

            try {
                const snapshot = await getDocs(productsRef)

                const productsAdapted = snapshot.docs.map(doc => {
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })

                setProducts(productsAdapted)
            } catch (error) {
                console.log(error)
            } finally { 
                setLoading(false)
            }
        })()
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }
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
