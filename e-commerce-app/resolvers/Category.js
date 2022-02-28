const ratingValues = [1,2,3,4,5]

exports.Category = {
    products: ({id}, {filter}, {products, reviews}) => {
        let filteredProducts = products;

        if(filter){
            const {onSale, averageRating} = filter;
            if(onSale != undefined){
                filteredProducts = products.filter((product) => {
                    return product.onSale === onSale
                })
            }
            if(ratingValues.includes(averageRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfReviews
                    return avgProductRating >= averageRating
                })
            }
        }

        return filteredProducts
    }
}