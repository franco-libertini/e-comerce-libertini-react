import './ItemDetail.css'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'


const ItemDetail = ({ id, title, img, price, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {        
        addItem({ id, title, price, quantity,img})
        setNotification('error',`Se agregó al carrito ${quantity} ${title}`, 5)
    }

    return (
        <div className='ItemDetail'>
            <header className="Header">
                <picture>
                    <img src={img} alt={title} className="ItemDetailImg" />
                </picture>
            </header>
            <div className='ItemDetailInfo'>
                <section>
                    <h2 className="ItemDetailTitle">
                        {title}
                    </h2>
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
            </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail