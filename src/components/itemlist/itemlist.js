import Item from '../item/item'

const Itemlist = ({products})=>{
    return(
    <articulos class='row row-cols-1 row-cols-md-3 g-4'>
        {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </articulos>
    )
}
export default Itemlist

