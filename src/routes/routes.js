import { Routes, Route } from 'react-router-dom'
import Itemdetailcontainer from '../components/itemdetailcontainer/itemdetailcontainer';

import Itemlistcontainer from '../components/itemlistcontainer/itemlistcontainer'
import Cart from '../components/carrito/cart';

const AppRouter = () => {
    return (
       <Routes>
            <Route path='/' element={<Itemlistcontainer greeting='Todos nuestro products'/>}/>
            <Route path='/category/:categoryId' element={<Itemlistcontainer greeting='Productos filtrados'/>} />
            <Route path='/detail/:productId' element={<Itemdetailcontainer />} />
            <Route path='/cart' element={<Cart />} />
        </Routes> 
    )
}

export default AppRouter