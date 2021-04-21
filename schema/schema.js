const graphql = require('graphql')
const axios = require('axios')
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql
 
// schema - what tells the GraphQL what type of data that we're working with and how all the relations play out between those different pieces of data

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            resolve(parentValue, args){
              // request to json server
              return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(resp => resp.data)
                
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})