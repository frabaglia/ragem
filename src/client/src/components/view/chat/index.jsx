import React, {Component} from 'react'
import {connect} from 'react-redux'
import ChatLayout from '../../dumb/chat-layout'
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

  send = (e) => {
    e.preventDefault()
    this.props.dispatch(sendMessage())
  }
  render() {
    return (
      <div className="chat">
        <ChatLayout></ChatLayout>
        <form>
          <input type="text" id="channel" placeholder=""></input>
          <input id="username" type="submit" value="submit" placeholder="" onClick={this.send}></input>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Chat)
