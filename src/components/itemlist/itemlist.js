import Item from '../item/item'

const Itemlist = ({products})=>{
    return(
    <ul>
        {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </ul>
    )
}
export default Itemlist

