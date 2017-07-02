import {
  gql
} from 'react-apollo'

import {
  getUsersFromChannel
} from '../../queries/user'

export const connectUserToChannel = gql `mutation ConnectUser{
 connectUser(user:{name:"Chueko"},channel:{name:"vcx"}) {
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
      console.log(response.data.connectUser);
    }
  }
}
