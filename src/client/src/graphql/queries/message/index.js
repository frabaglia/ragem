import {
  gql
} from 'react-apollo'

export const getMessagesFromChannel = gql `query GetMessagesFromChannel{
  Messages(channelId:"5940c010daab330da47e1ffd") {
    _id
    uid
    content
}}`
