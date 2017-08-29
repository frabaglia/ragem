import {
  gql
} from 'react-apollo'

export const sendMessage = gql`
mutation SendMessage($content: String!, $uid: String!,$channelId: ID!){
  sendMessage(message:{content: $content, uid: $uid},channelId:$channelId) {
    _id
    name
}}
`

export const sendMessageOptions = {
  name: "sendMessage",
  options: {
    refetchQueries: ['GetMessagesFromChannel']
  }
}
