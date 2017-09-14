import {
  gql
} from 'react-apollo'

// import gql from 'graphql-tag' // NOTE: lets us define GraphQL

// recives
// @ user
// @ channel

/// *** Using redux state in mutations *** ///
// https://medium.freecodecamp.org/tutorial-how-to-use-graphql-in-your-redux-app-9bf8ebbeb362

export const connectUserToChannel = gql `
  mutation ConnectUser($user: String!, $channel: String!){
   connectUser(user:{name:$user},channel:{name:$channel}){
     _id
     name
     uids {
       _id
       name
  }}}`

export const connectUserToChannelOptions = {
  props: ({
    mutate
  }) => ({
    connectUserToChannel: ({user, channel}) => mutate({
      variables: {
        user,
        channel
      }
    }),
  }),
}
