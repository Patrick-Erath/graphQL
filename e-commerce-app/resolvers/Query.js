const ratingValues = [1,2,3,4,5]

exports.Query = {
    products: (parent, { filter }, {db}) => {
        let filteredProducts = db.products;

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

    product: (parent, {id}, {db}) => {
        return db.products.find(product => product.id === id)
    },
    categories: (parent, args, {db}) => {
        return db.categories
    },
    category: (parent, {id}, {db}) => {
        return db.categories.find((category) => category.id === id )
    },
    reviews: (parent, args, {db}) => {
        return db.reviews;
    },
    review: (parent, {id}, {db}) => {
        return db.reviews.find(review => review.id === id)
    } 
}