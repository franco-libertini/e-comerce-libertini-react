import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, img, price }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <picture>
                    <Link to={`/detail/${id}`} className='Option'>
                        <img src={img} alt={title} className="ItemImg" />
                    </Link>
                </picture>
            </header>
            <section>
                <h2 className="ItemTitle">
                    {title}
                </h2>
            </section>
            <section>
                <h3 className="Itemprice">
                    {price}$
                </h3>
            </section>            
        </article>
    )
}

export default Item