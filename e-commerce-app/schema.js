const { gql } = require('apollo-server')

exports.typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID): Category
        reviews: [Review!]!
        review(id: ID!): Review!
    }

    type Product{
        id: ID!
        name: String!
        description: String
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category!
        reviews: [Review!]!
    }

    type Category{
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Review{
        id: ID!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }
`