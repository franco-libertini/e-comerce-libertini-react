import { addDoc, getDocs, writeBatch, query, collection, where, documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { db } from "../../services/firebase/firebaseconfig"
import { NotificationContext } from "../../notification/NotificationService"
import './Checkout.css'

const Checkout = () => {
    const setNotification = useContext(NotificationContext)

    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')

    

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            

            const prodRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const prodAdded = await getDocs(prodRef)
            const { docs } = prodAdded

            const outOfStock = []

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCant = productAddedToCart.quantity

                if (stockDb >= prodCant) {
                    batch.update(doc.ref, {
                        stock: stockDb - prodCant
                    })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()                
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                const { id } = orderAdded
                setOrderId(id)
                clearCart()                
            } else {
                console.error('productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h4 className="H4" style={{ marginTop: '50px', fontSize: '40px' }}>Generando orden...</h4>
    }

    if (orderId) {
        return (
            <div className="container">
                <h4 style={{ color: "black", marginTop: "60px", marginBottom: "60px" }}>{name}, tu compra fue realizada con ??xito!</h4>
                <div className="card item-detail-card" style={{ color: "#9da5d2" }}>
                    <div className="card-body item-detail-body">
                        <h5 className="card-title" style={{ color: "black" }}>Tu n??mero de compra es: {orderId}</h5>
                    </div>
                </div>
                <div>
                    <h5 style={{ color: 'black', marginTop: '40px',letterSpacing:'4px' }}>Momentaneamente le llegara un mail deconfirmacion para proceder a la facturacion de su compra, de no verlo revise su carpeta de SPAM</h5>
                    <h4 style={{ color: 'black', marginTop: '40px',letterSpacing:'4px',textDecoration:'underline' }}>MUCHAS GRACIAS POR COMPRAR CON NOSOTROS!</h4>
                    <Link to='/'><p style={{ fontSize: '20px', marginTop: '90px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
                </div>
            </div>

        )
    }

    if (cart.length === 0) {
        return (
            <div>
                <h4 className="H4" style={{ marginTop: '80px', fontSize: '30px' }}>No hay productos en el carrito</h4>
                <Link to='/'><p style={{ marginTop: '40px', color: 'black', textDecoration: 'none' }} >Volver al inicio</p></Link>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone === '' || email2 === '') {
            setNotification('error', `Todos los campos deben estar completos para poder finalizar su compra`, 5);
        } else if (email !== email2) {
            setNotification('error', `Los mails no coinciden`, 5);
        } else {
            createOrder();
        }

    };

    return (
        <div className="form-container">
            <h4 className="title-pag" style={{ color: "black", marginTop: "50px", marginBottom: "70px", fontSize: '35px' }}>Complet?? tus datos y confirm?? la compra</h4>
            <div className="container">
                <form className="FormularioOrden">
                    <div className="form-group">
                        <input type="text" className="form-control" value={name} placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="number" className="form-control " value={phone} placeholder="Tel??fono" onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" value={email2} placeholder="Repetir E-mail" onChange={(e) => setEmail2(e.target.value)} required />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="submit" className="ButtonGenerarOrden">Generar orden</button>
                </form>
            </div>


        </div>
    )
}

export default Checkout