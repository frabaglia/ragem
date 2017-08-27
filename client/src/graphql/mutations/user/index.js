import {
  gql
} from 'react-apollo'

import {
  getUsersFromChannel
} from '../../queries/user'

// import gql from 'graphql-tag' // NOTE: lets us define GraphQL

// recives
// @ user
// @ channel

/// *** Using redux state in mutations *** ///
// https://medium.freecodecamp.org/tutorial-how-to-use-graphql-in-your-redux-app-9bf8ebbeb362

export const connectUserToChannel = gql `mutation ConnectUser{
 connectUser(user:{name:"$user"},channel:{name:"$channel"}) {
   _id
   name
   uids {
     _id
     name
  }
 }
}`

export const connectUserToChannelOptions = {
  options: {
    refetchQueries: ["GetUsersFromChannel"],
    update: (proxy, response) => {
      let uids = response.data.connectUser.uids
      uids.forEach((uid) => {
        console.log(uid)
      })
    }
  }
}
