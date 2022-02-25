exports.Category = {
    products: (parent, {id}, {products}) => {
        return products.filter((product) => product.categoryId === id)
    }
}