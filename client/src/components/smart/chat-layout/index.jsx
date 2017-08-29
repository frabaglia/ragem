import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import {getMessagesFromChannel} from '../../../graphql/queries/message'
import DumbChatLayout from '../../dumb/chat-layout'

function mapStateToProps({uid}) {
  return {uid}
}
class ChatLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DumbChatLayout uid={this.props.uid} loading={this.props.getMessagesFromChannel.loading} error={this.props.getMessagesFromChannel.error} messages={this.props.getMessagesFromChannel.Messages}></DumbChatLayout>
    )
  }
}

let GraphQLChatLayoutContainer = graphql(getMessagesFromChannel, {name: 'getMessagesFromChannel'})(ChatLayout)

export default connect(mapStateToProps)(GraphQLChatLayoutContainer)
