import {gql} from 'react-apollo'

export const sendMessageToChannel = gql `mutation{
  addMessage(message:{content:"CHAU!!!",uid:"5940c066daab330da47e1fff"},channelId:"5940c010daab330da47e1ffd") {
    _id
    name
}}`
