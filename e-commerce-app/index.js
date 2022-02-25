const { ApolloServer } = require('apollo-server');
const { typeDefs} = require('./schema');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { products, categories, reviews } = require('./src/db');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        products: products,
        categories: categories,
        reviews: reviews
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at: " + url)
})