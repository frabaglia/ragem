import React, {Component} from 'react'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'
import DumbSubmitBar from '../../dumb/submit-bar'
import {sendMessage, sendMessageOptions} from '../../../graphql/mutations/message'

function mapStateToProps({ui}) {
  return {ui}
}

class SubmitBar extends Component {
  clickHandler = async(event) => {
    event.preventDefault()
    console.log(this.props)
    let {message, channelId, uid} = this.props.ui
    await this.props.sendMessage({
      variables: {
        content: message,
        channelId,
        uid
      }
    })
  }

  onMessageChangeHandler = (event) => {
    this.props.dispatch({
      type: "UPDATE_MESSAGE_INPUT",
      payload: {
        message: event.target.value
      }
    })
  }

  render = () => {
    return (
      <DumbSubmitBar onMessageChangeHandler={this.onMessageChangeHandler} clickHandler={this.clickHandler}></DumbSubmitBar>
    )
  }

}

let GraphQLSubmitBarContainer = graphql(sendMessage, sendMessageOptions)(SubmitBar)

export default connect(mapStateToProps)(GraphQLSubmitBarContainer)
