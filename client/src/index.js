import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'
import Core from './components/core'
import './master.css'
import store from './stores'
const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:5001/graphql'})
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client} store={store}>
      <Core/>
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root'))
