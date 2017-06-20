import React, {Component} from 'react'
import {connect} from 'react-redux'
import ChatLayout from '../../dumb/chat-layout'
import SubmitBar from '../../smart/submit-bar'
import {sendMessage} from '../../../constants/actions/api'
import './style.css'

function mapStateToProps(store) {
  return {messages: store.messages}
}

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: 1
    }
  }

  render() {
    return (
      <div className="chat">
        <ChatLayout></ChatLayout>
        <SubmitBar></SubmitBar>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Chat)
