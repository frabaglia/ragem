import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'
import RoutingPolicy from './components/router'
import './master.css';
import store from './stores'
const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'https://graphql.example.com'})
})

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
      <RoutingPolicy/>
    </ApolloProvider>, document.getElementById('root'))
