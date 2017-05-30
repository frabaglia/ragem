import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/root/app/app'
// import registerServiceWorker from './utils/registerServiceWorker'
import './index.css'
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'https://graphql.example.com'})
})

ReactDOM.render(
  <ApolloProvider client={client}><App/></ApolloProvider>, document.getElementById('root'))

// registerServiceWorker()
