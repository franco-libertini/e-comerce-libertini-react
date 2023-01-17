const products = [

    {
    id: '1',
    name: 'flipper zero',
    price: 60000,
    category: 'tecnologia',
    img:'https://m.media-amazon.com/images/I/51xPGmiNQGL._AC_SY580_.jpg',
    stock: 2,
    description:'aparato hacker , mas informacion pendiente'
        }  ,
    {
    id: '2',
    name: 'sweter',
    price: 4000,
    category: 'ropa',
    img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-jersey-dentro-1572947763.jpg?crop=0.495xw:0.660xh;0.505xw,0&resize=640:*',
    stock: 25,
    description:`
    - Saquitos tejidos de invierno.

    - Excelente calidad y confección.

    - Talle único`
        } ,
            {
    id: '3',
    name: 'anillo',
    price: 7000,
    category: 'joyeria',
    img:'https://cdn.shopify.com/s/files/1/0031/8039/6662/products/TI-OR-FC_SX-0001_G2-AM-UNI_6MM_V45_box_grande.jpg?v=1615954190',
    stock: 7,
    description:'anillo de plata bañado en oro con adorno de madera'
        },
        {
    id: '4',
    name: 'iphone 13',
    price: 285000,
    category: 'tecnologia',
    img:'https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.8.png',
    stock: 9,
    description:'Una pantalla superbrillante en un diseño resistente. Una nueva funcionalidad para grabar videos dignos de Hollywood de una forma superfácil. Un chip ultrarrápido. Y un gran salto en duración de batería que vas a notar todos los días.'
        } ,
{
    id: '5',
    name: 'funda para iphone',
    price: 900,
    category: 'tecnologia',
    img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/985/681/products/396039dc-4a7b-46ef-83d0-06ab76da3ecd-0de8dd89f37e2f34d816573082671329-640-0.jpg',
    stock: 24,
    description:'Protege tu iPhone del agua, el polvo , los golpes y mantenlo calentito con esta funda. Compra accesorios de protección online con envío rápido y gratuito.'
        } ,
    {
    id: '6',
    name: 'short de muay thai',
    price: 3000,
    category: 'ropa',
    img:'https://budokanwebsite.s3.amazonaws.com/wp-content/uploads/2022/09/09140647/Black-Tiger-Short-2.jpeg',
    stock: 10,
    description:'Short Muay Thai Cintura elastizada. Novedosos diseños. Amplia libertad de movimientos. Confeccionados en resistente polyester. No destiñen'
        } ,
{
    id: '7',
    name: 'reloj inteligente xiaomi',
    price: 20000,
    category: 'tecnologia',
    img:'https://axa.com.ar/webaxa/23795-medium_default/xiaomi-mi-band-6-smartwatch-reloj-inteligente-black.jpg',
    stock: 5,
    description:
    ` MODELO: XT-SW56
    - COLOR: NEGRO                
    - TIPO DE PANTALLA: 1.69", 128*180
    - DIMENSIONES: 44mm x 38mm
    - CAPACIDAD DE BATERIA: 200mAh`
        } ,
{
    id: '8',
    name: 'campera de cuero',
    price: 32000,
    category: 'ropa',
    img:'https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Mens-Jacket-Keanu-Black-110221-2.jpg?v=1636392243',
    stock: 8,
    description:'campera de la maxima calidad'
        } ,
{
    id: '9',
    name: 'collar calavera',
    price: 4000,
    category: 'joyeria',
    img:'https://cdn.shopify.com/s/files/1/0522/3858/1922/collections/cadenas-para-hombres-gold-shield_1400x.jpg?v=1655957210',
    stock: 15,
    description:'collar de plata con pendiente '
        } ,
{
    id: '10',
    name: 'leggins',
    price: 2500,
    category: 'ropa',
    img:'https://laopinion.com/wp-content/uploads/sites/3/2021/01/Antes.jpg?quality=75&strip=all&w=1024',
    stock: 36,
    description:'calzas elastizadas multicolor'
        } ,
{
    id: '11',
    name: 'cadena de oro',
    price: 9999,
    category: 'joyeria',
    img:'https://joieriagrau.com/img/cms/home/Acceso%20directo/collares%20para%20mujer,%20cadena%20fina%20de%20oro%20y%20diamantes.jpg',
    stock: 1,
    description:'cadena de 14 k'
        } ,
{
    id: '12',
    name: 'aros de oro y diamante',
    price: 7000,
    category: 'joyeria',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN-W3yHlzEvxv34S6iUjdC5mGp7L9ZjxWNEHYXEG_EdEep0vvTFJV72dZM6UHlYy9fR8&usqp=CAU',
    stock: 3,
    description:'aros bañados en oro de 14 k y diamantes de laboratorio'
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