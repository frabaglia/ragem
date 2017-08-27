import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import {getMessagesFromChannel} from '../../../graphql/queries/message'
import DumbChatLayout from '../../dumb/chat-layout'

class ChatLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 1
    }
  }

  render() {
    return (
      <DumbChatLayout uid={this.state.uid} error={this.props.getMessagesFromChannel.error} messages={this.props.getMessagesFromChannel.Messages}></DumbChatLayout>
    )
  }
}

let GraphQLChatLayoutContainer = graphql(getMessagesFromChannel, { name: 'getMessagesFromChannel'})(ChatLayout)

export default connect()(GraphQLChatLayoutContainer)
