import {
  gql
} from 'react-apollo'

export const getUsersFromChannel = gql `query GetUsersFromChannel{Channel(id:"5940c010daab330da47e1ffd") {
  _id
  name
  uids {
    _id
    name
  }
}}
`
