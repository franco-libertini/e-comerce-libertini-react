import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { useTitle } from '../../hooks/useTitle'
import { getProducts } from '../../services/firebase/firestore/products'
import { NavLink } from 'react-router-dom';
import Redes from '../redes/redes'

const ItemListContainer = ({ greeting, color }) => {
    useTitle('ecomerce-libertini', [])

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    const rejectApi = () => {
        alert('Hubo un problema al conectarse con la base de datos', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    if (loading) {
        return (
            <div>
                <h2 className='h2loading'>Cargando</h2>
                <div className='lds-dual-ring'></div>
            </div>
        );
    }

    if (error) {

        rejectApi()
        return (
            <div>
                <p>"ups algo salio mal"</p>
            </div>
        );
    }

    return (



        <div className='ItemListContainer'>
            <h1 style={{ color }}>{greeting}</h1>
            <div className='CategoryButtons'>
                <NavLink to={`/category/ropa`} className={({ isActive }) => isActive ? 'ActiveOptionCategoryButtons' : 'CategoryButton'}>ropa</NavLink>
                <NavLink to={`/category/tecnologia`} className={({ isActive }) => isActive ? 'ActiveOptionCategoryButtons' : 'CategoryButton'}>tecnologia</NavLink>
                <NavLink to={`/category/joyeria`} className={({ isActive }) => isActive ? 'ActiveOptionCategoryButtons' : 'CategoryButton'}>joyeria</NavLink>
            </div>
            <ItemList products={products} />
            <div>
            <Redes></Redes>
            </div>

        </div>
        
    )

}



export default ItemListContainer