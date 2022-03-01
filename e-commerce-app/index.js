const { ApolloServer } = require('apollo-server');
const { typeDefs} = require('./schema');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutations');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { db } = require('./src/db');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product,
    },
    context: {
        db
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at: " + url)
})