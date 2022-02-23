const { ApolloServer, gql} = require('apollo-server')
const data = require('./src/products.js');

const typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID): Category
    }

    type Product{
        id: ID!
        name: String!
        description: String
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
    }

    type Category{
        id: ID!
        name: String!
    }
`

const resolvers = {
    Query: {
        products: () => {
            return data.products
        },
        product: (parent, args, context) => {
            const { id } = arg;
            return data.products.find(product => product.id === id)
        },
        categories: () => {
            return data.categories
        },
        category: (parent, args, context) => {
            const { id } = args;
            return data.categories.find((category) => category.id === id )
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Server is ready at: " + url)
})