import React, {Component} from 'react'
import {connect} from 'react-redux'
import Message from '../../dumb/message'
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
  messageLayout(message, key) {
    if (this.state.uid === message.uid) {
      return (<Message key={key.toString()} content={message.content} me={true}/>)
    } else {
      return (<Message key={key.toString()} content={message.content} me={false}/>)
    }
  }
  renderMessages(messagesArray) {
    var _array = new Array()
    messagesArray.map((msg, index) => {
      _array.push(this.messageLayout(msg, index))
    })
    return _array
  }
  send = (e) => {
    e.preventDefault()
    this.props.dispatch(sendMessage())
  }
  render() {
    return (
      <div className="chat">
        <section>{this.renderMessages(this.props.messages)}</section>
        <form>
          <input type="text" id="channel" placeholder=""></input>
          <input id="username" type="submit" value="submit" placeholder="" onClick={this.send}></input>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Chat)
