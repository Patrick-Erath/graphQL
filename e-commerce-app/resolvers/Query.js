const { reviews } = require("../src/db")

exports.Query = {
    products: (parent, args, {products}) => {
        return products
    },
    product: (parent, {id}, {products}) => {
        return products.find(product => product.id === id)
    },
    categories: (parent, args, {categories}) => {
        return categories
    },
    category: (parent, {id}, {categories}) => {
        return categories.find((category) => category.id === id )
    },
    reviews: (parent, args, {reviews}) => {
        return reviews;
    },
    review: (parent, {id}, {reviews}) => {
        return reviews.find(review => review.id === id)
    } 
}