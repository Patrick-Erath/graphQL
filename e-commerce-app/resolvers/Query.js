const ratingValues = [1,2,3,4,5]

exports.Query = {
    products: (parent, { filter }, {products, reviews}) => {
        let filteredProducts = products;
        
        if(filter){
            const { onSale, averageRating } = filter;
            if(onSale !== undefined){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale === onSale
                })
            }
            if(ratingValues.includes(averageRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews
                    return avgProductRating >= averageRating
                })
            }
        }

        return filteredProducts
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

function averageRating(){

}