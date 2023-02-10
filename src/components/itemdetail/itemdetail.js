import './ItemDetail.css'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'


const ItemDetail = ({ id, title, img, price, description , stock }) => {
    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {        
        addItem({ id, title, price, description, quantity,img})
        setNotification('error',`Se agregó al carrito ${quantity} ${title}`, 5)
    }

    return (
        <div className='ItemDetail'>
            <header className="Header">
                <picture>
                    <img src={img} alt={title} className="ItemDetailImg" />
                </picture>
            </header>
            <div className='card ItemDetailInfo'>
                <section>
                    <h2 className="card ItemDetailTitle">
                        {title}
                    </h2>
                </section>
                <section >
                    <p className="ItemDetailPrice">
                    
                    {description}
                    </p>
                </section>
                <section>
                    <p className="ItemDetailPrice">
                        Precio: ${price}
                    </p>
                </section>
                <div className='ItemDetailCounter'>
                <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                        <Link to='/cart'><button className='ButtonTerminarCompra'>Terminar compra</button></Link>
                        
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                        
                }
                <div>
                <Link to='/' className="navbar-brand"><button className='ButtonTerminarCompra'>Volver a la tienda</button></Link>
                </div>
            </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail