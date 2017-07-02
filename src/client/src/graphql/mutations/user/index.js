import {
  gql
} from 'react-apollo'

export const connectUserToChannel = gql `mutation{
 connectUser(user:{name:"Chueko"},channel:{name:"vcx"}) {
   _id
   name
 }
}`
