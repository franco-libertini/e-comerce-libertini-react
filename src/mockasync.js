const products = [

    {
    id: '1',
    name: 'flipper zero',
    price: 60000,
    category: 'tecnologia',
    img:'https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SY580_.jpg',
    stock: 2,
    description:'Descripcion de flipper zero'
        }  ,
    {
    id: '2',
    name: 'sweter',
    price: 4000,
    category: 'ropa',
    img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-jersey-dentro-1572947763.jpg?crop=0.495xw:0.660xh;0.505xw,0&resize=640:*',
    stock: 25,
    description:'Descripcion de sweter'
        } ,
            {
    id: '3',
    name: 'anillo',
    price: 7000,
    category: 'joyeria',
    img:'https://cdn.shopify.com/s/files/1/0031/8039/6662/products/TI-OR-FC_SX-0001_G2-AM-UNI_6MM_V45_box_grande.jpg?v=1615954190',
    stock: 7,
    description:'Descripcion de Iphone 12'
        } 
]
export const getProducts = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(products)
    }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
    })
}
export const getProductsbyid =(id)=> {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find(prod=>prod.id===id)) 
    },500);
    })
}