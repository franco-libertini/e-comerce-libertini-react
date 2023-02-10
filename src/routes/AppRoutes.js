import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Checkout from '../components/Checkout/Checkout';
import CartContainer from '../components/CartContainer/CartContainer';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestro catálogo' color='black' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Nuestro catálogo' color='black' />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer greeting='Nuestro catálogo' color='grey' />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}

export default AppRoutes