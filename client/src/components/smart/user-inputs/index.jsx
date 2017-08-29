import React, {Component} from 'react'
import {connect} from 'react-redux'
import DumbUserInputs from '../../dumb/user-inputs'

function mapStateToProps(store) {
  return {ui: store.ui}
}

class UserInputs extends Component {

  onUsernameChangeHandler = (event) => {
    this.props.dispatch({
      type: "UPDATE_USERNAME_INPUT",
      payload: {
        username: event.target.value
      }
    })
  }

  onChannelChangeHandler = (event) => {
    this.props.dispatch({
      type: "UPDATE_CHANNEL_INPUT",
      payload: {
        channel: event.target.value
      }
    })
  }

  render = () => {
    return (
      <DumbUserInputs onUsernameChangeHandler={this.onUsernameChangeHandler} onChannelChangeHandler={this.onChannelChangeHandler} username={this.props.ui.username} channel={this.props.ui.channel}></DumbUserInputs>
    )
  }

}

export default connect(mapStateToProps)(UserInputs)
