import './itemstyles.css'
const Item=({ name, img, price })=>{ 
    return ( 
    <div>
        <h4>{name}</h4>
        <img className="itemsimgs" src={img}alt={name}/>
        <p>${price}</p>
    </div>
)}
export default Item