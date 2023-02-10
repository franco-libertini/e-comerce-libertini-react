export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        title: data.title,
        img: data.img,
        price: data.price,
        cateogory: data.category,
        description: data.description
    }

    return productAdapted
}