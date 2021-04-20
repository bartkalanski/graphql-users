const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

const app = express()

// app.use - how we wire up middleware to express application
// middlewares - tiny funtions meant to intercept or modify requests as they come through an express server
app.use('/graphql', graphqlHTTP({ 
    schema: schema,
    // development tool that allows to make queries against our development server
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening')
})