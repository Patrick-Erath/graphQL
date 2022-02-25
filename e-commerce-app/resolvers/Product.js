exports.Product = {
    category: ({categoryId}, args, {categories}) => {
        return categories.find((category) => category.id === categoryId);
    },
    reviews: ({id}, args, {reviews}) => {
        //console.log((id))
       // console.log((products[0].id))
        console.log(reviews.filter((review) => review.productId == id))
        return reviews.filter((review) => review.productId == id);
    }
}