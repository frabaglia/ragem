import React, {Component} from 'react'
import {connect} from 'react-redux'
import Message from '../../dumb/message'
import {gql, graphql} from 'react-apollo'

function mapStateToProps(store) {
  return {messages: store.messages}
}

class ChatLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 1
    }
  }
  messageLayout(message, key) {
    if (this.state.uid === message.uid) {
      return (<Message key={key.toString()} content={message.content} me={true}/>)
    } else {
      return (<Message key={key.toString()} content={message.content} me={false}/>)
    }
  }
  renderMessages(messagesArray) {
    if (typeof messagesArray === 'undefined' || messagesArray == null || messagesArray == []) {
      return (
        <div></div>
      )
    }

    var _array = new Array()
    messagesArray.map((msg, index) => {
      _array.push(this.messageLayout(msg, index))
    })
    return _array
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.props.data.error)}</h1>
        <div>{this.renderMessages(this.props.data.Messages)}</div>
      </div>
    )
  }
}

const getMessagesFromChannelQuery = gql `query{
  Messages(channelId:"5940c010daab330da47e1ffd") {
    _id
    uid
    content
}}`

const sendMessageToChannelQuery = gql `mutation{
  addMessage(message:{content:"CHAU",uid:"5940c066daab330da47e1fff"},channelId:"5940c010daab330da47e1ffd") {
    _id
    name
}}`

let GraphQLChatLayoutContainer = graphql(getMessagesFromChannelQuery)(ChatLayout)

export default connect(mapStateToProps)(GraphQLChatLayoutContainer)
